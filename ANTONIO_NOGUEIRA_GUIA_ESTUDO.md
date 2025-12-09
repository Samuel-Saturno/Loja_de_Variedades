# 📘 Guia de Estudo - Antonio Nogueira da Silva Neto

**Papel no Projeto:** Integration Lead & Tech Lead  
**Responsabilidade Principal:** Integração Frontend-Backend  
**Commits:** 22 (53.7% do projeto)

---

## 🎯 Resumo do Seu Papel

Você foi o **coração técnico da integração** do projeto. Enquanto outros membros focaram em áreas específicas (Samuel no banco, Antonio Joaquim no backend, Luiz Eduardo no frontend), **você foi o elo que conectou tudo**. Seu trabalho garantiu que o frontend React conversasse perfeitamente com a API Spring Boot.

---

## 💻 O Que Você Fez - Detalhamento Técnico

### 1️⃣ Configuração de Autenticação JWT (Sprint 2)

#### O Problema
O sistema precisava de autenticação segura onde clientes e admins tivessem acessos diferentes.

#### Sua Solução
```java
// SecurityFilterChain - você configurou isso
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .csrf().disable()
        .authorizeHttpRequests()
            .requestMatchers("/api/auth/**").permitAll()
            .requestMatchers("/api/admin/**").hasRole("ADMIN")
            .requestMatchers("/api/products/**").permitAll()
        .and()
        .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    
    return http.build();
}
```

**Decisões que você tomou:**
- ✅ Desabilitou CSRF (necessário para APIs REST stateless)
- ✅ Configurou rotas públicas (`/api/auth/**`, `/api/products/**`)
- ✅ Protegeu rotas administrativas (`/api/admin/**` só para ROLE_ADMIN)
- ✅ Sessões stateless (JWT não usa cookies de sessão)

**Por que isso é importante:**
- JWT permite autenticação sem estado (scalável)
- Tokens expiram em 24h (segurança)
- Cada requisição valida o token no header `Authorization: Bearer <token>`

---

### 2️⃣ Resolução de CORS (Sprint 2-3)

#### O Problema
Frontend rodando em `localhost:5173` (Vite) não conseguia fazer requisições para backend em `localhost:8080` devido a política de segurança do navegador.

#### Sua Solução
```java
// CorsConfiguration - você implementou isso
@Bean
public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration configuration = new CorsConfiguration();
    configuration.setAllowedOrigins(Arrays.asList(
        "http://localhost:5173",  // Vite dev server
        "http://localhost:8080"   // Backend servindo frontend em produção
    ));
    configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
    configuration.setAllowedHeaders(Arrays.asList("*"));
    configuration.setAllowCredentials(true);
    
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", configuration);
    return source;
}
```

**Decisões que você tomou:**
- ✅ Permitiu origens específicas (não `*` por segurança)
- ✅ Habilitou métodos HTTP necessários (GET, POST, PUT, DELETE)
- ✅ `allowCredentials(true)` para enviar cookies/headers de autenticação
- ✅ Aplicou em todas as rotas (`/**`)

**Problema que você resolveu:**
Antes: `Access to fetch at 'http://localhost:8080/api/products' from origin 'http://localhost:5173' has been blocked by CORS policy`  
Depois: Requisições funcionando perfeitamente ✅

---

### 3️⃣ Cliente API com Axios (Sprint 3)

#### O Problema
Frontend precisava fazer requisições HTTP de forma organizada, com headers de autenticação automáticos.

#### Sua Solução
```javascript
// src/api/apiClient.js - você criou isso
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Interceptor para adicionar JWT automaticamente
apiClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

// Interceptor para lidar com erros (ex: 401 -> redireciona para login)
apiClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default apiClient;
```

**Decisões que você tomou:**
- ✅ Centralizou a URL base (`/api` em `localhost:8080`)
- ✅ Interceptor de request: adiciona JWT automaticamente em toda requisição autenticada
- ✅ Interceptor de response: redireciona para login se token expirou (401)
- ✅ Facilita manutenção (muda baseURL em 1 lugar só)

**Como isso facilitou o trabalho do time:**
Antes:
```javascript
fetch('http://localhost:8080/api/products', {
    headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
});
```

Depois (graças ao seu apiClient):
```javascript
apiClient.get('/products');  // Token é adicionado automaticamente!
```

---

### 4️⃣ Integração do Fluxo de Login (Sprint 3)

#### O Problema
Conectar a página de login React com a API de autenticação Spring Boot.

#### Sua Solução
```javascript
// services/authService.js - você implementou isso
import apiClient from '../api/apiClient';

export const login = async (username, password) => {
    try {
        const response = await apiClient.post('/auth/login', {
            username,
            password
        });
        
        const { token, role } = response.data;
        
        // Salva token e role no localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('userRole', role);
        
        return { success: true, role };
    } catch (error) {
        console.error('Erro no login:', error);
        return { success: false, message: 'Credenciais inválidas' };
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    window.location.href = '/';
};

export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};

export const isAdmin = () => {
    return localStorage.getItem('userRole') === 'ADMIN';
};
```

**Fluxo que você implementou:**
1. Usuário digita username/password na página Login
2. `authService.login()` envia POST para `/api/auth/login`
3. Backend valida (Spring Security + JWT)
4. Backend retorna `{ token: "eyJhbG...", role: "ADMIN" }`
5. Você salva no `localStorage`
6. Redireciona para `/home` (cliente) ou `/manage` (admin)

**Decisões de persistência:**
- ✅ `localStorage` para manter login entre refreshes da página
- ✅ Verificação de role (`isAdmin()`) para mostrar/esconder botões admin
- ✅ `logout()` limpa storage e redireciona para home

---

### 5️⃣ Integração do CRUD de Produtos (Sprint 3)

#### O Problema
Painel admin precisava adicionar/editar/excluir produtos via API.

#### Sua Solução
```javascript
// services/productService.js - você criou isso
import apiClient from '../api/apiClient';

export const getAllProducts = async () => {
    const response = await apiClient.get('/products');
    return response.data;
};

export const getProductById = async (id) => {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
};

export const createProduct = async (productData) => {
    const response = await apiClient.post('/admin/products', productData);
    return response.data;
};

export const updateProduct = async (id, productData) => {
    const response = await apiClient.put(`/admin/products/${id}`, productData);
    return response.data;
};

export const deleteProduct = async (id) => {
    await apiClient.delete(`/admin/products/${id}`);
};
```

**Integração com componentes React:**
```javascript
// pages/AddProduct/index.jsx
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await createProduct({
            name: productName,
            description,
            price: parseFloat(price),
            imageUrl
        });
        alert('Produto adicionado com sucesso!');
        navigate('/manage');
    } catch (error) {
        alert('Erro ao adicionar produto');
    }
};
```

**Decisões que você tomou:**
- ✅ Rotas `/products` são públicas (GET - qualquer um pode ver)
- ✅ Rotas `/admin/products` são protegidas (POST/PUT/DELETE - só admin)
- ✅ Tratamento de erros com `try/catch` e feedback ao usuário

---

### 6️⃣ Integração do Carrinho de Compras (Sprint 3)

#### O Problema
Carrinho precisava adicionar produtos, ajustar quantidades, calcular total, e sincronizar com backend.

#### Sua Solução Parcial (Frontend)
```javascript
// pages/Cart/index.jsx - lógica que você integrou
const [cartItems, setCartItems] = useState([]);

const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
        // Incrementa quantidade
        setCartItems(cartItems.map(item =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    } else {
        // Adiciona novo item
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
};

const calculateTotal = () => {
    return cartItems.reduce((total, item) => 
        total + (item.price * item.quantity), 0
    ).toFixed(2);
};

// Persiste no localStorage
useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}, [cartItems]);
```

**Decisões técnicas:**
- ✅ Estado local com `useState` (React hooks)
- ✅ Persistência com `localStorage` (carrinho sobrevive a refresh)
- ✅ Lógica de incremento de quantidade
- ✅ Cálculo de total com `reduce()`

**Desafio que você enfrentou:**
Sincronizar carrinho entre frontend (localStorage) e backend (Order/OrderItem). Isso foi complexo e exigiu refatoração.

---

### 7️⃣ Configuração PostgreSQL em Produção (Sprint 3 - Dia da Apresentação)

#### O Problema
Sistema usava H2 (banco em memória) para desenvolvimento, mas apresentação precisava de PostgreSQL persistente.

#### Sua Solução
```properties
# application.properties - você configurou isso
spring.datasource.url=jdbc:postgresql://localhost:5432/loja_variedades
spring.datasource.username=postgres
spring.datasource.password=postgres
spring.datasource.driver-class-name=org.postgresql.Driver

spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

# Flyway para migrations
spring.flyway.enabled=true
spring.flyway.locations=classpath:db/migration
```

**Passos que você executou:**
1. Instalou PostgreSQL no servidor
2. Criou database `loja_variedades`
3. Configurou credenciais no `application.properties`
4. Executou migrations Flyway (V1__init.sql)
5. Criou usuário admin e usuário comum via SQL seed

**Por que isso foi importante:**
- H2 perde dados ao reiniciar
- PostgreSQL é banco production-ready
- Demonstra que o sistema funciona com banco real

---

### 8️⃣ Seed de Usuários para Demonstração (Sprint 3)

#### O Problema
Apresentação precisava de credenciais prontas (admin + cliente).

#### Sua Solução
```sql
-- V1__init.sql (migrations) + seed manual
INSERT INTO users (username, password, role) VALUES
('admin', '$2a$10$...', 'ADMIN'),  -- senha: admin123
('cliente', '$2a$10$...', 'USER');  -- senha: cliente123

-- Produtos para demo
INSERT INTO products (name, description, price, image_url) VALUES
('Notebook Dell', 'Core i5, 8GB RAM', 2999.90, 'https://...'),
('Mouse Logitech', 'Sem fio', 89.90, 'https://...');
```

**Decisões:**
- ✅ Senhas com BCrypt (hash seguro)
- ✅ 1 admin + 1 cliente (demonstra roles diferentes)
- ✅ Produtos pré-cadastrados (apresentação mais fluida)

---

### 9️⃣ Build e Deploy para Apresentação (Sprint 3)

#### O Problema
Apresentação precisa rodar com 1 comando, sem erros.

#### Sua Solução
```bash
# scripts/run_presentation.sh - você criou isso
#!/bin/bash

echo "🚀 Iniciando Loja de Variedades para Apresentação..."

# 1. Build do frontend
cd lojadevariedades-front
npm install
npm run build

# 2. Copia assets para backend
cp -r dist/* ../loja-variedades-back/src/main/resources/static/

# 3. Build do backend
cd ../loja-variedades-back
./mvnw clean package -DskipTests

# 4. Inicia backend (serve frontend + API)
java -jar target/loja-variedades-backend-0.0.1-SNAPSHOT.jar

echo "✅ Sistema rodando em http://localhost:8080"
```

**Decisões de arquitetura:**
- ✅ Backend serve frontend (SPA + API no mesmo servidor)
- ✅ Build otimizado com Vite (minificação, tree-shaking)
- ✅ `-DskipTests` para build rápido (testes foram validados antes)
- ✅ Script automatizado (evita erros manuais)

---

## 🔥 Desafios que Você Superou

### 1. CORS Bloqueando Requisições (15/11/2025)
**Problema:** `Access-Control-Allow-Origin error`  
**Causa:** Spring Security bloqueava requisições cross-origin por padrão  
**Solução:** Configuração adequada de `CorsConfigurationSource` + `allowCredentials(true)`  
**Tempo de resolução:** 1 dia

### 2. Conflitos de Merge (01/12/2025)
**Problema:** Luiz Eduardo atualizou componentes React, você tinha mudanças em apiClient  
**Solução:** Merge manual cuidadoso, testou todos os fluxos depois  
**Lição:** Commits frequentes + branches para features grandes

### 3. Lógica de Carrinho Complexa (28-29/11/2025)
**Problema:** Sincronizar estado React + localStorage + backend  
**Solução:** Refatoração do estado global, decidiu manter lógica no frontend  
**Tempo:** 2 dias  
**Trade-off:** Backend tem estrutura Order/OrderItem, mas carrinho ficou client-side por ora

### 4. Assets Estáticos na Apresentação (30/11/2025)
**Problema:** Frontend compilado não carregava no backend  
**Solução:** Configurou Spring para servir arquivos estáticos em `/resources/static`  
**Código:**
```java
// WebMvcConfigurer
@Override
public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry.addResourceHandler("/**")
            .addResourceLocations("classpath:/static/");
}
```

---

## 📊 Suas Estatísticas

- **Commits:** 22 (53.7% do projeto)
- **Linhas de código:** ~1.500 (estimativa entre config Java + JavaScript)
- **Arquivos criados:** apiClient.js, authService.js, productService.js, scripts/*.sh, várias configs
- **Sprints:** Participou das 3 (foco maior na Sprint 3)
- **Pares de programação:** Trabalhou com todos, especialmente Samuel (banco) e Luiz Eduardo (frontend)

---

## 🎤 Perguntas que Podem Fazer na Apresentação

### Sobre JWT
**P: "Por que usaram JWT ao invés de sessões tradicionais?"**  
**R:** JWT é stateless (servidor não guarda sessão), facilita escala horizontal. Token tem expiração (24h) e é validado em cada requisição. Ideal para APIs REST modernas.

### Sobre CORS
**P: "O que é CORS e por que foi necessário configurar?"**  
**R:** CORS (Cross-Origin Resource Sharing) é uma política de segurança do navegador. Como frontend (5173) e backend (8080) rodam em portas diferentes, são origens distintas. Configuramos para permitir essa comunicação de forma segura.

### Sobre Integração
**P: "Como garantiram que frontend e backend conversassem corretamente?"**  
**R:** Criamos um apiClient centralizado com Axios que adiciona automaticamente o token JWT. Testamos todos os fluxos manualmente e tratamos erros (ex: 401 redireciona para login).

### Sobre Segurança
**P: "Como protegeram as rotas administrativas?"**  
**R:** Spring Security valida o token JWT e verifica a role. Rotas `/admin/**` exigem `ROLE_ADMIN`. No frontend, escondemos botões admin se `userRole !== 'ADMIN'`.

### Sobre Carrinho
**P: "Como implementaram a lógica de carrinho?"**  
**R:** Estado React com `useState`, persistência com `localStorage` para sobreviver a refreshes. Backend tem estrutura Order/OrderItem preparada, mas por ora o carrinho é client-side para MVP.

### Sobre PostgreSQL
**P: "Por que PostgreSQL e não H2?"**  
**R:** H2 é ótimo para desenvolvimento (banco em memória, rápido), mas PostgreSQL é production-ready, persiste dados, e demonstra que o sistema funciona com banco real.

### Sobre Deploy
**P: "Como prepararam o sistema para apresentação?"**  
**R:** Script automatizado que faz build do frontend (Vite), copia assets para backend (Spring serve tudo), compila backend (Maven), e roda o JAR. Tudo em `localhost:8080`.

---

## 🔗 Como Integrei Backend com Frontend

### Arquitetura da Integração

**Frontend (React + Vite)** ↔️ **API REST** ↔️ **Backend (Spring Boot + PostgreSQL)**

A integração foi construída em camadas, garantindo comunicação segura e eficiente entre as partes.

### 1. Configuração CORS no Backend

**Problema:** Navegadores bloqueiam requisições entre diferentes origens (localhost:5173 → localhost:8080)

**Solução em `SecurityConfig.java`:**
```java
@Bean
public CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration configuration = new CorsConfiguration();
    configuration.setAllowedOrigins(Arrays.asList("http://localhost:5173"));
    configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
    configuration.setAllowedHeaders(Arrays.asList("*"));
    configuration.setAllowCredentials(true);
    
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", configuration);
    return source;
}
```

**O que isso faz:**
- Permite requisições do frontend (localhost:5173)
- Libera métodos HTTP necessários (GET, POST, PUT, DELETE)
- Aceita todos os headers (incluindo Authorization)
- Permite envio de credenciais (cookies, headers de auth)

### 2. Cliente HTTP Centralizado no Frontend

**Arquivo `src/api/apiClient.js`:**
```javascript
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar token JWT automaticamente
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
```

**Por que centralizar?**
- Evita repetir URL base em cada requisição
- Token JWT adicionado automaticamente em todas as chamadas
- Facilita manutenção (se mudar porta/host, muda em 1 lugar)

### 3. Serviços de Integração

**Arquivo `src/services/productService.js`:**
```javascript
import apiClient from '../api/apiClient';

const productService = {
  getAll: (categoryId = null) => {
    const url = categoryId ? `/products?categoryId=${categoryId}` : '/products';
    return apiClient.get(url);
  },
  
  create: (product) => apiClient.post('/admin/products', product),
  
  update: (id, product) => apiClient.put(`/admin/products/${id}`, product),
  
  delete: (id) => apiClient.delete(`/admin/products/${id}`)
};

export default productService;
```

**Arquivo `src/services/authService.js`:**
```javascript
import apiClient from '../api/apiClient';

const authService = {
  login: (email, password) => {
    return apiClient.post('/auth/login', { email, password });
  },
  
  register: (userData) => {
    return apiClient.post('/auth/register', userData);
  },
  
  // Decodifica JWT para extrair role
  decodeToken: (token) => {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (error) {
      return null;
    }
  },
  
  getUserRole: () => {
    const token = localStorage.getItem('authToken');
    if (!token) return null;
    const decoded = authService.decodeToken(token);
    return decoded?.role;
  },
  
  isAdmin: () => authService.getUserRole() === 'ADMIN',
  isUser: () => authService.getUserRole() === 'USER'
};

export default authService;
```

### 4. Uso nos Componentes React

**Exemplo em `src/components/Product/index.jsx`:**
```javascript
import { useEffect, useState } from 'react';
import productService from '../../services/productService';

function Product({ searchTerm, selectedCategory }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categoryId = selectedCategory === 'Todos' ? null : selectedCategory;
        const response = await productService.getAll(categoryId);
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };
    
    fetchProducts();
  }, [searchTerm, selectedCategory]);

  // Renderização dos produtos...
}
```

**Exemplo em `src/pages/Login/index.jsx`:**
```javascript
import authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await authService.login(email, password);
      localStorage.setItem('authToken', response.data.token);
      
      // Redirecionamento baseado em role
      const role = authService.getUserRole();
      if (role === 'ADMIN') {
        navigate('/manage');
      } else {
        navigate('/home');
      }
    } catch (error) {
      alert('Credenciais inválidas');
    }
  };
}
```

### 5. Persistência de Estado

**localStorage para Token JWT:**
```javascript
// Salvar ao fazer login
localStorage.setItem('authToken', token);

// Recuperar em qualquer página
const token = localStorage.getItem('authToken');

// Remover ao fazer logout
localStorage.removeItem('authToken');
```

**localStorage para Carrinho:**
```javascript
// Adicionar produto
const cart = JSON.parse(localStorage.getItem('cart')) || [];
cart.push(product);
localStorage.setItem('cart', JSON.stringify(cart));

// Recuperar carrinho
const cart = JSON.parse(localStorage.getItem('cart')) || [];
```

### 6. Sistema de Atualização Automática

**Event Dispatching para refresh de listas:**
```javascript
// Após criar/editar/deletar produto (páginas admin)
window.dispatchEvent(new Event('productUpdated'));

// Component Product ouvindo o evento
useEffect(() => {
  const handleUpdate = () => fetchProducts();
  window.addEventListener('productUpdated', handleUpdate);
  
  return () => window.removeEventListener('productUpdated', handleUpdate);
}, []);
```

### Resumo da Integração

| Camada | Tecnologia | Responsabilidade |
|--------|-----------|------------------|
| **Frontend** | React + Vite | Interface do usuário, rotas, estado local |
| **HTTP Client** | Axios | Requisições HTTP, interceptors JWT |
| **API REST** | Spring Boot | Endpoints, validação, lógica de negócio |
| **Segurança** | Spring Security + JWT | Autenticação, autorização, CORS |
| **Persistência** | PostgreSQL + Flyway | Armazenamento de dados, migrations |

---

## ⚙️ Comandos para Rodar o Projeto Manualmente

### Iniciar o Backend

```bash
# Navegar para o diretório do backend
cd loja-variedades-back

# Compilar o projeto (gera o JAR)
./mvnw clean package -DskipTests

# Executar o JAR compilado
java -jar target/loja-variedades-backend-0.0.1-SNAPSHOT.jar

# OU usar Maven diretamente (não recomendado - usa código não compilado)
./mvnw spring-boot:run
```

**Backend rodando em:** `http://localhost:8080`  
**Logs:** Aparecem no terminal

### Iniciar o Frontend

```bash
# Navegar para o diretório do frontend
cd lojadevariedades-front

# Instalar dependências (primeira vez ou após atualizar package.json)
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

**Frontend rodando em:** `http://localhost:5173`  
**Logs:** Aparecem no terminal

### Parar os Serviços

**No terminal onde o serviço está rodando:**
```bash
# Pressionar Ctrl+C (interrompe o processo)
```

**Se os serviços estão rodando em background (usando nohup ou &):**
```bash
# Encontrar o PID (Process ID)
ps aux | grep java                    # Para backend
ps aux | grep "npm run dev"          # Para frontend

# Matar o processo pelo PID
kill <PID>

# OU matar todos os processos Java
killall java

# OU matar todos os processos Node
killall node
```

### Verificar se os Serviços Estão Rodando

```bash
# Verificar porta 8080 (backend)
lsof -i :8080

# Verificar porta 5173 (frontend)
lsof -i :5173

# Testar API diretamente
curl http://localhost:8080/api/products

# Testar frontend
curl http://localhost:5173
```

### Comandos Úteis para Desenvolvimento

```bash
# Backend - Recompilar após mudanças
cd loja-variedades-back
./mvnw clean package -DskipTests
# Depois reiniciar o java -jar

# Frontend - Hot reload automático (não precisa reiniciar)
# Vite detecta mudanças automaticamente

# Limpar builds anteriores
rm -rf loja-variedades-back/target
rm -rf lojadevariedades-front/dist
rm -rf lojadevariedades-front/node_modules

# Ver logs em tempo real (se rodando com nohup)
tail -f /tmp/loja-backend.log
tail -f /tmp/loja-frontend.log
```

### Sequência Completa de Inicialização

```bash
# 1. Backend
cd loja-variedades-back
./mvnw clean package -DskipTests
java -jar target/loja-variedades-backend-0.0.1-SNAPSHOT.jar &

# 2. Aguardar 10-15 segundos para backend inicializar

# 3. Frontend
cd ../lojadevariedades-front
npm run dev
```

---

## 🧠 Conceitos Técnicos que Você Dominou

### Backend (Spring Boot)
- ✅ Spring Security (configuração, filters, roles)
- ✅ JWT (geração, validação, expiração)
- ✅ CORS (origens permitidas, credentials)
- ✅ REST API (endpoints, status codes)
- ✅ JPA/Hibernate (entidades, repositories)
- ✅ PostgreSQL (configuração, migrations)
- ✅ Flyway (versionamento de schema)

### Frontend (React)
- ✅ Axios (interceptors, baseURL)
- ✅ React Hooks (useState, useEffect)
- ✅ React Router (navegação)
- ✅ localStorage (persistência)
- ✅ Vite (build, dev server)

### DevOps/Infra
- ✅ Bash scripting (automação)
- ✅ Maven (build Java)
- ✅ npm (build frontend)
- ✅ Git (commits, merge, branches)

---

## 💡 Dica Final para Apresentação

**Você é o Tech Lead/Integration Lead. Se te perguntarem algo técnico sobre como as partes se conectam, você é a pessoa certa!**

**Frases que você pode usar:**
- "Eu fui responsável por integrar frontend e backend..."
- "Configurei o Spring Security para validar tokens JWT..."
- "Resolvi o problema de CORS configurando origens permitidas..."
- "Criei o apiClient com Axios para centralizar requisições..."
- "Automatizei o build com um script bash para a apresentação..."

**Se não souber algo específico:**
- "Essa parte foi implementada pelo [nome do membro], mas posso explicar como integra com o resto do sistema."
- "Isso faz parte do roadmap futuro, por ora focamos no MVP."

---

**Boa sorte na apresentação!**  
Você fez um trabalho excepcional conectando todas as peças do projeto.
