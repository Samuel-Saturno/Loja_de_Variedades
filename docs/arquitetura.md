# Arquitetura do Sistema - Loja de Variedades

## 1. Separação Mínima de Responsabilidades

O sistema segue uma arquitetura em três camadas principais:

### **Frontend (React + Vite)**
- **O que faz**: Mostra a interface para o usuário interagir com o sistema
- **Componentes principais**:
  - `Navbar` e `NavbarAdmin`: Menus diferentes para cliente e administrador
  - `Product`: Mostra os produtos disponíveis com foto e preço
  - `Cart`: Página do carrinho de compras
  - Páginas administrativas: `AddProduct`, `EditProduct`, `DeleteProduct`, `Manage`
- **Como conversa com o backend**: Usa o arquivo `apiClient.js` que envia requisições HTTP para a API
- **Armazenamento local**: Usa `localStorage` para guardar o token de login e itens do carrinho

### **Backend (Spring Boot + Java 17)**
- **O que faz**: Processa as regras de negócio, valida dados e gerencia a segurança
- **Camadas** (organização do código):
  - **Controller**: Recebe as requisições do frontend (ex: buscar produtos, fazer login)
  - **Service**: Contém as regras do negócio (ex: calcular total do carrinho)
  - **Repository**: Conversa com o banco de dados
  - **Model**: Representa os dados (Product, User, CartItem, Category)
  - **DTOs**: Objetos usados para enviar/receber dados do frontend
  - **Exception**: Trata erros e envia mensagens claras para o frontend
- **Segurança**: Usa JWT (token) para saber quem está logado (admin ou cliente)

### **Banco de Dados (PostgreSQL)**
- **O que faz**: Guarda todas as informações do sistema de forma organizada
- **Tabelas principais**:
  - `products`: Produtos da loja (nome, preço, estoque, categoria)
  - `categories`: Categorias dos produtos (Perfumes, Eletrônicos, etc)
  - `users`: Usuários do sistema (email, senha, tipo: admin ou cliente)
  - `cart_items`: Itens no carrinho de cada usuário
  - `orders`: Pedidos finalizados
- **Como é criado**: Usa Flyway para criar as tabelas automaticamente (arquivo `V1__init.sql`)

---

## 2. Como o Frontend e Backend Conversam

### Arquitetura da Comunicação

O sistema funciona assim:
1. **Usuário** acessa o site pelo navegador
2. **Frontend (React)** mostra a interface e recebe as ações do usuário
3. **Frontend** envia requisições HTTP para o **Backend**
4. **Backend** processa, consulta o banco de dados e responde
5. **Frontend** atualiza a tela com a resposta

### Exemplo Prático: Adicionar Produto ao Carrinho

```
Usuário clica em "Adicionar ao Carrinho"
    ↓
Frontend chama: productService.addToCart(product)
    ↓
apiClient.js envia: POST http://localhost:8080/api/cart
    ↓
Backend recebe no CartController
    ↓
CartService valida e salva no banco
    ↓
Banco de dados adiciona na tabela cart_items
    ↓
Backend responde: { success: true, message: "Produto adicionado" }
    ↓
Frontend mostra notificação e atualiza o ícone do carrinho
```

### Segurança na Comunicação

- Todas as requisições que precisam de autenticação enviam um **token JWT** no header
- O token é salvo no `localStorage` quando o usuário faz login
- O `apiClient.js` adiciona o token automaticamente em todas as requisições
- O backend valida o token antes de processar a requisição
- Se o token estiver inválido ou expirado, retorna erro 401 (Não autorizado)

### Sistema de Atualização Automática

Quando um admin adiciona/edita/deleta um produto:
1. A página admin faz a operação via API
2. Dispara um evento: `window.dispatchEvent(new Event('productUpdated'))`
3. O componente Product está "ouvindo" esse evento
4. Quando recebe o evento, busca os produtos novamente da API
5. A lista de produtos se atualiza automaticamente na tela

Isso evita que o admin precise atualizar a página manualmente!

---

## 3. Fluxo Básico do Sistema

```
┌─────────────┐          ┌──────────────┐          ┌────────────┐
│   Cliente   │ ◄──────► │   Frontend   │ ◄──────► │  Backend   │
│  (Browser)  │   HTTP   │    (React)   │   REST   │  (Spring)  │
└─────────────┘          └──────────────┘          └────────────┘
                                                           │
                                                           ▼
                                                    ┌────────────┐
                                                    │ PostgreSQL │
                                                    │  Database  │
                                                    └────────────┘
```

### Fluxo de Navegação Típico:

1. **Cliente não autenticado**:
   - Acessa Home → Visualiza catálogo → Adiciona ao carrinho → Redireciona para Login
   - Faz login → Retorna ao carrinho → Finaliza compra

2. **Administrador**:
   - Faz login → Acessa painel Admin → Gerencia produtos (CRUD)
   - Visualiza estatísticas básicas de produtos

3. **Comunicação entre camadas**:
   - Frontend envia requisições HTTP (GET, POST, PUT, DELETE)
   - Backend valida JWT, processa lógica, consulta banco
   - Retorna JSON com dados ou mensagens de erro
   - Frontend atualiza UI de forma reativa

---

## 3. Tecnologias Selecionadas

### **Frontend**
| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| React | 18.x | Biblioteca para UI reativa |
| Vite | 5.x | Build tool e dev server rápido |
| Axios | 1.x | Cliente HTTP para API REST |
| React Router | 6.x | Roteamento SPA |
| CSS3 | - | Estilização customizada |

### **Backend**
| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| Java | 17 | Linguagem base |
| Spring Boot | 3.x | Framework web e DI |
| Spring Data JPA | 3.x | ORM e persistência |
| Spring Security | 3.x | Autenticação JWT |
| PostgreSQL | 14+ | Banco relacional |
| Flyway | 9.x | Migrações de schema |
| Maven | 3.8+ | Gerenciamento de dependências |

### **DevOps & Infraestrutura**
| Tecnologia | Propósito |
|------------|-----------|
| Docker | Containerização (backend + DB) |
| Git | Controle de versão |
| GitHub | Repositório remoto |

---

## 4. Diagrama Simples (Camadas, Blocos ou Componentes)

```
┌───────────────────────────────────────────────────────────────┐
│                         FRONTEND LAYER                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│  │   Home   │  │   Cart   │  │  Login   │  │  Manage  │     │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘     │
│       │             │              │             │            │
│       └─────────────┴──────────────┴─────────────┘            │
│                           │                                    │
│                  ┌────────▼────────┐                          │
│                  │   API Client    │                          │
│                  │  (axios/fetch)  │                          │
│                  └────────┬────────┘                          │
└───────────────────────────┼───────────────────────────────────┘
                            │ HTTP/JSON (REST API)
┌───────────────────────────▼───────────────────────────────────┐
│                        BACKEND LAYER                           │
│  ┌─────────────────────────────────────────────────────┐     │
│  │                  CONTROLLERS                         │     │
│  │  ProductController │ AuthController │ CartController │     │
│  └──────────────────┬──────────────────────────────────┘     │
│                     │                                          │
│  ┌──────────────────▼──────────────────────────────────┐     │
│  │                   SERVICES                           │     │
│  │  ProductService │ AuthService │ CartService          │     │
│  └──────────────────┬──────────────────────────────────┘     │
│                     │                                          │
│  ┌──────────────────▼──────────────────────────────────┐     │
│  │                 REPOSITORIES                         │     │
│  │  ProductRepo │ UserRepo │ CartItemRepo               │     │
│  └──────────────────┬──────────────────────────────────┘     │
└────────────────────┼────────────────────────────────────────┘
                     │ JPA/Hibernate
┌────────────────────▼────────────────────────────────────────┐
│                    DATABASE LAYER                            │
│                      PostgreSQL                              │
│  ┌──────────┐  ┌──────────┐  ┌────────────┐  ┌─────────┐  │
│  │ products │  │  users   │  │ cart_items │  │ orders  │  │
│  └──────────┘  └──────────┘  └────────────┘  └─────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Componentes Principais:

**Frontend:**
- **Pages**: Home, Cart, Login, Manage, AddProduct, EditProduct, DeleteProduct
- **Components**: Navbar, NavbarAdmin, Product, Topbar, Advantages
- **Services**: authService, productService (abstraem chamadas API)

**Backend:**
- **Controllers**: Recebem requisições HTTP, validam entrada
- **Services**: Implementam regras de negócio (ex: calcular total do carrinho)
- **Repositories**: Executam queries no banco via JPA
- **Models**: Product, User, CartItem, Order
- **DTOs**: LoginRequest, ProductDTO, CartItemDTO
- **Config**: SecurityConfig (JWT), CorsConfig, DataSourceConfig

**Database:**
- **products**: id, name, description, price, image_url, stock, category_id (chave estrangeira)
- **categories**: id, name (Perfumes, Eletrônicos, Plásticos, Alumínios, Calçados, Higiene)
- **users**: id, username, password_hash, role (ADMIN/USER), email
- **cart_items**: id, user_id, product_id, quantity
- **orders**: id, user_id, total, status, created_at

---

## 5. Decisões Técnicas que Tomamos

### Por que escolhemos essas tecnologias?

1. **Frontend separado do Backend**: Permite trabalhar nas duas partes ao mesmo tempo
2. **API REST**: É o padrão mais usado, facilitando adicionar um app mobile no futuro
3. **JWT (Token)**: Não precisa guardar sessão no servidor, cada requisição é independente
4. **PostgreSQL**: Banco de dados confiável e muito usado em lojas online
5. **Spring Boot**: Framework completo que já vem com segurança e conexão com banco
6. **React + Vite**: React é popular e Vite deixa o desenvolvimento muito rápido

### O que fizemos de forma simples (para o MVP):

- **Sem cache**: Por enquanto não usamos Redis, mas pode ser adicionado depois para melhorar a velocidade
- **Processamento direto**: Tudo acontece na hora, sem filas de mensagens (suficiente para nossa escala)
- **Flyway**: Cria as tabelas automaticamente, garantindo que o banco sempre está correto

---

## 6. Segurança

- **Autenticação**: JWT com expiração de 24h
- **Autorização**: Roles (ADMIN, USER) controlam acesso a endpoints
- **CORS**: Configurado para aceitar origem do frontend em desenvolvimento
- **Senha**: Hash com BCrypt antes de persistir
- **Validação**: DTOs com Bean Validation no backend

---

## 7. Estrutura de Pastas

```
loja-variedades-back/
├── src/main/java/com/example/loja/
│   ├── config/          # Configurações (Security, CORS, DB)
│   ├── controller/      # Endpoints REST
│   ├── DTOs/            # Data Transfer Objects
│   ├── exception/       # Handlers globais de exceção
│   ├── model/           # Entidades JPA
│   ├── repository/      # Interfaces Spring Data
│   ├── service/         # Lógica de negócio
│   └── util/            # Helpers (JWT, validações)
└── src/main/resources/
    ├── application.properties
    └── db/migration/    # Scripts Flyway

lojadevariedades-front/
├── src/
│   ├── api/             # Cliente HTTP configurado
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/           # Páginas principais (rotas)
│   ├── services/        # Abstrações de API (auth, products)
│   └── assets/          # Imagens, estilos globais
└── public/              # Arquivos estáticos
```

---

## Próximos Passos (Evolução)

- [ ] Implementar cache de produtos (Redis)
- [ ] Adicionar testes automatizados (JUnit + Jest)
- [ ] CI/CD com GitHub Actions
- [ ] Monitoramento (Actuator + Prometheus)
- [ ] Paginação e filtros avançados de produtos
- [ ] Sistema de avaliações e comentários
- [ ] Notificações por email (pedidos confirmados)
