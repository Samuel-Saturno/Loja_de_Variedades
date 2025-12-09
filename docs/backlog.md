# Backlog do Produto - Loja de Variedades

## Visão Geral

Este backlog organiza as funcionalidades do sistema em **8 épicos** e **13 histórias de usuário** cuidadosamente priorizadas para o MVP. Cada história inclui critérios de aceitação claros e status de implementação, equilibrando escopo acadêmico com viabilidade de entrega.

---

## Legenda de Status

- ✅ **Implementado**: Funcionalidade completa e testada
- 🟡 **Parcialmente Implementado**: Funcionalidade básica existe, mas pode ter melhorias
- ⏳ **Planejado**: Não implementado ainda, mas priorizado
- 💡 **Backlog**: Ideia para futuras iterações

---

## Épico 1: Catálogo de Produtos 🛍️

**Objetivo**: Permitir que clientes naveguem e visualizem produtos disponíveis na loja.

### História 1.1: Visualizar Lista de Produtos ✅
**Como** cliente não autenticado  
**Quero** ver todos os produtos disponíveis na página inicial  
**Para** conhecer o catálogo e decidir o que comprar

**Critérios de Aceitação:**
- [ ] A página inicial exibe cards de produtos com imagem, nome e preço
- [ ] Produtos são carregados do backend via API REST
- [ ] Se não houver produtos, exibe mensagem "Nenhum produto disponível"
- [ ] Layout responsivo funciona em mobile e desktop

**Prioridade:** Alta  
**Status:** ✅ Implementado

---

### História 1.2: Ver Detalhes do Produto 🟡
**Como** cliente interessado  
**Quero** clicar em um produto e ver descrição completa, estoque e categoria  
**Para** tomar uma decisão informada de compra

**Critérios de Aceitação:**
- [x] Cards de produto mostram nome, preço, imagem e categoria
- [x] Sistema de categorias implementado (6 categorias)
- [x] Filtro por categoria funcional
- [ ] Modal com descrição completa (planejado para v2.0)
- [x] Mostra categoria do produto
- [x] Botão "Adicionar ao Carrinho" visível

**Prioridade:** Média  
**Status:** 🟡 Parcialmente Implementado (categorias funcionam, falta modal de detalhes)

---

## Épico 2: Carrinho de Compras 🛒

**Objetivo**: Gerenciar itens que o cliente deseja comprar antes de finalizar o pedido.

### História 2.1: Adicionar Produto ao Carrinho ✅
**Como** cliente navegando  
**Quero** clicar em "Adicionar ao Carrinho" em um produto  
**Para** guardá-lo para compra posterior

**Critérios de Aceitação:**
- [ ] Botão "Adicionar ao Carrinho" disponível em cada produto
- [ ] Ao clicar, produto é adicionado (quantidade = 1 por padrão)
- [ ] Feedback visual (toast/notificação) confirma adição
- [ ] Ícone do carrinho atualiza contagem de itens

**Prioridade:** Alta  
**Status:** ✅ Implementado

---

### História 2.2: Visualizar e Gerenciar Carrinho ✅
**Como** cliente que adicionou produtos  
**Quero** acessar uma página de carrinho e ajustar quantidades  
**Para** revisar e modificar meus itens antes de finalizar a compra

**Critérios de Aceitação:**
- [ ] Página `/cart` lista todos os itens com imagem, nome, quantidade e preço unitário
- [ ] Exibe subtotal de cada item (preço × quantidade)
- [ ] Botões "+", "-" para ajustar quantidades
- [ ] Botão "Remover" para excluir itens
- [ ] Mostra total geral do carrinho
- [ ] Botão "Finalizar Compra" visível

**Prioridade:** Alta  
**Status:** ✅ Implementado

---

## Épico 3: Autenticação e Perfis 🔐

**Objetivo**: Controlar acesso ao sistema com diferentes perfis (cliente e administrador).

### História 3.1: Login com Perfis Diferenciados ✅
**Como** usuário (cliente ou administrador)  
**Quero** fazer login com email e senha  
**Para** acessar funcionalidades específicas do meu perfil

**Critérios de Aceitação:**
- [ ] Página `/login` com campos de email e senha
- [ ] Validação no frontend (email válido, senha não vazia)
- [ ] Ao submeter, chama API `/auth/login`
- [ ] Backend identifica role (ADMIN ou USER)
- [ ] Se ADMIN, redireciona para `/manage` com NavbarAdmin
- [ ] Se USER, redireciona para home com navbar padrão
- [ ] Se credenciais incorretas, exibe mensagem de erro
- [ ] JWT armazenado no localStorage

**Prioridade:** Alta  
**Status:** ✅ Implementado

---

### História 3.2: Logout Seguro ✅
**Como** usuário autenticado  
**Quero** fazer logout  
**Para** sair da minha conta com segurança

**Critérios de Aceitação:**
- [ ] Botão "Sair" ou "Logout" na navbar
- [ ] Ao clicar, limpa token JWT do localStorage
- [ ] Redireciona para página inicial
- [ ] Usuário perde acesso a rotas protegidas

**Prioridade:** Média  
**Status:** ✅ Implementado

---

## Épico 4: Gerenciamento de Produtos (Admin) ⚙️

**Objetivo**: Permitir que administradores gerenciem o catálogo de produtos.

### História 4.1: CRUD Completo de Produtos ✅
**Como** administrador  
**Quero** criar, editar e excluir produtos  
**Para** gerenciar o catálogo da loja

**Critérios de Aceitação:**
- [ ] Página `/add-product` com formulário (nome, descrição, preço, estoque, categoria, imagem)
- [ ] Validação: preço > 0, estoque >= 0, campos obrigatórios preenchidos
- [ ] Página `/edit-product/:id` com formulário pré-preenchido
- [ ] Página `/delete-product` lista produtos com botão "Excluir"
- [ ] Modal de confirmação antes de excluir
- [ ] Mudanças refletem imediatamente no catálogo
- [ ] Rotas protegidas (apenas ADMIN)

**Prioridade:** Alta  
**Status:** ✅ Implementado

---

### História 4.2: Painel de Gerenciamento ✅
**Como** administrador  
**Quero** acessar um painel central com links para gestão  
**Para** navegar facilmente entre funcionalidades administrativas

**Critérios de Aceitação:**
- [ ] Página `/manage` acessível apenas para ADMIN
- [ ] Links para adicionar, editar e excluir produtos
- [ ] NavbarAdmin com menu administrativo
- [ ] Estatísticas básicas (número de produtos)

**Prioridade:** Média  
**Status:** ✅ Implementado

---

## Épico 5: Finalização de Compras 💳

**Objetivo**: Processar pedidos e confirmar compras de clientes.

### História 5.1: Checkout Básico 🟡
**Como** cliente com itens no carrinho  
**Quero** clicar em "Finalizar Compra"  
**Para** confirmar meu pedido

**Critérios de Aceitação:**
- [ ] Botão "Finalizar Compra" na página do carrinho
- [ ] Sistema valida que usuário está autenticado
- [ ] Modal ou página com resumo do pedido (itens, total)
- [ ] Ao confirmar, cria registro na tabela `orders`
- [ ] Carrinho é esvaziado após confirmação
- [ ] Exibe mensagem de sucesso com número do pedido

**Prioridade:** Alta  
**Status:** 🟡 Parcialmente Implementado (lógica básica existe, falta validação completa)

---

## Épico 6: Experiência do Usuário 🎨

**Objetivo**: Garantir usabilidade e design responsivo.

### História 6.1: Interface Responsiva e Feedback Visual ✅
**Como** usuário (mobile ou desktop)  
**Quero** que o site funcione bem em qualquer dispositivo e me dê feedback visual  
**Para** ter uma experiência fluida e intuitiva

**Critérios de Aceitação:**
- [ ] Layout se adapta a telas de 320px até 1920px
- [ ] Menu hamburguer em mobile
- [ ] Cards de produtos empilham em telas pequenas
- [ ] Botões têm tamanho adequado para toque
- [ ] Loading spinner ao carregar produtos
- [ ] Feedback visual ao adicionar ao carrinho
- [ ] Mensagens de erro claras quando algo falha

**Prioridade:** Alta  
**Status:** ✅ Implementado (responsividade completa, feedback básico)

---

## Épico 7: Segurança e Performance 🔒

**Objetivo**: Garantir proteção de dados e performance adequada.

### História 7.1: Segurança e Autenticação Robusta ✅
**Como** desenvolvedor  
**Quero** implementar autenticação segura e proteções contra vulnerabilidades  
**Para** garantir integridade dos dados e acesso controlado

**Critérios de Aceitação:**
- [ ] JWT com expiração em 24h
- [ ] Senhas hash com BCrypt
- [ ] Rotas admin protegidas (401/403 para não autorizados)
- [ ] JPA usa prepared statements (proteção SQL Injection nativa)
- [ ] CORS configurado corretamente
- [ ] Logout limpa tokens e sessões

**Prioridade:** Crítica  
**Status:** ✅ Implementado

**Nota:** Melhorias futuras incluem rate limiting e cache (Redis).

---

## Épico 8: Categorização de Produtos 🏷️

**Objetivo**: Organizar produtos em categorias para facilitar a navegação.

### História 8.1: Filtrar Produtos por Categoria ✅
**Como** cliente navegando  
**Quero** filtrar produtos por categoria (Perfumes, Eletrônicos, etc)  
**Para** encontrar mais rapidamente o que procuro

**Critérios de Aceitação:**
- [x] Menu de categorias na navbar
- [x] Ao selecionar uma categoria, mostra apenas produtos daquela categoria
- [x] Opção "Todos" mostra todos os produtos
- [x] Backend filtra corretamente por category_id
- [x] 6 categorias criadas: Perfumes, Eletrônicos, Plásticos, Alumínios, Calçados, Higiene
- [x] Produtos associados às categorias corretas no banco

**Prioridade:** Alta  
**Status:** ✅ Implementado

**Detalhes Técnicos:**
- Tabela `categories` criada no banco
- Campo `category_id` adicionado em `products` como chave estrangeira
- Endpoint `/api/products?categoryId=X` filtra por categoria
- Frontend envia categoryId ao buscar produtos
- Testado com curl: cada categoria retorna produtos corretos

---

## Épico 9: Testes e Qualidade 🧪

**Objetivo**: Garantir confiabilidade através de testes.

### História 9.1: Testes Automatizados ⏳
**Como** desenvolvedor  
**Quero** cobertura de testes unitários e E2E  
**Para** garantir que o sistema funciona conforme esperado

**Critérios de Aceitação:**
- [ ] Testes unitários backend (ProductService, AuthService)
- [ ] Cobertura mínima de 70% no backend
- [ ] Testes E2E com Cypress para fluxos críticos (login cliente/admin, compra)
- [ ] Testes rodam com `mvn test` e `npm run test:e2e`

**Prioridade:** Média  
**Status:** ⏳ Planejado (MVP focou em testes manuais documentados)

---

## Priorização (MoSCoW)

### Must Have (Essencial para MVP)
- ✅ 1.1 Visualizar lista de produtos
- ✅ 1.2 Ver detalhes do produto
- ✅ 2.1 Adicionar produtos ao carrinho
- ✅ 2.2 Visualizar e gerenciar carrinho
- ✅ 3.1 Login com perfis diferenciados (Cliente/Admin)
- ✅ 3.2 Logout seguro
- ✅ 4.1 CRUD completo de produtos (Admin)
- 🟡 5.1 Checkout básico

### Should Have (Importante, mas não bloqueante)
- 🟡 4.2 Painel de gerenciamento (Admin)
- ✅ 6.1 Interface responsiva e feedback visual
- ✅ 7.1 Segurança e autenticação robusta

### Could Have (Desejável)
- ⏳ 8.1 Testes automatizados (unitários e E2E)

### Won't Have (Não será feito nesta versão)
- Buscar/filtrar produtos avançado
- Cadastro de cliente e recuperação de senha
- Histórico de pedidos completo
- Gateway de pagamento
- Dark mode e acessibilidade avançada
- Rate limiting e cache Redis

---

## 👥 Divisão de Responsabilidades no Time

### **Antonio Joaquim de Lira Neto** - Backend Developer
**Responsável por:**
- Implementação de Controllers REST (ProductController, AuthController, CartController)
- Desenvolvimento dos Services (lógica de negócio)
- Configuração Spring Security e JWT
- Tratamento de exceções e validações
- APIs REST com documentação

**Histórias principais:**
- História 3.1: Autenticação JWT e controle de acesso
- História 4.1: CRUD completo de produtos (Admin)
- História 2.1-2.2: Gerenciamento de carrinho backend

### **Samuel de Almeida Saturno** - Database Specialist
**Responsável por:**
- Modelagem do banco de dados PostgreSQL
- Scripts Flyway de migração
- Otimização de queries
- Definição de entidades JPA e relacionamentos
- Integridade referencial e constraints

**Histórias principais:**
- História 7.1: Estrutura de segurança (SQL Injection protection via JPA)
- Todas as histórias (modelagem e persistência)
- Dados de seed para testes

### **Antonio Nogueira da Silva Neto** - Integration (Backend/Frontend)
**Responsável por:**
- Integração entre frontend e backend via API REST
- Configuração CORS
- Sincronização de estado (carrinho, autenticação)
- apiClient.js (axios configurado)
- Resolução de problemas de comunicação

**Histórias principais:**
- História 2.2: Integração completa do carrinho
- História 3.1: Fluxo de autenticação end-to-end
- História 7.1: Comunicação segura com JWT

### **Luiz Eduardo de Almeida Rodrigues** - Frontend Developer
**Responsável por:**
- Desenvolvimento de componentes React
- Páginas e rotas (React Router)
- Estilização CSS responsiva
- Experiência do usuário
- Feedback visual (toasts, loaders)

**Histórias principais:**
- História 1.1-1.2: Interface do catálogo
- História 2.2: Páginas de carrinho e checkout
- História 4.2: Painel administrativo UI
- História 6.1: Design responsivo e feedback visual

### **Francisco Lailson de Almeida** - Scrum Master & Apresentador
**Responsável por:**
- Coordenação da equipe (metodologia Scrum)
- Priorização do backlog
- Facilitação de reuniões
- Documentação do projeto
- Preparação da apresentação final
- Comunicação com stakeholders (professora)

**Histórias principais:**
- Organização de todos os épicos
- Definição de critérios de aceitação
- Documentação (README, arquitetura, pitch)
- Retrospectivas e melhorias contínuas

---

## Notas de Retrospectiva

**O que funcionou bem:**
- ✅ **Divisão clara de responsabilidades** por especialidade (backend, frontend, database, integração)
- ✅ **Scrum Master dedicado** facilitou organização e comunicação
- ✅ Arquitetura separada permitiu trabalho paralelo
- ✅ Spring Boot acelerou desenvolvimento de API REST
- ✅ JWT simplificou autenticação stateless
- ✅ Reuniões regulares mantiveram alinhamento

**O que pode melhorar:**
- 🔄 Adicionar testes automatizados desde o início
- 🔄 Melhorar tratamento de erros no frontend
- 🔄 Documentar API com Swagger/OpenAPI
- 🔄 Implementar CI/CD pipeline
- 🔄 Pair programming em integrações complexas

**Desafios Enfrentados e Soluções:**
1. **CORS blocking requests** → Antonio Nogueira configurou CORS adequadamente
2. **JWT storage** → Luiz Eduardo implementou localStorage no frontend
3. **Database migrations** → Samuel criou scripts Flyway versionados
4. **Role-based access** → Antonio Joaquim implementou Spring Security roles
5. **Team coordination** → Francisco Lailson aplicou cerimônias Scrum

**Próximos Passos:**
1. Concluir validação de estoque antes de checkout
2. Implementar cadastro de novos clientes
3. Adicionar busca e filtros de produtos
4. Melhorar feedback visual (loaders, toasts)
5. Escrever testes unitários para services críticos
