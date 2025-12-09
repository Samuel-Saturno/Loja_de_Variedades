# 🎓 Guia para Avaliação - Loja de Variedades

**Disciplina:** Engenharia de Software  
**Professora:** Huliane Medeiros da Silva  
**Instituição:** UFERSA - Universidade Federal Rural do Semi-Árido  
**Período:** 2025.2

---

## 👋 Bem-vinda, Professora Huliane!

Este documento foi criado especialmente para facilitar a avaliação do projeto. Aqui você encontrará um roteiro rápido para navegar pela documentação e testar o sistema.

---

## 📋 Checklist de Avaliação Rápida

### ✅ Documentação (Item 1 do Projeto Final)

#### a) Código-fonte inicial (MVP)
- **Localização:** Todo o repositório
- **Pasta Backend:** `/loja-variedades-back/src/`
- **Pasta Frontend:** `/lojadevariedades-front/src/`

#### b) Protótipo navegável
- **Instruções completas:** [`/prototype/README.md`](./prototype/README.md)
- **Link local:** http://localhost:5173 (após executar)
- **Credenciais de teste:**
  - Admin: `admin@loja.com` / `admin123`
  - Cliente: `cliente@teste.com` / `cliente123`

#### c) Arquitetura Mínima
- **Documento principal:** [`/docs/arquitetura.md`](./docs/arquitetura.md)
- **Inclui:**
  - ✅ Separação mínima de responsabilidades (Frontend/Backend/Database)
  - ✅ Fluxo básico do sistema (diagramas)
  - ✅ Tecnologias selecionadas (Java 17, Spring Boot, React, PostgreSQL)
  - ✅ Diagrama simples (camadas e componentes em ASCII art)

#### d) Backlog revisado
- **Documento principal:** [`/docs/backlog.md`](./docs/backlog.md)
- **Inclui:**
  - ✅ 8 épicos organizados por funcionalidade
  - ✅ 30+ histórias de usuário com formato: "Como [perfil], quero [ação], para [benefício]"
  - ✅ Critérios de aceitação específicos
  - ✅ Priorização (Must/Should/Could/Won't)
  - ✅ Status de implementação (✅ Implementado, 🟡 Parcial, ⏳ Planejado, 💡 Backlog)

#### e) Arquivo README.md profissional
- **Localização:** [`/README.md`](./README.md) (raiz do projeto)
- **Inclui:**
  - ✅ i. Objetivo do sistema
  - ✅ ii. Principais funcionalidades
  - ✅ iii. Tecnologias utilizadas
  - ✅ iv. Como executar o projeto (backend + frontend + Docker)
  - ✅ v. Como navegar/testar o protótipo
  - ✅ vi. Integrantes do grupo com funções específicas

---

### ✅ Apresentação Final (Item 2 do Projeto Final)

#### Roteiro da Apresentação
- **Documento:** [`/docs/pitch.md`](./docs/pitch.md)
- **Duração planejada:** 10 minutos + 5 minutos Q&A
- **Apresentador principal:** Francisco Lailson de Almeida (Scrum Master)
- **Divisão de responsabilidades:** Todos os membros participam em seções específicas
- **Inclui:**
  - Cronograma detalhado por minuto
  - Scripts de fala para cada seção
  - 10 perguntas previstas com respostas técnicas
  - Dicas de preparação e apresentação

---

## 🚀 Roteiro Rápido para Testar o Sistema (15 minutos)

### Passo 1: Executar o Backend (5 min)

```bash
# Navegar para a pasta do backend
cd loja-variedades-back

# Executar com Maven (certifique-se de ter Java 17 e PostgreSQL rodando)
mvn spring-boot:run
```

**Verificar:** API disponível em http://localhost:8080

### Passo 2: Executar o Frontend (3 min)

```bash
# Em outro terminal, navegar para a pasta do frontend
cd lojadevariedades-front

# Instalar dependências (primeira vez)
npm install

# Executar
npm run dev
```

**Verificar:** Interface disponível em http://localhost:5173

### Passo 3: Testar Fluxo do Cliente (4 min)

1. Abrir http://localhost:5173 no navegador
2. Navegar pelo catálogo de produtos
3. Adicionar 2-3 produtos ao carrinho
4. Clicar no ícone do carrinho
5. Fazer login com: `cliente@teste.com` / `cliente123`
6. Ajustar quantidades no carrinho
7. Clicar em "Finalizar Compra"

**Avaliar:** Navegação, responsividade, feedback visual

### Passo 4: Testar Fluxo Administrativo (3 min)

1. Fazer logout
2. Fazer login com: `admin@loja.com` / `admin123`
3. Acessar painel administrativo
4. Testar:
   - Adicionar um novo produto
   - Editar produto existente
   - Excluir produto

**Avaliar:** Segurança (role-based), validações, CRUD completo

---

## 📊 Critérios de Avaliação Sugeridos

### Documentação (50%)

| Critério | Peso | Localização | Status |
|----------|------|-------------|--------|
| Código-fonte organizado | 10% | `/loja-variedades-back/`, `/lojadevariedades-front/` | ✅ |
| Arquitetura clara | 10% | `/docs/arquitetura.md` | ✅ |
| Backlog completo | 15% | `/docs/backlog.md` | ✅ |
| README profissional | 10% | `/README.md` | ✅ |
| Documentação adicional | 5% | `/docs/estrutura.md`, `/docs/pitch.md` | ✅ |

### Implementação (50%)

| Critério | Peso | Como Avaliar | Status |
|----------|------|--------------|--------|
| Funcionalidades core | 20% | Testar fluxos de compra e admin | ✅ |
| Arquitetura aplicada | 10% | Verificar separação Frontend/Backend/DB | ✅ |
| Segurança (JWT, roles) | 10% | Tentar acessar rotas admin como cliente | ✅ |
| UX/UI responsiva | 5% | Testar em mobile (DevTools) | ✅ |
| Qualidade do código | 5% | Revisar organização, comentários | ✅ |

---

## 🎯 Destaques do Projeto

### Pontos Fortes:

1. **Arquitetura bem definida:** Separação clara entre camadas (MVC, REST API, SPA)
2. **Documentação completa:** Arquitetura, backlog com histórias de usuário, roteiro de apresentação
3. **Funcionalidades essenciais implementadas:** Catálogo, carrinho, autenticação, painel admin
4. **Segurança adequada:** JWT, BCrypt, role-based authorization
5. **Trabalho em equipe:** Divisão clara de responsabilidades por especialidade
6. **Metodologia ágil:** Scrum aplicado com Scrum Master dedicado
7. **Histórias de usuário:** Escritas com critérios de aceitação claros

### Áreas de Melhoria (reconhecidas pelo time):

1. Testes automatizados (não implementados - prioridade futura)
2. Validação de estoque em tempo real (implementação básica)
3. Busca e filtros de produtos (planejado, não implementado)
4. CI/CD pipeline (não implementado)
5. Cadastro de novos clientes (não implementado)

---

## 💡 Conceitos de Engenharia de Software Aplicados

### ✅ Requisitos e Modelagem:
- Histórias de usuário detalhadas (formato "Como [perfil], quero [ação], para [benefício]")
- Épicos organizados por funcionalidade
- Critérios de aceitação específicos
- Priorização MoSCoW

### ✅ Arquitetura e Design:
- Padrão MVC adaptado (Controller-Service-Repository)
- REST API stateless
- Separação de responsabilidades (concerns)
- DTOs para comunicação entre camadas
- Dependency Injection (Spring Boot)

### ✅ Metodologia Ágil:
- Scrum aplicado (Scrum Master: Francisco Lailson)
- Backlog priorizado
- Desenvolvimento iterativo (MVP → melhorias)
- Retrospectivas documentadas

### ✅ Qualidade:
- Exception handling centralizado
- Validações (Bean Validation)
- Segurança (JWT, BCrypt, CORS)
- Código organizado e modular

### ✅ Documentação:
- README profissional
- Arquitetura detalhada com diagramas
- Backlog completo
- Instruções de execução
- Roteiro de apresentação

---

## 📞 Contato com o Time

Em caso de dúvidas durante a avaliação:

**Scrum Master / Apresentador:**  
Francisco Lailson de Almeida

**Responsáveis Técnicos:**
- Backend: Antonio Joaquim de Lira Neto
- Database: Samuel de Almeida Saturno
- Integração: Antonio Nogueira da Silva Neto
- Frontend: Luiz Eduardo de Almeida Rodrigues

---

## 📝 Observações Finais

- **Banco de Dados:** O projeto usa PostgreSQL. Scripts Flyway em `/loja-variedades-back/src/main/resources/db/migration/` criam tabelas automaticamente na primeira execução
- **Ambiente de Desenvolvimento:** Configurações em `application.properties` (backend) e `vite.config.js` (frontend)
- **Dependências:** Maven gerencia backend, npm gerencia frontend
- **Docker:** Dockerfile disponível, mas execução local é mais simples para avaliação

---

## 🎬 Sugestão de Ordem de Avaliação

1. **Ler README.md** (5 min) - Visão geral do projeto
2. **Ler docs/arquitetura.md** (10 min) - Entender decisões técnicas
3. **Folhear docs/backlog.md** (10 min) - Ver escopo e histórias
4. **Executar e testar sistema** (15 min) - Validar funcionalidades
5. **Revisar código-fonte** (20 min) - Avaliar qualidade e organização
6. **Assistir apresentação** (15 min) - Ver pitch técnico do time

**Tempo total estimado:** ~75 minutos para avaliação completa

---

**Agradecemos pela oportunidade de aplicar os conceitos de Engenharia de Software em um projeto prático e completo!**

*"A melhor maneira de prever o futuro é construí-lo." - Peter Drucker*

---

**Equipe Loja de Variedades**  
UFERSA | Engenharia de Software | 2025.2
