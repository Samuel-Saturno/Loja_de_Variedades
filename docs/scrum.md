# Documentação Scrum - Loja de Variedades

## 📋 Informações do Projeto

**Projeto:** Sistema de E-commerce - Loja de Variedades  
**Time:** 5 desenvolvedores  
**Duração:** 6 semanas (20/10/2025 - 03/12/2025)  
**Metodologia:** Scrum adaptado para ambiente acadêmico  
**Sprint Duration:** 2 semanas

---

## 👥 Papéis e Responsabilidades

### Scrum Master
**Francisco Lailson de Almeida**
- Facilitação de cerimônias Scrum
- Remoção de impedimentos
- Coaching do time em práticas ágeis
- Acompanhamento de velocity e burndown
- Organização de dailies e retrospectivas

### Product Owner
**Samuel de Almeida Saturno**
- Definição e priorização do backlog
- Visão do produto e roadmap
- Validação de entregas (Definition of Done)
- Refinamento contínuo das histórias
- Interface com requisitos acadêmicos (Professora Huliane)
- Decisões de escopo e trade-offs

### Development Team
- **Antonio Nogueira da Silva Neto** (Integration Lead & Tech Lead)
- **Samuel de Almeida Saturno** (Product Owner & Database Specialist)
- **Antonio Joaquim de Lira Neto** (Backend Developer)
- **Luiz Eduardo de Almeida Rodrigues** (Frontend Developer)
- **Francisco Lailson de Almeida** (Scrum Master & Developer)

**Observação:** Em times pequenos de projetos acadêmicos, é comum que membros acumulem papéis (Samuel como PO + Dev, Francisco como SM + Dev). Todos os 5 integrantes contribuíram ativamente no desenvolvimento.

---

## 🎯 Definição de Pronto (Definition of Done)

Uma história está **pronta** quando:
- [ ] Código implementado e funcional
- [ ] Code review realizado por pelo menos 1 membro
- [ ] Commit com mensagem descritiva
- [ ] Funcionalidade testada manualmente
- [ ] Integração frontend-backend validada (quando aplicável)
- [ ] Documentação atualizada (se necessário)
- [ ] Sem erros de compilação/build

---

## 📅 Sprint 1: Setup e Fundação (20/10 - 03/11/2025)

### Objetivo da Sprint
Estabelecer a infraestrutura básica do projeto: configuração do repositório, ambiente de desenvolvimento, e estrutura inicial do backend.

### Planning (20/10/2025)
**Duração:** 1h30  
**Participantes:** Todo o time  
**Decisões:**
- Samuel criará a estrutura inicial Spring Boot
- Antonio Joaquim focará na modelagem inicial
- Definido PostgreSQL como banco de dados
- Versionamento via Git/GitHub

### Histórias Planejadas
- ✅ Criar repositório GitHub
- ✅ Configurar Spring Boot base
- ✅ Definir estrutura de pastas do projeto
- ✅ Configurar dependências Maven (Spring Web, JPA, Security)

### Daily Standups (Resumo)

#### 22/10/2025
- **Samuel:** Criando estrutura Spring Boot base, precisando definir versões
- **Antonio Nogueira:** Aguardando estrutura para começar configurações
- **Antonio Joaquim:** Estudando documentação Spring Security
- **Impedimentos:** Nenhum

#### 25/10/2025
- **Samuel:** Finalizando estrutura base, subindo primeiro commit
- **Antonio Nogueira:** Preparando ambiente local
- **Luiz Eduardo:** Pesquisando boilerplate React + Vite
- **Impedimentos:** Nenhum

### Retrospectiva (03/11/2025)
**O que funcionou bem:**
- ✅ Boa comunicação inicial do time
- ✅ Definições técnicas claras (Java 17, Spring Boot 3, PostgreSQL)
- ✅ Repositório configurado sem conflitos

**O que precisa melhorar:**
- 🔄 Aumentar frequência de commits (alguns membros ainda não commitaram)
- 🔄 Estabelecer padrão de mensagens de commit
- 🔄 Criar canal de comunicação mais ágil (WhatsApp/Discord)

**Action Items:**
- [ ] Francisco criará grupo no WhatsApp
- [ ] Samuel documentará setup do ambiente
- [ ] Definir padrão de commit: `tipo: descrição` (feat, fix, docs, refactor)

### Velocity
**Story Points Planejados:** 8  
**Story Points Concluídos:** 6  
**Velocidade:** 75%

---

## 📅 Sprint 2: Backend Core (04/11 - 17/11/2025)

### Objetivo da Sprint
Implementar a camada de backend com autenticação, CRUD de produtos, e APIs REST funcionais.

### Planning (04/11/2025)
**Duração:** 1h30  
**Participantes:** Todo o time  
**Decisões:**
- Antonio Joaquim liderará desenvolvimento de Controllers e Services
- Samuel implementará entidades JPA e migrations
- Antonio Nogueira preparará configuração de CORS e JWT
- Luiz Eduardo iniciará estrutura do frontend (paralelo)

### Histórias Planejadas
- ✅ Criar entidades JPA (Product, User, Order)
- ✅ Implementar autenticação JWT
- ✅ Configurar Spring Security
- ✅ Criar endpoints CRUD de produtos
- ✅ Configurar Swagger/OpenAPI
- ✅ Seed de usuário admin

### Daily Standups (Resumo)

#### 08/11/2025
- **Antonio Joaquim:** Implementando ProductController, 60% concluído
- **Samuel:** Entidades criadas, iniciando Flyway migrations
- **Antonio Nogueira:** Estudando configuração JWT com Spring Security 6
- **Impedimentos:** Dúvida sobre versionamento de schema (resolvida com Samuel)

#### 12/11/2025
- **Antonio Joaquim:** Controllers finalizados, iniciando Services
- **Samuel:** Migrations funcionando, testando relacionamentos
- **Antonio Nogueira:** JWT implementado, falta integrar com frontend
- **Luiz Eduardo:** Estrutura React criada, aguardando APIs
- **Impedimentos:** Nenhum

#### 15/11/2025
- **Antonio Joaquim:** Services concluídos, fazendo testes manuais
- **Samuel:** Seed de admin configurado
- **Antonio Nogueira:** Corrigindo problema de CORS
- **Impedimentos:** CORS bloqueando requisições (resolvido no mesmo dia)

### Review (17/11/2025)
**Demonstração:**
- ✅ API REST funcionando em `localhost:8080`
- ✅ Autenticação JWT testada via Postman
- ✅ CRUD de produtos operacional
- ✅ Swagger disponível em `/swagger-ui.html`
- ✅ Banco PostgreSQL com migrations versionadas

**Feedback da Professora:**
- Arquitetura bem organizada
- Sugestão: documentar melhor os endpoints

### Retrospectiva (17/11/2025)
**O que funcionou bem:**
- ✅ Pair programming entre Antonio Joaquim e Samuel funcionou muito bem
- ✅ Resolução rápida de impedimentos (CORS)
- ✅ Código organizado em camadas (Controller → Service → Repository)
- ✅ Commits frequentes e descritivos

**O que precisa melhorar:**
- 🔄 Integração com frontend ainda não iniciada
- 🔄 Alguns testes manuais poderiam ser automatizados
- 🔄 Documentação dos endpoints precisa melhorar

**Action Items:**
- [ ] Antonio Nogueira focará na integração front/back na Sprint 3
- [ ] Criar arquivo README com instruções de execução
- [ ] Documentar endpoints principais

### Velocity
**Story Points Planejados:** 13  
**Story Points Concluídos:** 12  
**Velocidade:** 92%

---

## 📅 Sprint 3: Frontend e Integração (18/11 - 03/12/2025)

### Objetivo da Sprint
Desenvolver interface React, integrar com backend via API REST, e finalizar funcionalidades principais do MVP.

### Planning (18/11/2025)
**Duração:** 2h  
**Participantes:** Todo o time  
**Decisões:**
- Luiz Eduardo desenvolverá componentes React e páginas
- Antonio Nogueira será responsável pela integração completa
- Samuel ajudará em ajustes de banco conforme necessário
- Francisco coordenará testes de ponta a ponta
- Deadline: 30/11 para funcionalidades, 01-03/12 para ajustes finais

### Histórias Planejadas
- ✅ Criar estrutura frontend React + Vite
- ✅ Implementar página de login
- ✅ Integrar login com API (JWT)
- ✅ Criar componente de listagem de produtos
- ✅ Implementar carrinho de compras
- ✅ Criar painel administrativo
- ✅ Integrar CRUD de produtos (admin)
- 🟡 Implementar checkout básico (parcial)
- ✅ Configurar PostgreSQL em produção
- ✅ Adicionar usuário comum para testes
- ✅ Design responsivo

### Daily Standups (Resumo)

#### 20/11/2025
- **Luiz Eduardo:** Criando componentes base (Navbar, Product Card)
- **Antonio Nogueira:** Configurando axios e apiClient
- **Samuel:** Standby para ajustes de banco
- **Impedimentos:** Nenhum

#### 25/11/2025
- **Luiz Eduardo:** Páginas Home e Login funcionando, iniciando Cart
- **Antonio Nogueira:** Login integrado com sucesso, testando persistência de token
- **Antonio Joaquim:** Ajustando endpoints conforme necessidade do front
- **Impedimentos:** Nenhum

#### 28/11/2025
- **Luiz Eduardo:** Carrinho funcional, falta integrar com backend
- **Antonio Nogueira:** Integrando carrinho, resolvendo problemas de sincronização
- **Samuel:** Ajustando relacionamentos de Order/OrderItem
- **Impedimentos:** Lógica de carrinho complexa, precisando refatorar

#### 30/11/2025 (Sprint Final Push)
- **Antonio Nogueira:** Integração 90% concluída, ajustando assets estáticos
- **Luiz Eduardo:** Melhorias visuais e responsividade
- **Samuel:** Correções em entidades
- **Francisco:** Testando fluxos completos, documentando
- **Impedimentos:** Nenhum crítico

#### 01/12/2025
- **Luiz Eduardo:** Atualizando frontend com melhorias de UX
- **Antonio Nogueira:** Mergeando melhorias do frontend
- **Impedimentos:** Conflitos de merge (resolvidos)

#### 03/12/2025 (Dia da Apresentação)
- **Antonio Nogueira:** Configurando PostgreSQL definitivo, criando usuário teste
- **Antonio Joaquim:** Ajustes finais na API
- **Luiz Eduardo:** Últimos ajustes visuais
- **Francisco:** Finalizando documentação e preparando apresentação
- **Samuel:** Validando banco de dados
- **Impedimentos:** Nenhum

#### 07/12/2025 (Pré-Apresentação)
- **Antonio Nogueira:** Corrigindo script de apresentação (usar JAR compilado)
- **Equipe:** Descobrindo problemas de integração front/back
- **Impedimentos:** Frontend usando dados mockados, não conectando com API real

#### 08/12/2025 (Preparação Final)
- **Antonio Nogueira:** Reescrevendo componentes Product, Cart, EditProduct, DeleteProduct para usar API real
- **Antonio Nogueira:** Implementando sistema de eventos para atualização automática
- **Antonio Nogueira:** Criando 6 categorias no banco e associando produtos
- **Antonio Nogueira:** Limpando script de apresentação (removendo emojis)
- **Antonio Nogueira:** Documentando integração completa e comandos manuais
- **Impedimentos:** Resolvidos - sistema totalmente funcional

### Review (03/12/2025)
**Demonstração:**
- ✅ Sistema completo funcionando end-to-end
- ✅ Login cliente/admin operacional
- ✅ Catálogo de produtos com imagens
- ✅ Carrinho funcional
- ✅ Painel admin com CRUD completo
- ✅ Design responsivo (mobile + desktop)
- ✅ PostgreSQL em produção
- 🟡 Checkout básico (formulário presente, lógica parcial)

### Review Final (08/12/2025)
**Ajustes de Última Hora:**
- ✅ Script de apresentação corrigido (usa JAR compilado)
- ✅ Integração frontend-backend 100% funcional
- ✅ Componentes Product, Cart, EditProduct, DeleteProduct reescritos
- ✅ Sistema de categorias implementado (6 categorias funcionais)
- ✅ Filtro de produtos por categoria operacional
- ✅ Carrinho com localStorage persistente
- ✅ Sistema de eventos para atualização automática de listas
- ✅ Todos os CRUDs validados e funcionando
- ✅ Script de apresentação limpo (sem emojis)
- ✅ Documentação completa de integração
- ✅ Comandos manuais documentados

**Métricas Finais:**
- 11 histórias totalmente implementadas
- 1 história parcialmente implementada
- 1 história planejada para versões futuras

### Retrospectiva (03/12/2025)
**O que funcionou bem:**
- ✅ Integração frontend-backend excelente (Antonio Nogueira)
- ✅ Componentes React reutilizáveis e bem organizados (Luiz Eduardo)
- ✅ Comunicação constante via WhatsApp
- ✅ Resolução rápida de conflitos de merge
- ✅ Pair programming remoto foi muito produtivo
- ✅ Documentação detalhada ajudou muito

**O que precisa melhorar:**
- 🔄 Alguns commits duplicados (nogueira/antonioneto2)
- 🔄 Testes automatizados ficaram para depois
- 🔄 Algumas funcionalidades ficaram para última hora

**Conquistas:**
- 🎉 MVP funcional e apresentável
- 🎉 Arquitetura limpa e escalável
- 🎉 Todos os membros contribuíram ativamente
- 🎉 Documentação completa e profissional

**Lições Aprendidas:**
- Integração contínua evita problemas de última hora
- Comunicação frequente é essencial em time distribuído
- Git branches ajudam a organizar features paralelas
- Scrum adaptado funcionou bem para projeto acadêmico

### Velocity
**Story Points Planejados:** 21  
**Story Points Concluídos:** 18  
**Velocidade:** 86%

---

## 📊 Métricas do Projeto

### Velocity por Sprint
| Sprint | Planejado | Concluído | % |
|--------|-----------|-----------|---|
| Sprint 1 | 8 | 6 | 75% |
| Sprint 2 | 13 | 12 | 92% |
| Sprint 3 | 21 | 18 | 86% |
| **Total** | **42** | **36** | **86%** |

### Distribuição de Commits
| Autor | Commits | % |
|-------|---------|---|
| Antonio Nogueira (nogueira + antonioneto2) | 22 | 53.7% |
| Samuel Saturno | 12 | 29.3% |
| Antonio Joaquim (AliranTi) | 4 | 9.7% |
| Luiz Eduardo (LuizEdu-AR) | 3 | 7.3% |
| **Total** | **41** | **100%** |

### Histórias por Status
- ✅ **Implementadas:** 10 histórias (77%)
- 🟡 **Parcialmente Implementadas:** 1 história (8%)
- ⏳ **Planejadas:** 2 histórias (15%)

---

## 🔄 Cerimônias Scrum Realizadas

### Sprint Planning
- **Frequência:** A cada 2 semanas (início de sprint)
- **Duração Média:** 1h30
- **Total:** 3 plannings
- **Formato:** Reunião online via Google Meet

### Daily Standups
- **Frequência:** 2-3x por semana (adaptado para acadêmico)
- **Duração:** 10-15 minutos
- **Total:** ~15 dailies
- **Formato:** WhatsApp (assíncrono) + calls pontuais

### Sprint Review
- **Frequência:** Final de cada sprint
- **Duração Média:** 1h
- **Total:** 3 reviews
- **Formato:** Demonstração + feedback

### Sprint Retrospective
- **Frequência:** Final de cada sprint
- **Duração Média:** 45min
- **Total:** 3 retrospectivas
- **Formato:** Start-Stop-Continue + Action Items

---

## 🚧 Impedimentos e Resoluções

### Sprint 2
**Impedimento:** CORS bloqueando requisições do frontend  
**Responsável:** Antonio Nogueira  
**Resolução:** Configuração adequada no SecurityFilterChain  
**Tempo de Resolução:** 1 dia  
**Data:** 15/11/2025

### Sprint 3
**Impedimento:** Conflitos de merge entre branches  
**Responsável:** Antonio Nogueira + Luiz Eduardo  
**Resolução:** Merge manual cuidadoso + code review  
**Tempo de Resolução:** Algumas horas  
**Data:** 01/12/2025

**Impedimento:** Lógica de carrinho complexa (sincronização frontend-backend)  
**Responsável:** Antonio Nogueira  
**Resolução:** Refatoração do estado global + localStorage  
**Tempo de Resolução:** 2 dias  
**Data:** 28-29/11/2025

**Impedimento:** Script rodando versão antiga do código (mvn spring-boot:run)  
**Responsável:** Antonio Nogueira  
**Resolução:** Alterado script para compilar e executar JAR  
**Tempo de Resolução:** 1 hora  
**Data:** 07/12/2025

**Impedimento:** Frontend usando dados mockados, não conectando com API  
**Responsável:** Antonio Nogueira  
**Resolução:** Reescrita dos componentes para usar productService e API real  
**Tempo de Resolução:** 1 dia  
**Data:** 08/12/2025

**Impedimento:** Categorias vazias no banco, produtos sem category_id  
**Responsável:** Antonio Nogueira  
**Resolução:** Criação de 6 categorias via SQL e associação com produtos  
**Tempo de Resolução:** 2 horas  
**Data:** 08/12/2025

---

## 📝 Observações Importantes

### Adaptações do Scrum
Como este é um projeto acadêmico com time distribuído:
- Dailies foram adaptados para formato assíncrono (WhatsApp)
- Sprints de 2 semanas (ao invés de 1 semana)
- Planning Poker não foi usado (time pequeno, escopo definido)
- Retrospectivas focadas em aprendizado técnico

### Ferramentas Utilizadas
- **Versionamento:** Git + GitHub
- **Comunicação:** WhatsApp + Google Meet
- **Documentação:** Markdown (GitHub)
- **Gestão:** Backlog em `docs/backlog.md`
- **Code Review:** Pull Requests (quando necessário)

### Práticas de Engenharia
- ✅ Commits semânticos (`feat:`, `fix:`, `docs:`, `refactor:`)
- ✅ Branches para features grandes
- ✅ Code review informal (pair programming)
- ✅ Integração contínua manual
- ⏳ Testes automatizados (planejado para v2.0)

---

## 🎯 Próximos Passos (Backlog Futuro)

### Versão 2.0 (Pós-Apresentação)
- [ ] Implementar testes unitários (backend)
- [ ] Adicionar testes E2E com Cypress (frontend)
- [ ] Melhorar fluxo de checkout
- [ ] Implementar busca e filtros avançados
- [ ] Adicionar histórico de pedidos
- [ ] Implementar recuperação de senha
- [ ] Cache Redis para performance
- [ ] CI/CD com GitHub Actions

---

## 📚 Referências

- **Scrum Guide 2020:** https://scrumguides.org/
- **Disciplina:** Engenharia de Software - UFERSA
- **Professora:** Huliane Medeiros da Silva
- **Período:** 2025.2

---

**Última Atualização:** 03/12/2025  
**Responsável:** Francisco Lailson de Almeida (Scrum Master)
