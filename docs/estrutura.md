# 📁 Estrutura do Projeto

Este documento detalha a organização completa do repositório e a função de cada diretório/arquivo.

---

## 🗂️ Estrutura Geral

```
Loja_de_Variedades/
├── 📚 docs/                          # Documentação do projeto
│   ├── arquitetura.md               # Arquitetura técnica detalhada
│   ├── backlog.md                   # Épicos e histórias de usuário
│   ├── pitch.md                     # Roteiro da apresentação
│   └── estrutura.md                 # Este arquivo
│
├── 🔧 loja-variedades-back/         # Backend Spring Boot
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/loja/
│   │   │   │   ├── config/          # Configurações (Security, CORS, DB)
│   │   │   │   ├── controller/      # REST Controllers
│   │   │   │   ├── DTOs/            # Data Transfer Objects
│   │   │   │   ├── exception/       # Exception Handlers
│   │   │   │   ├── model/           # Entidades JPA
│   │   │   │   ├── repository/      # Spring Data Repositories
│   │   │   │   ├── service/         # Lógica de negócio
│   │   │   │   ├── util/            # Utilitários (JWT, validações)
│   │   │   │   └── LojaVariedadesApplication.java
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       ├── db/migration/    # Flyway migrations
│   │   │       └── static/          # Arquivos estáticos (build frontend)
│   │   └── test/                    # Testes unitários e integração
│   ├── target/                      # Build artifacts (Maven)
│   ├── pom.xml                      # Dependências Maven
│   ├── DockerFile                   # Container do backend
│   └── HELP.md                      # Ajuda Spring Boot
│
├── 🎨 lojadevariedades-front/       # Frontend React
│   ├── src/
│   │   ├── pages/                   # Páginas (rotas)
│   │   │   ├── Home/                # Página inicial (catálogo)
│   │   │   ├── Cart/                # Carrinho de compras
│   │   │   ├── Login/               # Autenticação
│   │   │   ├── Manage/              # Painel admin
│   │   │   ├── AddProduct/          # Adicionar produto (admin)
│   │   │   ├── EditProduct/         # Editar produto (admin)
│   │   │   └── DeleteProduct/       # Excluir produto (admin)
│   │   ├── components/              # Componentes reutilizáveis
│   │   │   ├── Navbar/              # Barra de navegação cliente
│   │   │   ├── NavbarAdmin/         # Barra de navegação admin
│   │   │   ├── Product/             # Card de produto
│   │   │   ├── Topbar/              # Barra superior
│   │   │   └── Advantages/          # Seção de vantagens
│   │   ├── services/                # Abstrações de API
│   │   │   ├── authService.js       # Serviços de autenticação
│   │   │   └── productService.js    # Serviços de produtos
│   │   ├── api/
│   │   │   └── apiClient.js         # Cliente HTTP configurado (axios)
│   │   ├── assets/                  # Imagens e recursos estáticos
│   │   ├── App.jsx                  # Componente raiz
│   │   ├── main.jsx                 # Entry point
│   │   └── index.css                # Estilos globais
│   ├── public/                      # Arquivos públicos
│   ├── package.json                 # Dependências npm
│   ├── vite.config.js               # Configuração Vite
│   ├── eslint.config.js             # Linting
│   └── README.md                    # Instruções frontend
│
├── 🚀 prototype/                     # Protótipo navegável
│   └── README.md                    # Instruções de acesso e teste
│
├── 📜 scripts/                       # Scripts auxiliares
│   └── run_presentation.sh          # Script para apresentação
│
├── 📄 README.md                      # Documentação principal
├── 📄 GUIA_INTEGRACAO.md            # Guia de integração técnico
└── .gitignore                       # Arquivos ignorados pelo Git
```

---

## 📦 Backend (`loja-variedades-back/`)

### `src/main/java/com/example/loja/`

#### 📁 `config/`
Configurações do Spring Boot:
- **`SecurityConfig.java`**: Configuração de segurança (JWT, autorização, endpoints públicos/privados)
- **`CorsConfig.java`**: Configuração CORS para comunicação com frontend
- **`DataSourceConfig.java`**: Configuração do banco de dados e Flyway

#### 📁 `controller/`
Controllers REST (recebem requisições HTTP):
- **`ProductController.java`**: CRUD de produtos (GET, POST, PUT, DELETE)
- **`AuthController.java`**: Login e registro (`/api/auth/*`)
- **`CartController.java`**: Operações do carrinho
- **`OrderController.java`**: Finalização de pedidos

#### 📁 `DTOs/`
Data Transfer Objects (comunicação entre camadas):
- **`LoginRequestDTO.java`**: Credenciais de login
- **`LoginResponseDTO.java`**: Token JWT + dados do usuário
- **`ProductDTO.java`**: Dados de produto (create/update)
- **`CartItemDTO.java`**: Item do carrinho
- **`OrderDTO.java`**: Dados do pedido

#### 📁 `exception/`
Tratamento de exceções:
- **`GlobalExceptionHandler.java`**: Captura exceções e retorna respostas HTTP adequadas
- **`ResourceNotFoundException.java`**: Exception customizada (404)
- **`UnauthorizedException.java`**: Exception de autenticação (401)

#### 📁 `model/`
Entidades JPA (mapeiam tabelas do banco):
- **`Product.java`**: Produto (id, name, description, price, stock, category, imageUrl)
- **`User.java`**: Usuário (id, username, password, email, role)
- **`CartItem.java`**: Item do carrinho (id, user, product, quantity)
- **`Order.java`**: Pedido (id, user, total, status, items, createdAt)

#### 📁 `repository/`
Interfaces Spring Data JPA (acesso ao banco):
- **`ProductRepository.java`**: Queries de produtos
- **`UserRepository.java`**: Queries de usuários (findByUsername, findByEmail)
- **`CartItemRepository.java`**: Queries do carrinho
- **`OrderRepository.java`**: Queries de pedidos

#### 📁 `service/`
Lógica de negócio:
- **`ProductService.java`**: CRUD de produtos, validações
- **`AuthService.java`**: Autenticação, geração de JWT, validação de roles
- **`CartService.java`**: Adicionar/remover/atualizar carrinho
- **`OrderService.java`**: Criar pedido, validar estoque, calcular total

#### 📁 `util/`
Utilitários:
- **`JwtUtil.java`**: Geração e validação de tokens JWT
- **`PasswordEncoder.java`**: Hash de senhas (BCrypt)
- **`ValidationUtil.java`**: Validações customizadas

### `src/main/resources/`

#### `application.properties`
Configurações da aplicação:
```properties
# Database
spring.datasource.url=jdbc:postgresql://localhost:5432/loja_variedades
spring.datasource.username=postgres
spring.datasource.password=postgres

# JWT
jwt.secret=your-secret-key-here
jwt.expiration=86400000

# Flyway
spring.flyway.enabled=true
```

#### `db/migration/`
Scripts de migração Flyway:
- **`V1__init.sql`**: Criação inicial de tabelas (products, users, cart_items, orders)
- **`V2__seed_data.sql`**: (Opcional) Dados iniciais para testes

---

## 🎨 Frontend (`lojadevariedades-front/`)

### `src/pages/`

Páginas principais (componentes de rota):

- **`Home/`**: Página inicial com catálogo de produtos
  - Carrega produtos via API
  - Renderiza grid de cards
  - Botão "Adicionar ao Carrinho"

- **`Cart/`**: Carrinho de compras
  - Lista itens do carrinho
  - Ajustar quantidades (+/-)
  - Remover itens
  - Calcular total
  - Botão "Finalizar Compra"

- **`Login/`**: Autenticação
  - Formulário de login (email, senha)
  - Validação
  - Armazena JWT no localStorage
  - Redireciona baseado em role (admin → /manage, user → /home)

- **`Manage/`**: Painel administrativo
  - Dashboard com estatísticas
  - Links para CRUD de produtos
  - Acessível apenas para ADMIN

- **`AddProduct/`**: Adicionar produto (admin)
  - Formulário completo
  - Validações
  - Envia POST para `/api/admin/products`

- **`EditProduct/`**: Editar produto (admin)
  - Busca produto por ID
  - Formulário pré-preenchido
  - Envia PUT para `/api/admin/products/:id`

- **`DeleteProduct/`**: Excluir produto (admin)
  - Lista produtos
  - Botão "Excluir" com confirmação
  - Envia DELETE para `/api/admin/products/:id`

### `src/components/`

Componentes reutilizáveis:

- **`Navbar/`**: Barra de navegação para clientes
  - Logo
  - Links: Home, Carrinho
  - Botão Login/Logout

- **`NavbarAdmin/`**: Barra de navegação para admin
  - Links administrativos: Gerenciar, Adicionar, Editar, Excluir
  - Botão Logout

- **`Product/`**: Card de produto
  - Imagem
  - Nome, preço
  - Botão "Adicionar ao Carrinho"

- **`Topbar/`**: Barra superior (opcional)
  - Anúncios, promoções

- **`Advantages/`**: Seção de vantagens (opcional)
  - Ícones de entrega, pagamento, etc.

### `src/services/`

Abstrações de API:

- **`authService.js`**:
  ```javascript
  login(email, password)
  logout()
  getCurrentUser()
  isAuthenticated()
  isAdmin()
  ```

- **`productService.js`**:
  ```javascript
  getAllProducts()
  getProductById(id)
  createProduct(productData)
  updateProduct(id, productData)
  deleteProduct(id)
  ```

### `src/api/`

- **`apiClient.js`**: Instância configurada do axios
  - Base URL: `http://localhost:8080`
  - Interceptors para adicionar JWT no header
  - Tratamento de erros global

---

## 📚 Documentação (`docs/`)

- **`arquitetura.md`**: Arquitetura técnica completa
  - Separação de responsabilidades
  - Fluxo do sistema
  - Tecnologias
  - Diagramas de camadas

- **`backlog.md`**: Backlog do produto
  - 8 épicos organizados
  - 30+ histórias de usuário
  - Critérios de aceitação
  - Status (implementado/parcial/planejado)
  - Priorização MoSCoW

- **`pitch.md`**: Roteiro da apresentação
  - Cronograma de 10 minutos
  - Scripts de fala
  - Q&A previsto (10 perguntas + respostas)
  - Dicas de apresentação

- **`estrutura.md`**: Este arquivo (estrutura do projeto)

---

## 🚀 Protótipo (`prototype/`)

- **`README.md`**: Guia do protótipo navegável
  - Instruções de execução
  - Cenários de teste
  - Credenciais de acesso
  - Fluxos de navegação
  - Troubleshooting

---

## 📜 Scripts (`scripts/`)

- **`run_presentation.sh`**: Script para apresentação
  - Inicia backend e frontend simultaneamente
  - Abre navegador automaticamente
  - Ideal para demo ao vivo

---

## 📄 Arquivos Raiz

- **`README.md`**: Documentação principal do projeto
  - Visão geral
  - Funcionalidades
  - Como executar
  - Estrutura
  - Contribuir

- **`GUIA_INTEGRACAO.md`**: Guia técnico de integração
  - Detalhes de API
  - Endpoints
  - Autenticação
  - Exemplos de requisições

- **`.gitignore`**: Arquivos ignorados pelo Git
  - `target/` (Maven)
  - `node_modules/` (npm)
  - `*.log`
  - `.env`
  - Build artifacts

---

## 🔄 Fluxo de Dados

### Exemplo: Adicionar Produto ao Carrinho

```
┌──────────────────────────────────────────────────────────────┐
│ 1. Cliente clica em "Adicionar ao Carrinho" no Product Card │
└────────────────────┬─────────────────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────────────────┐
│ 2. Frontend: productService.addToCart(productId, quantity)  │
└────────────────────┬─────────────────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────────────────┐
│ 3. apiClient.js adiciona JWT no header Authorization        │
└────────────────────┬─────────────────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────────────────┐
│ 4. POST /api/cart (body: {productId, quantity})             │
└────────────────────┬─────────────────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────────────────┐
│ 5. Backend: CartController.addToCart()                      │
└────────────────────┬─────────────────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────────────────┐
│ 6. CartService valida estoque e cria CartItem               │
└────────────────────┬─────────────────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────────────────┐
│ 7. CartItemRepository.save() persiste no PostgreSQL         │
└────────────────────┬─────────────────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────────────────┐
│ 8. Retorna CartItemDTO com status 201 Created               │
└────────────────────┬─────────────────────────────────────────┘
                     │
┌────────────────────▼─────────────────────────────────────────┐
│ 9. Frontend atualiza contador do carrinho e exibe toast     │
└──────────────────────────────────────────────────────────────┘
```

---

## 🔐 Arquivos de Configuração Importantes

### Backend: `application.properties`
- Conexão com banco de dados
- Segredo JWT (TROCAR EM PRODUÇÃO!)
- Configurações Flyway
- Logging level

### Frontend: `vite.config.js`
- Proxy para API (opcional)
- Plugins React
- Build settings

### Frontend: `.env` (criar se necessário)
```env
VITE_API_BASE_URL=http://localhost:8080
VITE_API_TIMEOUT=10000
```

---

## 🧪 Como Navegar o Projeto

### Para Desenvolvedores Backend:
1. Comece por `LojaVariedadesApplication.java` (entry point)
2. Explore `controller/` para entender endpoints
3. Veja `service/` para lógica de negócio
4. Consulte `model/` para estrutura de dados
5. Revise `config/SecurityConfig.java` para autenticação

### Para Desenvolvedores Frontend:
1. Comece por `main.jsx` e `App.jsx` (entry point)
2. Explore `pages/` para ver rotas principais
3. Veja `components/` para UI reutilizável
4. Consulte `services/` para chamadas de API
5. Revise `apiClient.js` para configuração HTTP

### Para Designers/UX:
1. Navegue pelas páginas em `src/pages/`
2. Revise componentes visuais em `src/components/`
3. Veja estilos em arquivos `.css` de cada componente
4. Consulte `assets/` para recursos visuais

### Para Analistas/QA:
1. Leia `docs/backlog.md` para entender histórias
2. Consulte `prototype/README.md` para cenários de teste
3. Use credenciais de teste no arquivo
4. Valide critérios de aceitação de cada história

---

## 📊 Estatísticas do Projeto

```
Linhas de Código (aproximado):
- Backend (Java):    ~3.500 linhas
- Frontend (React):  ~2.800 linhas
- SQL/Flyway:        ~200 linhas
- Documentação:      ~4.000 linhas
────────────────────────────────
Total:               ~10.500 linhas

Arquivos:
- Java:              ~25 arquivos
- JavaScript/JSX:    ~30 arquivos
- CSS:               ~15 arquivos
- Markdown:          ~8 arquivos
────────────────────────────────
Total:               ~78 arquivos

Funcionalidades:
- Endpoints REST:    ~15 endpoints
- Páginas Frontend:  ~7 páginas
- Componentes:       ~10 componentes
- Histórias User:    ~30 histórias
```

---

## 🎓 Próximos Passos para Novos Desenvolvedores

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Samuel-Saturno/Loja_de_Variedades.git
   ```

2. **Leia a documentação na ordem:**
   - `README.md` (visão geral)
   - `docs/arquitetura.md` (arquitetura técnica)
   - `docs/backlog.md` (funcionalidades)
   - Este arquivo (estrutura)

3. **Configure ambiente local:**
   - Siga instruções em `README.md`
   - Execute backend e frontend
   - Teste com credenciais em `prototype/README.md`

4. **Explore código:**
   - Navegue pela estrutura descrita acima
   - Leia comentários no código
   - Execute testes (quando disponíveis)

5. **Contribua:**
   - Veja issues abertas no GitHub
   - Pegue histórias do backlog marcadas como ⏳ Planejado
   - Siga padrões de código existentes
   - Faça PR com descrição clara

---

**Última atualização:** Dezembro 2025  
**Mantenedores:**
- Antonio Joaquim de Lira Neto (Backend)
- Samuel de Almeida Saturno (Database)
- Antonio Nogueira da Silva Neto (Integration)
- Luiz Eduardo de Almeida Rodrigues (Frontend)
- Francisco Lailson de Almeida (Scrum Master)

**Instituição:** UFERSA - Universidade Federal Rural do Semi-Árido  
**Disciplina:** Engenharia de Software | Profª Huliane Medeiros da Silva
