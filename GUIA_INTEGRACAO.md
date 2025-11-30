# Guia Completo de Integração Front-End e Back-End

## 📋 Índice
1. [Estrutura do Projeto](#estrutura-do-projeto)
2. [Configuração Inicial](#configuração-inicial)
3. [Executar o Projeto](#executar-o-projeto)
4. [Exemplos de Uso](#exemplos-de-uso)
5. [Autenticação e Segurança](#autenticação-e-segurança)
6. [Tratamento de Erros](#tratamento-de-erros)

---

## 📁 Estrutura do Projeto

```
Loja_de_Variedades/
├── loja-variedades-back/          # Backend (Spring Boot)
│   ├── src/main/java/
│   │   └── com/example/loja/
│   │       ├── config/            # Configurações (JWT, CORS, Security)
│   │       ├── controller/        # Controladores REST
│   │       ├── service/           # Lógica de negócio
│   │       ├── model/             # Entidades JPA
│   │       ├── repository/        # Acesso a dados
│   │       └── DTOs/              # Data Transfer Objects
│   └── pom.xml                    # Dependências Maven
│
└── lojadevariedades-front/        # Frontend (React + Vite)
    ├── src/
    │   ├── api/
    │   │   └── apiClient.js       # Cliente HTTP (Axios)
    │   ├── services/
    │   │   ├── authService.js     # Gerenciar autenticação
    │   │   └── productService.js  # Gerenciar produtos
    │   ├── pages/                 # Páginas/Componentes
    │   │   ├── Login/
    │   │   ├── Home/
    │   │   ├── AddProduct/
    │   │   ├── EditProduct/
    │   │   └── DeleteProduct/
    │   └── main.jsx              # Ponto de entrada
    └── .env.local                # Variáveis de ambiente
```

---

## 🔧 Configuração Inicial

### Backend

1. **Verificar Java e Maven:**
   ```bash
   java -version
   mvn -version
   ```

2. **Variáveis de Ambiente (application.properties):**
   ```properties
   server.port=8080
   spring.datasource.url=jdbc:h2:file:./data/competicao_db
   jwt.secret=WnFH34sd923nFASDJF92nf023fnf0293nfSDF923nf0923nf32F==
   jwt.expiration-ms=86400000
   ```

### Frontend

1. **Instalar dependências:**
   ```bash
   cd lojadevariedades-front
   npm install
   ```

2. **Variáveis de Ambiente (.env.local):**
   ```
   VITE_API_URL=http://localhost:8080/api
   ```

---

## 🚀 Executar o Projeto

### Terminal 1 - Backend
```bash
cd loja-variedades-back
./mvnw spring-boot:run
```
✅ Backend rodando em: `http://localhost:8080`

### Terminal 2 - Frontend
```bash
cd lojadevariedades-front
npm run dev
```
✅ Frontend rodando em: `http://localhost:5173`

---

## 💡 Exemplos de Uso

### 1. **Autenticação (Login/Registro)**

**Arquivo:** `src/pages/Login/index.jsx`

```jsx
import authService from '../../services/authService'

// Login
const token = await authService.login(email, password)

// Registro
const token = await authService.register(name, email, password)

// Logout
authService.logout()

// Verificar se está autenticado
if (authService.isAuthenticated()) {
  // Fazer algo
}
```

### 2. **Listar Produtos**

**Arquivo:** `src/components/Product/index.jsx`

```jsx
import productService from '../../services/productService'

// Buscar produtos
const products = await productService.getAll(page, size, search, categoryId)

// Resultado:
// {
//   content: [...],
//   totalElements: 100,
//   totalPages: 10,
//   last: false
// }
```

### 3. **Criar Produto (Admin)**

**Arquivo:** `src/pages/AddProduct/index.jsx`

```jsx
const product = {
  name: "Produto Novo",
  description: "Descrição do produto",
  price: 99.99,
  stockQuantity: 50,
  imageUrl: "https://exemplo.com/imagem.jpg"
}

await productService.create(product)
```

### 4. **Atualizar Produto (Admin)**

```jsx
const product = {
  name: "Produto Atualizado",
  description: "Nova descrição",
  price: 149.99,
  stockQuantity: 30,
  imageUrl: "https://exemplo.com/nova-imagem.jpg"
}

await productService.update(productId, product)
```

### 5. **Deletar Produto (Admin)**

```jsx
await productService.delete(productId)
```

---

## 🔐 Autenticação e Segurança

### Como Funciona

1. **Login:** Usuário envia email/senha → Backend valida → Retorna token JWT
2. **Token Armazenado:** Token fica em `localStorage`
3. **Requisições:** Axios adiciona token automaticamente nos headers
4. **Expiração:** Se token expirar (401), usuário é redirecionado para login

### Interceptadores (apiClient.js)

```javascript
// Adiciona token em TODAS as requisições
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Se receber 401, redireciona para login
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)
```

---

## ⚠️ Tratamento de Erros

### Exemplo de Componente com Tratamento de Erros

```jsx
import { useState } from 'react'
import productService from '../../services/productService'

const MinhaComponente = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [products, setProducts] = useState([])

  const buscarProdutos = async () => {
    setLoading(true)
    setError('')
    
    try {
      const data = await productService.getAll()
      setProducts(data)
    } catch (err) {
      // Erro pode ser string ou objeto
      const mensagem = err.message || 'Erro ao buscar produtos'
      setError(mensagem)
      console.error('Erro:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Carregando...</div>
  if (error) return <div className='error'>{error}</div>
  
  return (
    <div>
      {/* Renderizar produtos */}
    </div>
  )
}
```

---

## 📡 Endpoints da API

### Autenticação
- `POST /api/auth/register` - Criar conta
- `POST /api/auth/login` - Fazer login

### Produtos (Público)
- `GET /api/products` - Listar produtos
- `GET /api/products/{id}` - Obter produto específico

### Produtos (Admin)
- `POST /api/admin/products` - Criar produto
- `PUT /api/admin/products/{id}` - Atualizar produto
- `DELETE /api/admin/products/{id}` - Deletar produto

---

## 🐛 Debugging

### Ver Requisições no Console
```javascript
// Em apiClient.js
apiClient.interceptors.request.use((config) => {
  console.log('Requisição:', config)
  return config
})
```

### Testar API com cURL
```bash
# Login
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"123456"}'

# Listar produtos
curl http://localhost:8080/api/products

# Com token
curl -H "Authorization: Bearer SEU_TOKEN" \
  http://localhost:8080/api/admin/products
```

---

## ✅ Checklist de Integração

- [ ] CORS configurado no back-end
- [ ] `apiClient.js` criado com interceptadores
- [ ] `authService.js` implementado
- [ ] `productService.js` implementado
- [ ] Login funciona e salva token
- [ ] Produtos são listados corretamente
- [ ] Admin consegue criar/editar/deletar produtos
- [ ] Erros são tratados e exibidos ao usuário
- [ ] Token expira e redireciona para login

---

## 📚 Recursos Úteis

- [Documentação Axios](https://axios-http.com/)
- [Spring Boot JWT](https://spring.io/projects/spring-security)
- [React Hooks](https://react.dev/reference/react)
- [Vite](https://vitejs.dev/)

---

**Versão:** 1.0  
**Última Atualização:** 30/11/2025

## ⚙️ Como rodar empacotado (produção local)

1. Gerar o JAR do backend:

```bash
cd loja-variedades-back
./mvnw package -DskipTests
```

2. Executar o JAR gerado (serve os arquivos estáticos em `src/main/resources/static`):

```bash
java -jar loja-variedades-back/target/loja-variedades-backend-0.0.1-SNAPSHOT.jar
```

3. A aplicação ficará disponível em `http://localhost:8080` (front servido pela mesma aplicação).

### Credenciais de desenvolvimento

- **Admin (development seed):** `admin@loja.com` / `admin123`

> Observação: esse usuário é criado/atualizado automaticamente durante o boot para facilitar testes locais. Altere a senha em produção.
