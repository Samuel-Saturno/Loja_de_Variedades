# 🛍️ Loja de Variedades

## 📋 Sobre o Projeto

**Loja de Variedades** é um sistema completo de e-commerce desenvolvido como projeto acadêmico, simulando uma loja online real com funcionalidades de catálogo de produtos, carrinho de compras, autenticação de usuários e painel administrativo para gerenciamento.

O projeto demonstra a aplicação de conceitos de desenvolvimento full-stack, incluindo arquitetura em camadas, REST APIs, autenticação JWT, persistência de dados e interface responsiva.

---

## ✨ Principais Funcionalidades

### Para Clientes:
- 🔍 Navegar catálogo de produtos com imagens e descrições
- 🛒 Adicionar produtos ao carrinho de compras
- ➕ ➖ Ajustar quantidades e remover itens do carrinho
- 🔐 Login seguro com autenticação JWT
- 💳 Finalizar compras (checkout simplificado)
- 📱 Interface responsiva para mobile e desktop

### Para Administradores:
- ➕ Cadastrar novos produtos no sistema
- ✏️ Editar informações de produtos existentes
- 🗑️ Remover produtos descontinuados
- 📊 Visualizar painel de gerenciamento
- 🔒 Acesso protegido com role-based authorization

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **Java 17** - Linguagem principal
- **Spring Boot 3.x** - Framework web
- **Spring Data JPA** - Persistência e ORM
- **Spring Security** - Autenticação e autorização
- **PostgreSQL** - Banco de dados relacional
- **Flyway** - Migrações de schema
- **Maven** - Gerenciamento de dependências
- **JWT** - Tokens de autenticação stateless

### Frontend
- **React 18** - Biblioteca UI
- **Vite** - Build tool e dev server
- **Axios** - Cliente HTTP
- **React Router** - Roteamento SPA
- **CSS3** - Estilização

### DevOps
- **Docker** - Containerização
- **Git** - Controle de versão

---

## 📂 Estrutura do Repositório

```
Loja_de_Variedades/
├── docs/                          # 📚 Documentação do projeto
│   ├── arquitetura.md            # Arquitetura técnica detalhada
│   ├── backlog.md                # Épicos e histórias de usuário
│   └── pitch.md                  # Roteiro da apresentação
│
├── loja-variedades-back/         # 🔧 Backend (Spring Boot)
│   ├── src/main/java/com/example/loja/
│   │   ├── controller/           # Endpoints REST
│   │   ├── service/              # Lógica de negócio
│   │   ├── repository/           # Acesso a dados (JPA)
│   │   ├── model/                # Entidades (Product, User, etc)
│   │   ├── DTOs/                 # Data Transfer Objects
│   │   ├── config/               # Configurações (Security, CORS)
│   │   └── exception/            # Handlers de exceções
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   └── db/migration/         # Scripts Flyway
│   └── pom.xml
│
├── lojadevariedades-front/       # 🎨 Frontend (React)
│   ├── src/
│   │   ├── pages/                # Páginas principais (rotas)
│   │   ├── components/           # Componentes reutilizáveis
│   │   ├── services/             # Abstrações de API
│   │   └── api/                  # Cliente HTTP configurado
│   ├── package.json
│   └── vite.config.js
│
├── prototype/                     # 🚀 Protótipo navegável
│   └── README.md                 # Instruções para acessar
│
└── scripts/                       # 📜 Scripts auxiliares
    └── run_presentation.sh       # Script para apresentação
```

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- **Java 17+** (JDK)
- **Maven 3.8+**
- **Node.js 18+** e **npm**
- **PostgreSQL 14+** (ou Docker)
- **Git**

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/Samuel-Saturno/Loja_de_Variedades.git
cd Loja_de_Variedades
```

### 2️⃣ Configurar e Executar o Backend

```bash
cd loja-variedades-back

# Configurar banco de dados (edite application.properties se necessário)
# Padrão: PostgreSQL rodando em localhost:5432

# Compilar e executar
mvn clean install
mvn spring-boot:run
```

A API estará disponível em: **http://localhost:8080**

**Endpoints principais:**
- `POST /api/auth/login` - Autenticação
- `GET /api/products` - Listar produtos
- `POST /api/cart` - Adicionar ao carrinho
- `POST /api/admin/products` - Criar produto (admin)

### 3️⃣ Configurar e Executar o Frontend

```bash
cd lojadevariedades-front

# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev
```

A aplicação estará disponível em: **http://localhost:5173**

### 4️⃣ (Opcional) Executar com Docker

```bash
# Na raiz do projeto
docker-compose up -d
```

---

## 🧭 Como Navegar/Testar o Protótipo

### Acesso como Cliente:
1. Acesse `http://localhost:5173`
2. Navegue pelo catálogo de produtos
3. Adicione produtos ao carrinho
4. Faça login (ou cadastre-se, se implementado)
5. Finalize a compra no carrinho

### Acesso como Administrador:
1. Faça login com credenciais de admin:
   - **Email:** `admin@loja.com`
   - **Senha:** `admin123`
2. Acesse o painel administrativo
3. Gerencie produtos (adicionar, editar, excluir)

### Fluxo de Teste Sugerido:
```
Home → Visualizar Produtos → Adicionar ao Carrinho → 
Login → Revisar Carrinho → Finalizar Compra
```

**Dica:** Verifique o arquivo [`/prototype/README.md`](./prototype/README.md) para instruções detalhadas.

---

## 📖 Documentação Adicional

> 💡 **Não sabe por onde começar?** Veja o **[Índice Completo de Documentação](./INDICE_DOCUMENTACAO.md)** com roteiros por perfil!

### Documentos Principais:
- **[Resumo Executivo](./RESUMO_EXECUTIVO.md)** - Visão de 1 página (recomendado para avaliação rápida)
- **[Guia de Avaliação](./AVALIACAO.md)** - Roteiro completo para professora
- **[Documentação Scrum](./docs/scrum.md)** - Sprints, cerimônias, dailies e retrospectivas
- **[Arquitetura do Sistema](./docs/arquitetura.md)** - Separação de responsabilidades, fluxo, diagramas
- **[Estrutura do Projeto](./docs/estrutura.md)** - Organização detalhada de pastas e arquivos
- **[Backlog do Produto](./docs/backlog.md)** - Épicos, histórias de usuário e priorização
- **[Guia de Integração](./GUIA_INTEGRACAO.md)** - Detalhes técnicos de API

---

## 👥 Integrantes do Grupo

### Equipe de Desenvolvimento:

- **Antonio Joaquim de Lira Neto** - Desenvolvedor Backend
- **Samuel de Almeida Saturno** - Especialista em Banco de Dados
- **Antonio Nogueira da Silva Neto** - Integração Backend/Frontend
- **Luiz Eduardo de Almeida Rodrigues** - Desenvolvedor Frontend
- **Francisco Lailson de Almeida** - Scrum Master e Apresentador

### Informações Acadêmicas:

- **Instituição:** Universidade Federal Rural do Semi-Árido (UFERSA)
- **Disciplina:** Engenharia de Software
- **Professora:** Huliane Medeiros da Silva
- **Período:** 2025.2

---

## 📝 Licença

Este projeto foi desenvolvido para fins acadêmicos e está disponível sob a licença MIT.

---

## 🔗 Links Úteis

- [Documentação Spring Boot](https://spring.io/projects/spring-boot)
- [Documentação React](https://react.dev/)
- [Guia de JWT](https://jwt.io/introduction)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)

---

## 🤝 Contribuindo

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## ⚠️ Observações Importantes

- **Segurança:** Troque `jwt.secret` no `application.properties` por uma chave forte em produção
- **Ambiente:** Configure variáveis de ambiente para credenciais sensíveis
- **Pagamentos:** Sistema de pagamento real deve ser integrado com gateway (Stripe, PagSeguro, etc.)
- **Testes:** Execute testes unitários com `mvn test` (backend) e `npm test` (frontend)

---

**Desenvolvido com ❤️ para a disciplina de Engenharia de Software**

**Universidade Federal Rural do Semi-Árido (UFERSA) | 2025.2**