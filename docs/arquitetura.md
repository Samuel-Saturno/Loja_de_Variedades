# Arquitetura do Sistema - Loja de Variedades

## 1. Separação Mínima de Responsabilidades

O sistema segue uma arquitetura em três camadas principais:

### **Frontend (React + Vite)**
- **Responsabilidade**: Interface do usuário, experiência de navegação e interação
- **Componentes principais**:
  - `Navbar` e `NavbarAdmin`: Navegação contextual por perfil
  - `Product`: Exibição de produtos com imagens e informações
  - `Cart`: Gerenciamento do carrinho de compras
  - Páginas administrativas: `AddProduct`, `EditProduct`, `DeleteProduct`, `Manage`
- **Comunicação**: API REST via `axios` através do módulo `apiClient.js`

### **Backend (Spring Boot + Java 17)**
- **Responsabilidade**: Lógica de negócio, validação, persistência e autenticação
- **Camadas**:
  - **Controller**: Endpoints REST para produtos, autenticação e carrinho
  - **Service**: Regras de negócio e orquestração
  - **Repository**: Acesso aos dados via Spring Data JPA
  - **Model**: Entidades do domínio (Product, User, CartItem)
  - **DTOs**: Objetos de transferência para comunicação com o frontend
  - **Exception**: Tratamento centralizado de erros
- **Segurança**: JWT para autenticação e autorização (admin/cliente)

### **Banco de Dados (PostgreSQL)**
- **Responsabilidade**: Persistência estruturada de dados
- **Estrutura**:
  - Tabelas: `products`, `users`, `cart_items`, `orders`
  - Migrações via Flyway (`V1__init.sql`)
  - Relacionamentos: usuários possuem itens no carrinho e histórico de pedidos

---

## 2. Fluxo Básico do Sistema

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
- **products**: id, name, description, price, image_url, stock, category
- **users**: id, username, password_hash, role (ADMIN/USER), email
- **cart_items**: id, user_id, product_id, quantity
- **orders**: id, user_id, total, status, created_at

---

## 5. Decisões Arquiteturais

### Por que essa estrutura?

1. **Separação Frontend/Backend**: Permite escalabilidade independente e desenvolvimento paralelo
2. **REST API**: Padrão amplamente adotado, facilita integração futura (mobile, etc.)
3. **JWT**: Stateless authentication, adequado para SPAs
4. **PostgreSQL**: Banco robusto, transacional, ideal para e-commerce
5. **Spring Boot**: Ecosystem maduro, facilita DI, segurança e testes
6. **React + Vite**: Performance de desenvolvimento rápida, bundle otimizado

### Trade-offs:

- **Simplicidade vs Escalabilidade**: Arquitetura monolítica (backend único), mas modular internamente
- **Sem cache distribuído**: Adequado para MVP, pode adicionar Redis futuramente
- **Sem mensageria**: Processamento síncrono suficiente para escala inicial
- **Flyway**: Migrações versionadas garantem consistência do schema entre ambientes

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
