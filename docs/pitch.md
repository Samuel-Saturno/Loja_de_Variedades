# 🎤 Roteiro da Apresentação Final - Loja de Variedades

**Duração Total:** 10 minutos de apresentação + 5 minutos de perguntas  
**Formato:** Pitch técnico com demonstração do protótipo  
**Objetivo:** Apresentar a solução técnica, evolução e aprendizados

---

## ⏱️ Cronograma da Apresentação (10 minutos)

| Tempo | Seção | Conteúdo | Responsável |
|-------|-------|----------|-------------|
| 0:00 - 1:00 | Introdução | Apresentação do time, contexto e objetivo do projeto | Francisco Lailson |
| 1:00 - 2:30 | Visão do Produto | Problema resolvido, público-alvo, principais funcionalidades | Francisco Lailson |
| 2:30 - 4:30 | Arquitetura Técnica | Stack, separação de responsabilidades, diagrama, decisões arquiteturais | Antonio Nogueira |
| 4:30 - 7:30 | Demonstração | Protótipo navegável (fluxo cliente + admin) | Luiz Eduardo / Antonio Joaquim |
| 7:30 - 9:00 | Desenvolvimento | Processo, backlog, metodologia, histórias implementadas | Samuel Saturno |
| 9:00 - 10:00 | Conclusão | Lições aprendidas, desafios superados, próximos passos | Francisco Lailson |

---

## 📝 Roteiro Detalhado

### 🎬 SLIDE 1: Introdução (1 minuto)

**[Francisco Lailson - Scrum Master e Apresentador]**

> *"Boa tarde a todos! Somos o time de desenvolvimento da **Loja de Variedades**, um sistema completo de e-commerce desenvolvido para a disciplina de Engenharia de Software da UFERSA."*

**Pontos a cobrir:**
- Nome dos integrantes e papéis no time
- Contexto acadêmico: projeto da disciplina de Engenharia de Software (Profª Huliane Medeiros)
- Objetivo: construir MVP funcional aplicando conceitos de engenharia de software

**Slide sugerido:**
```
┌──────────────────────────────────────────────────────────┐
│  🛍️ Loja de Variedades                                  │
│  Sistema de E-commerce Full Stack                        │
│                                                          │
│  🎓 UFERSA - Engenharia de Software | 2025.2            │
│  👩‍🏫 Profª Huliane Medeiros da Silva                    │
│                                                          │
│  👥 Time de Desenvolvimento:                            │
│  • Antonio Joaquim - Backend Developer                  │
│  • Samuel Saturno - Database Specialist                 │
│  • Antonio Nogueira - Backend/Frontend Integration      │
│  • Luiz Eduardo - Frontend Developer                    │
│  • Francisco Lailson - Scrum Master & Presenter         │
└──────────────────────────────────────────────────────────┘
```

---

### 🎯 SLIDE 2-3: Visão do Produto (1m30s)

**[Apresentador 1]**

> *"Nosso desafio foi criar uma solução que atendesse tanto clientes finais quanto administradores de loja, garantindo experiência fluida e segura."*

**Pontos a cobrir:**

**Problema:**
- Pequenos comerciantes precisam de presença digital
- Clientes buscam praticidade para comprar online
- Gestão de estoque e catálogo deve ser simples

**Solução:**
- Plataforma web acessível de qualquer dispositivo
- Interface intuitiva para navegação e compra
- Painel administrativo completo

**Público-alvo:**
- 🛒 **Clientes:** Consumidores finais que querem comprar online
- ⚙️ **Administradores:** Donos de loja que gerenciam produtos

**Slide sugerido:**
```
┌──────────────────────────────────────────────┐
│  🎯 Visão do Produto                         │
│                                              │
│  Problema: Pequenos negócios precisam       │
│  digitalizar vendas com baixo custo          │
│                                              │
│  Solução: E-commerce completo e intuitivo   │
│                                              │
│  Funcionalidades Principais:                 │
│  ✓ Catálogo de produtos navegável           │
│  ✓ Carrinho de compras inteligente          │
│  ✓ Autenticação segura (JWT)                │
│  ✓ Painel admin para gestão                 │
└──────────────────────────────────────────────┘
```

---

### 🏗️ SLIDE 4-5: Arquitetura Técnica (2 minutos)

**[Antonio Nogueira - Integração Backend/Frontend]**

> *"Adotamos uma arquitetura em três camadas, separando frontend, backend e banco de dados para garantir escalabilidade e manutenibilidade."*

**Pontos a cobrir:**

**Stack Tecnológico:**
- **Frontend:** React 18 + Vite (build rápido, HMR)
- **Backend:** Spring Boot 3 + Java 17 (ecosystem maduro)
- **Banco:** PostgreSQL (transacional, robusto)
- **Segurança:** Spring Security + JWT (stateless)
- **DevOps:** Docker, Git, Flyway

**Separação de Responsabilidades:**
- **Frontend:** UI/UX, validação básica, comunicação HTTP
- **Backend:** Lógica de negócio, autenticação, persistência
- **Database:** Armazenamento estruturado e relacional

**Decisões Arquiteturais:**
- REST API para comunicação (padrão amplamente adotado)
- JWT para autenticação (sem session server-side)
- Flyway para migrações versionadas
- CORS configurado para desenvolvimento local

**Slide sugerido (mostrar diagrama):**
```
┌─────────────────────────────────────────────────┐
│  🏗️ Arquitetura em Camadas                     │
│                                                 │
│  ┌─────────────┐                               │
│  │  Frontend   │ React + Vite                  │
│  │  (React)    │ ← HTTP REST →                 │
│  └─────────────┘                               │
│         ↓                                       │
│  ┌─────────────┐                               │
│  │   Backend   │ Spring Boot + JWT             │
│  │  (Spring)   │ ← JPA/Hibernate →             │
│  └─────────────┘                               │
│         ↓                                       │
│  ┌─────────────┐                               │
│  │  Database   │ PostgreSQL                    │
│  │ (Postgres)  │                               │
│  └─────────────┘                               │
│                                                 │
│  Principais Camadas Backend:                   │
│  • Controller → Service → Repository → DB      │
└─────────────────────────────────────────────────┘
```

**Mencionar:**
- Padrão MVC adaptado
- DTOs para comunicação
- Exception handlers globais
- Configuração de segurança centralizada

---

### 💻 SLIDE 6-8: Demonstração do Protótipo (3 minutos)

**[Luiz Eduardo - Frontend / Antonio Joaquim - Backend]** *(compartilhar tela)*

> *"Agora vamos demonstrar o sistema funcionando. Vou simular dois fluxos: um cliente fazendo uma compra e um administrador gerenciando produtos."*

#### 🛒 **Parte 1: Fluxo do Cliente (1m30s)**

**Ações ao vivo:**
1. Abrir `http://localhost:5173`
2. Navegar pela home, mostrar catálogo
   - *"Aqui temos a página inicial com todos os produtos carregados do banco via API REST"*
3. Adicionar 2-3 produtos ao carrinho
   - *"Ao clicar em 'Adicionar', o produto vai para o carrinho e o contador atualiza"*
4. Clicar no ícone do carrinho
   - *"Aqui vemos todos os itens, com opções de ajustar quantidade ou remover"*
5. Ajustar quantidade de um item
   - *"Observe que o total recalcula automaticamente"*
6. Clicar em "Finalizar Compra"
   - *"Como não estou logado, sou redirecionado para o login"*
7. Fazer login (usar credenciais de teste)
   - *"Após autenticação, recebo um token JWT que valida minhas requisições"*
8. Confirmar compra
   - *"Pedido criado com sucesso! Carrinho limpo automaticamente"*

**Frase de transição:**
> *"Agora vou mostrar o lado administrativo."*

#### ⚙️ **Parte 2: Fluxo do Administrador (1m30s)**

**Ações ao vivo:**
1. Fazer logout e login como admin
   - Email: `admin@loja.com` / Senha: `admin123`
   - *"Ao logar como admin, sou direcionado para o painel de gerenciamento"*
2. Navegar até "Adicionar Produto"
3. Preencher formulário (nome, preço, descrição, etc.)
   - *"Todos os campos são validados antes de salvar"*
4. Salvar e verificar produto no catálogo
   - *"Produto criado aparece imediatamente na loja"*
5. Editar um produto existente
   - *"Posso alterar preço, estoque ou qualquer informação"*
6. Excluir um produto
   - *"Sistema pede confirmação antes de remover permanentemente"*

**Frase de encerramento:**
> *"Como vimos, o sistema atende tanto o fluxo de compra quanto o de gestão de forma integrada."*

---

### 📊 SLIDE 9-10: Processo de Desenvolvimento (1m30s)

**[Samuel Saturno - Database Specialist / Francisco Lailson - Scrum Master]**

> *"Nosso processo seguiu metodologia ágil, com backlog priorizado e entregas incrementais, coordenado pelo Scrum Master da equipe."*

**Pontos a cobrir:**

**Metodologia:**
- **Scrum** aplicado durante o desenvolvimento (coordenado por Francisco Lailson)
- Organização em épicos e histórias de usuário
- Priorização MoSCoW (Must, Should, Could, Won't)
- Desenvolvimento iterativo (MVP → melhorias)
- Reuniões de alinhamento e divisão clara de responsabilidades por especialidade

**Épicos Implementados:**
1. ✅ **Catálogo de Produtos** (visualização, detalhes)
2. ✅ **Carrinho de Compras** (adicionar, remover, ajustar)
3. ✅ **Autenticação** (login cliente/admin, JWT)
4. ✅ **Gerenciamento Admin** (CRUD completo)
5. 🟡 **Finalização de Compras** (checkout básico)

**Histórias de Destaque (exemplos):**
- *"Como cliente, quero adicionar produtos ao carrinho para comprá-los depois"* ✅
- *"Como admin, quero editar informações de produtos para manter catálogo atualizado"* ✅
- *"Como cliente, quero buscar produtos por nome para encontrar rapidamente"* ⏳

**Slide sugerido:**
```
┌──────────────────────────────────────────────┐
│  📊 Backlog & Desenvolvimento                │
│                                              │
│  Épicos (8 total):                           │
│  ✅ Catálogo de Produtos                    │
│  ✅ Carrinho de Compras                     │
│  ✅ Autenticação                            │
│  ✅ Gerenciamento Admin                     │
│  🟡 Finalização de Compras (parcial)        │
│  ✅ Experiência do Usuário (implementado)   │
│  ✅ Segurança (implementado)                │
│  ⏳ Testes Automatizados (planejado)        │
│                                              │
│  Histórias Implementadas: 10/13              │
│  Cobertura MVP: ~77%                         │
└──────────────────────────────────────────────┘
```

**Mencionar:**
- Backlog completo disponível em `/docs/backlog.md`
- Histórias de usuário detalhadas com critérios claros
- Critérios de aceitação para cada funcionalidade

---

### 🎓 SLIDE 11: Lições Aprendidas e Desafios (1 minuto)

**[Antonio Nogueira - Integração]**

> *"Todo projeto traz aprendizados. Aqui estão os principais desafios que enfrentamos, especialmente na integração entre frontend e backend, e como os superamos."*

**Desafios Técnicos:**
1. **Integração Frontend-Backend:**
   - *Problema:* CORS bloqueava requisições inicialmente
   - *Solução:* Configuração adequada no Spring Security

2. **Autenticação JWT:**
   - *Problema:* Token não persistia entre reloads
   - *Solução:* localStorage para salvar JWT no frontend

3. **Gerenciamento de Estado do Carrinho:**
   - *Problema:* Sincronização entre frontend e backend
   - *Solução:* API dedicada para operações de carrinho

4. **Validações:**
   - *Problema:* Validação duplicada (front + back)
   - *Solução:* DTOs com Bean Validation, frontend replica básico

**Aprendizados Principais:**
- Importância de separação de responsabilidades
- Valor de documentação técnica (arquitetura, backlog)
- Testes automatizados poupam tempo (não implementados totalmente, mas aprendido)
- Comunicação entre time é crucial

**Slide sugerido:**
```
┌──────────────────────────────────────────────┐
│  🎓 Lições Aprendidas                        │
│                                              │
│  Desafios:                                   │
│  • Sincronização front-back (CORS, estado)  │
│  • Segurança (JWT, roles, validações)       │
│  • Responsividade cross-device              │
│                                              │
│  Superações:                                 │
│  ✓ Documentação arquitetural sólida         │
│  ✓ Backlog bem estruturado                  │
│  ✓ Comunicação frequente do time            │
│  ✓ Prototipagem iterativa                   │
│                                              │
│  Próximos Passos:                            │
│  → Testes automatizados (JUnit, Jest)       │
│  → CI/CD pipeline                            │
│  → Busca e filtros avançados                │
│  → Integração com gateway de pagamento      │
└──────────────────────────────────────────────┘
```

---

### 🏁 SLIDE 12: Conclusão (1 minuto)

**[Francisco Lailson]** *(todos aparecem em tela se possível)*

> *"Para concluir, conseguimos entregar um MVP funcional que atende os requisitos principais de um e-commerce moderno, aplicando os conceitos aprendidos na disciplina de Engenharia de Software."*

**Recapitular:**
- ✅ Sistema completo (frontend + backend + banco)
- ✅ Autenticação segura com JWT
- ✅ Funcionalidades essenciais implementadas
- ✅ Código organizado e documentado
- ✅ Protótipo navegável e testável

**Impacto:**
- Aprendizado técnico profundo em stack full-stack
- Experiência com metodologia ágil e trabalho em equipe
- Projeto pode ser expandido para uso real

**Chamada Final:**
> *"Todo o código está disponível no GitHub, com documentação completa de arquitetura, backlog detalhado e instruções de execução. Obrigado pela atenção! Estamos prontos para perguntas."*

**Slide sugerido:**
```
┌──────────────────────────────────────────────┐
│  🏁 Obrigado!                                │
│                                              │
│  🛍️ Loja de Variedades                      │
│  Sistema de E-commerce Full Stack            │
│                                              │
│  📦 Entregáveis:                             │
│  ✓ Código-fonte completo (GitHub)           │
│  ✓ Documentação técnica (/docs)             │
│  ✓ Backlog com histórias de usuário         │
│  ✓ Protótipo navegável funcional            │
│  ✓ Apresentação e demo ao vivo              │
│                                              │
│  🔗 Links:                                   │
│  GitHub: github.com/Samuel-Saturno/...      │
│  Docs: /docs/arquitetura.md                 │
│  Backlog: /docs/backlog.md                  │
│                                              │
│  Perguntas? 🤔                               │
└──────────────────────────────────────────────┘
```

---

## ❓ Perguntas Previstas e Respostas (5 minutos)

### Q1: Por que escolheram Spring Boot e não Node.js no backend?

**Resposta:**
> *"Optamos por Spring Boot porque oferece um ecossistema maduro para aplicações empresariais, com Spring Security para autenticação robusta, Spring Data JPA para facilitar persistência, e suporte nativo a JWT. Além disso, Java 17 traz performance e recursos modernos. Para um e-commerce que precisa de transações e segurança, Spring Boot é uma escolha sólida."*

---

### Q2: Como garantem a segurança das senhas dos usuários?

**Resposta:**
> *"Usamos BCrypt para hash de senhas antes de salvar no banco. Nunca armazenamos senhas em texto plano. O BCrypt aplica salt automático e é computacionalmente caro, dificultando ataques de força bruta. Além disso, as senhas trafegam via HTTPS em produção (não configurado em dev local, mas obrigatório em produção)."*

---

### Q3: O sistema está pronto para produção?

**Resposta:**
> *"Não completamente. Trata-se de um MVP funcional para demonstração acadêmica. Para produção, seriam necessários: testes automatizados (unitários e integração), integração real com gateway de pagamento, ambiente de staging, CI/CD, monitoramento (logs, métricas), configuração de HTTPS, tratamento de concorrência no estoque, e políticas de backup. Mas a arquitetura está preparada para essas melhorias."*

---

### Q4: Como lidam com concorrência no estoque? (Ex: dois clientes comprando o último item)

**Resposta:**
> *"Atualmente, a validação de estoque é básica. Para produção, implementaríamos controle de concorrência pessimista (lock no banco) ou otimista (versioning). Uma abordagem seria usar transações isoladas e decrementar estoque atomicamente no momento da confirmação do pedido, não ao adicionar no carrinho. Também poderíamos usar fila de mensagens (RabbitMQ) para processar pedidos sequencialmente."*

---

### Q5: Por que não implementaram testes automatizados?

**Resposta:**
> *"Por questão de priorização no cronograma. Focamos em entregar as funcionalidades core do MVP primeiro. Testes estão no backlog como prioridade alta para próximas iterações. Reconhecemos a importância: testes unitários validam lógica de negócio isoladamente, e testes E2E garantem fluxos críticos. Para um projeto real, aplicaríamos TDD desde o início."*

---

### Q6: Como funciona o sistema de autenticação JWT?

**Resposta:**
> *"Quando o usuário faz login, o backend valida credenciais. Se corretas, gera um token JWT assinado digitalmente contendo claims (id do usuário, role, expiração). Frontend armazena esse token no localStorage e o envia no header Authorization de toda requisição subsequente. Backend valida assinatura e extrai dados do token para autorizar acesso. Token expira em 24h, exigindo novo login. Não há sessão server-side, tornando a solução stateless e escalável."*

---

### Q7: Como o carrinho persiste entre sessões?

**Resposta:**
> *"Carrinho é persistido no banco de dados na tabela `cart_items`, associada ao usuário logado. Quando o usuário adiciona/remove itens, fazemos requisições à API que atualizam o banco. Ao fazer login novamente, o frontend busca os itens do carrinho via API. Assim, mesmo mudando de dispositivo, o carrinho persiste. Para usuários não logados, poderíamos usar localStorage temporariamente até o login."*

---

### Q8: Quais foram os maiores desafios técnicos?

**Resposta:**
> *"Três principais: 1) Configuração inicial do CORS entre frontend (localhost:5173) e backend (localhost:8080) - resolvido com `@CrossOrigin` e configuração no Spring Security. 2) Sincronização do estado do carrinho entre frontend e backend - criamos endpoints dedicados e hooks React para manter consistência. 3) Autenticação com roles - implementar controle de acesso baseado em perfil (admin vs cliente) exigiu configuração cuidadosa no Spring Security e lógica condicional no frontend."*

---

### Q9: Como escalariam o sistema para milhões de usuários?

**Resposta:**
> *"Estratégias principais: 1) Cache distribuído (Redis) para produtos e sessões. 2) CDN para servir frontend e imagens estáticas. 3) Load balancer (NGINX) distribuindo requisições entre múltiplas instâncias do backend. 4) Database replication (read replicas) para consultas pesadas. 5) Separar microsserviços (catálogo, pedidos, pagamentos) com comunicação via mensageria. 6) Kubernetes para orquestração de containers. 7) Observabilidade com Prometheus + Grafana. Mas tudo depende de crescimento gradual e métricas reais de uso."*

---

### Q10: O projeto pode ser expandido para mobile?

**Resposta:**
> *"Sim! Como usamos REST API, o backend já está preparado. Poderíamos criar apps nativos (React Native, Flutter) ou PWA (Progressive Web App) que consomem a mesma API. A lógica de negócio permanece no backend, e apenas a UI seria adaptada para mobile. Inclusive, já testamos responsividade em telas pequenas, então a web atual funciona bem em celulares via browser."*

---

## 🎯 Dicas para a Apresentação

### ✅ Preparação Prévia

1. **Ensaiar cronometragem:** Cada apresentador deve ensaiar sua parte
2. **Testar equipamento:** Projetor, microfone, compartilhamento de tela
3. **Ter backup:** Slides em PDF, vídeo gravado da demo (caso internet falhe)
4. **Credenciais prontas:** Senhas de teste anotadas e fáceis de digitar
5. **Banco populado:** Certifique-se de ter produtos cadastrados para demo

### ✅ Durante a Apresentação

1. **Falar com clareza:** Não correr nas explicações técnicas
2. **Apontar visualmente:** Use cursor/caneta para destacar partes importantes
3. **Evitar jargões excessivos:** Equilibrar profundidade técnica com clareza
4. **Interagir com slides:** Não apenas ler, mas explicar conceitos
5. **Demonstração suave:** Não se apressar, deixar público absorver

### ✅ Após a Apresentação

1. **Responder com confiança:** Se não souber, admita e proponha investigar
2. **Agradecer perguntas:** "Ótima pergunta!" valoriza a participação
3. **Ser objetivo:** Respostas de 30-60 segundos, não monólogos
4. **Mostrar entusiasmo:** Demonstrar que aprenderam e se orgulham do projeto

---

## 📎 Checklist Final

### 1 Dia Antes:
- [ ] Todos os slides finalizados e revisados
- [ ] Ensaio completo com cronômetro
- [ ] Backend e frontend testados e funcionando
- [ ] Banco de dados populado com dados de exemplo
- [ ] Credenciais de teste validadas
- [ ] Backup de slides e vídeo de demo preparados

### 2 Horas Antes:
- [ ] Testar projetor e conexões
- [ ] Abrir aplicação e deixar rodando
- [ ] Fazer login como admin e cliente para testar
- [ ] Preparar água e anotações
- [ ] Respirar fundo e confiar no trabalho feito! 💪

---

## 🎬 Scripts de Fala (Exemplos)

### Abertura Impactante:
> *"Quantos de vocês já compraram algo online na última semana? [pausa para resposta] Hoje vamos mostrar como construímos do zero uma plataforma que torna isso possível para pequenos negócios."*

### Transição para Demo:
> *"Chega de teoria! Vamos ver o sistema funcionando na prática. Eu sou um cliente e quero comprar alguns produtos..."*

### Fechamento Forte:
> *"Em [X] semanas, saímos do papel em branco para um sistema completo e funcional. Mas mais importante que o código, foram os aprendizados sobre arquitetura, trabalho em equipe e entrega de valor. Esse projeto representa não só o fim desta disciplina, mas o início da nossa jornada como desenvolvedores full-stack."*

---

**Boa sorte na apresentação! 🚀**

*Lembre-se: vocês conhecem o projeto melhor que ninguém. Confiem no trabalho feito e aproveitem o momento de mostrar o resultado!*