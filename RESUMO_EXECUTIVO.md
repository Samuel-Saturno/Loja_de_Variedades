# 📋 Resumo Executivo - Loja de Variedades

**Projeto:** Sistema de E-commerce Full Stack  
**Disciplina:** Engenharia de Software | **Professora:** Huliane Medeiros da Silva  
**Instituição:** UFERSA - Universidade Federal Rural do Semi-Árido | **Período:** 2025.2

---

## 👥 Equipe de Desenvolvimento

| Nome | Função | Responsabilidades Principais |
|------|--------|------------------------------|
| **Antonio Joaquim de Lira Neto** | Backend Developer | Controllers REST, Services, Spring Security, JWT |
| **Samuel de Almeida Saturno** | Database Specialist | Modelagem PostgreSQL, Flyway, Entidades JPA |
| **Antonio Nogueira da Silva Neto** | Integration Engineer | API REST, CORS, Sincronização Frontend/Backend |
| **Luiz Eduardo de Almeida Rodrigues** | Frontend Developer | React Components, UI/UX, Responsividade |
| **Francisco Lailson de Almeida** | Scrum Master & Apresentador | Metodologia, Backlog, Documentação, Pitch |

---

## 🎯 Objetivo do Sistema

Desenvolver uma plataforma completa de e-commerce que permita:
- **Clientes:** Navegar catálogo, gerenciar carrinho, finalizar compras
- **Administradores:** Gerenciar produtos (CRUD completo)
- **Sistema:** Autenticação segura, persistência de dados, arquitetura escalável

---

## 🛠️ Stack Tecnológico

| Camada | Tecnologias |
|--------|-------------|
| **Frontend** | React 18, Vite, Axios, React Router, CSS3 |
| **Backend** | Java 17, Spring Boot 3, Spring Security, Spring Data JPA |
| **Database** | PostgreSQL 14+, Flyway (migrations) |
| **Segurança** | JWT (autenticação stateless), BCrypt (hash de senhas) |
| **DevOps** | Docker, Git, Maven, npm |

---

## 📊 Escopo do Projeto

### ✅ Implementado (MVP)
- **Épico 1:** Catálogo de Produtos (visualização, detalhes)
- **Épico 2:** Carrinho de Compras (adicionar, remover, ajustar quantidades)
- **Épico 3:** Autenticação (login cliente/admin, JWT, logout)
- **Épico 4:** Gerenciamento Admin (CRUD completo de produtos)
- **Épico 5:** Finalização de Compras (checkout básico)
- **Épico 6:** UX/UI (design responsivo, feedback visual)

### 📈 Estatísticas
- **Histórias de Usuário:** 13 histórias em 8 épicos (10 implementadas, 3 planejadas)
- **Endpoints REST:** 15+ (produtos, autenticação, carrinho, pedidos)
- **Páginas Frontend:** 7 (Home, Cart, Login, Manage, Add/Edit/Delete Product)
- **Linhas de Código:** ~10.500 (3.500 Java, 2.800 React, 4.000 documentação)

---

## 🏗️ Arquitetura

```
┌─────────────┐
│  React SPA  │  (Frontend - Vite)
│ localhost:  │
│    5173     │
└──────┬──────┘
       │ HTTP REST (JSON)
       │ Authorization: Bearer JWT
┌──────▼──────┐
│ Spring Boot │  (Backend - Java 17)
│  REST API   │
│ localhost:  │
│    8080     │
└──────┬──────┘
       │ JPA/Hibernate
┌──────▼──────┐
│ PostgreSQL  │  (Database)
│    5432     │
└─────────────┘
```

**Padrões Aplicados:**
- MVC (Model-View-Controller)
- Repository Pattern
- DTO (Data Transfer Objects)
- Dependency Injection
- RESTful API

---

## 📝 Conceitos de Engenharia de Software Aplicados

✅ **Requisitos:** Histórias de usuário, épicos, critérios de aceitação  
✅ **Arquitetura:** Separação de camadas, diagramas, decisões técnicas documentadas  
✅ **Metodologia Ágil:** Scrum (backlog, sprints, retrospectivas)  
✅ **Qualidade:** Validações, exception handling, segurança (JWT, roles)  
✅ **Documentação:** README, arquitetura, backlog, roteiro de apresentação  
✅ **Versionamento:** Git, branches, commits descritivos  

---

## 🚀 Como Executar

### Opção 1: Script Automatizado
```bash
cd Loja_de_Variedades/scripts
./run_presentation.sh
```

### Opção 2: Manual
**Backend:**
```bash
cd loja-variedades-back
mvn spring-boot:run
# Acesse: http://localhost:8080
```

**Frontend:**
```bash
cd lojadevariedades-front
npm install && npm run dev
# Acesse: http://localhost:5173
```

---

## 🔑 Credenciais de Teste

| Perfil | Email | Senha |
|--------|-------|-------|
| **Admin** | admin@loja.com | admin123 |
| **Cliente** | cliente@teste.com | cliente123 |

---

## 📚 Documentação Completa

| Documento | Localização | Descrição |
|-----------|-------------|-----------|
| README Principal | `/README.md` | Visão geral, como executar |
| Arquitetura | `/docs/arquitetura.md` | Stack, diagramas, decisões |
| Backlog | `/docs/backlog.md` | Épicos, histórias, priorização |
| Roteiro Apresentação | `/docs/pitch.md` | Cronograma 10min, Q&A |
| Estrutura | `/docs/estrutura.md` | Organização de pastas |
| Guia Protótipo | `/prototype/README.md` | Cenários de teste |
| Guia Avaliação | `/AVALIACAO.md` | Roteiro para professora |

---

## 🏆 Destaques


1. **Arquitetura sólida:** Separação clara, escalável, segura
2. **Trabalho em equipe:** Divisão por especialidade, Scrum aplicado
3. **MVP funcional:** Todas funcionalidades core implementadas

---

## 📞 Contato

**GitHub:** github.com/Samuel-Saturno/Loja_de_Variedades  
**Apresentador:** Francisco Lailson de Almeida (Scrum Master)

---

*Desenvolvido com dedicação para a disciplina de Engenharia de Software - UFERSA 2025.2*
