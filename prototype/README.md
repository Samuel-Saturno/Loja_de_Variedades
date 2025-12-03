# 🚀 Protótipo Navegável - Loja de Variedades

Este diretório contém informações sobre como acessar e testar o protótipo funcional do sistema.

---

## 🌐 Link do Protótipo

**Acesso Local:** http://localhost:5173

> **Nota:** O protótipo roda localmente em ambiente de desenvolvimento. Para acessá-lo, siga as instruções de execução abaixo.

---

## ⚡ Como Executar o Protótipo

### Pré-requisitos
- Node.js 18+ instalado
- Backend rodando em `http://localhost:8080`

### Passo a Passo

1. **Navegue até a pasta do frontend:**
   ```bash
   cd lojadevariedades-front
   ```

2. **Instale as dependências (primeira vez):**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:5173
   ```

---

## 🧪 Cenários de Teste

### 1. Fluxo do Cliente (Compra Completa)

```
┌─────────────────────────────────────────────────────────────┐
│ CENÁRIO: Cliente realiza uma compra                         │
└─────────────────────────────────────────────────────────────┘

1. Acesse a página inicial (Home)
2. Navegue pelo catálogo de produtos
3. Clique em "Adicionar ao Carrinho" em 2-3 produtos
4. Clique no ícone do carrinho (topo direito)
5. Revise os itens, ajuste quantidades se necessário
6. Clique em "Finalizar Compra"
7. Se não estiver logado, será redirecionado para login
8. Faça login ou cadastre-se
9. Confirme a compra
10. Visualize mensagem de sucesso

✅ Resultado esperado: Pedido criado, carrinho esvaziado
```

### 2. Fluxo do Administrador (Gerenciamento)

```
┌─────────────────────────────────────────────────────────────┐
│ CENÁRIO: Admin gerencia produtos                            │
└─────────────────────────────────────────────────────────────┘

1. Acesse a página de login
2. Entre com credenciais de administrador:
   - Email: admin@loja.com
   - Senha: admin123
3. Após login, clique em "Gerenciar" ou "Admin"
4. Teste as operações:

   a) ADICIONAR PRODUTO:
      - Clique em "Adicionar Produto"
      - Preencha: nome, descrição, preço, estoque, categoria, URL da imagem
      - Salve e verifique no catálogo

   b) EDITAR PRODUTO:
      - Na lista de produtos, clique em "Editar"
      - Modifique algum campo (ex: preço)
      - Salve e verifique alteração

   c) EXCLUIR PRODUTO:
      - Clique em "Excluir" em um produto
      - Confirme a exclusão
      - Verifique que sumiu do catálogo

✅ Resultado esperado: Todas operações CRUD funcionando
```

### 3. Teste de Carrinho de Compras

```
┌─────────────────────────────────────────────────────────────┐
│ CENÁRIO: Manipulação do carrinho                            │
└─────────────────────────────────────────────────────────────┘

1. Adicione 3 produtos diferentes ao carrinho
2. Acesse a página do carrinho
3. Teste os controles:
   - Aumentar quantidade de um produto (botão +)
   - Diminuir quantidade de outro (botão -)
   - Remover completamente um item (botão lixeira)
4. Observe o total recalculando automaticamente
5. Teste "Limpar Carrinho" (se disponível)

✅ Resultado esperado: Valores corretos, mudanças persistem
```

---

## 🎯 Funcionalidades Implementadas

### ✅ Cliente
- [x] Visualizar catálogo de produtos
- [x] Ver detalhes de produtos (nome, preço, imagem)
- [x] Adicionar produtos ao carrinho
- [x] Visualizar carrinho com itens
- [x] Ajustar quantidades no carrinho
- [x] Remover itens do carrinho
- [x] Finalizar compra (checkout básico)
- [x] Login e autenticação
- [x] Logout

### ✅ Administrador
- [x] Login com perfil admin
- [x] Criar novos produtos
- [x] Editar produtos existentes
- [x] Excluir produtos
- [x] Visualizar painel administrativo

### 🟡 Funcionalidades Parciais
- [x] Validação de estoque (implementação básica)
- [x] Feedback visual de ações (pode melhorar)

### ⏳ Não Implementado (Backlog)
- [ ] Cadastro de novos clientes
- [ ] Busca de produtos
- [ ] Filtros por categoria
- [ ] Histórico de pedidos
- [ ] Recuperação de senha
- [ ] Sistema de avaliações

---

## 🎨 Preview das Telas

### Página Inicial (Home)
```
┌────────────────────────────────────────────────────────┐
│  [Logo] Loja de Variedades          [Carrinho] [Login] │
├────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐ │
│  │ [IMG]   │  │ [IMG]   │  │ [IMG]   │  │ [IMG]   │ │
│  │ Produto │  │ Produto │  │ Produto │  │ Produto │ │
│  │ R$ 99   │  │ R$ 149  │  │ R$ 79   │  │ R$ 199  │ │
│  │[Comprar]│  │[Comprar]│  │[Comprar]│  │[Comprar]│ │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘ │
│                                                         │
│  [...mais produtos...]                                 │
└────────────────────────────────────────────────────────┘
```

### Carrinho de Compras
```
┌────────────────────────────────────────────────────────┐
│  Meu Carrinho (3 itens)                                │
├────────────────────────────────────────────────────────┤
│                                                         │
│  [IMG] Produto A    Qtd: [-] 2 [+]    R$ 198,00  [🗑️]│
│  [IMG] Produto B    Qtd: [-] 1 [+]    R$ 149,00  [🗑️]│
│  [IMG] Produto C    Qtd: [-] 3 [+]    R$ 297,00  [🗑️]│
│                                                         │
│  ───────────────────────────────────────────────────   │
│                          TOTAL:      R$ 644,00         │
│                                                         │
│              [Continuar Comprando] [Finalizar Compra]  │
└────────────────────────────────────────────────────────┘
```

### Painel Admin
```
┌────────────────────────────────────────────────────────┐
│  Painel Administrativo                       [Sair]    │
├────────────────────────────────────────────────────────┤
│                                                         │
│  [+ Adicionar Produto]  [📊 Estatísticas]             │
│                                                         │
│  Lista de Produtos:                                    │
│                                                         │
│  ID  │ Nome        │ Preço    │ Estoque │ Ações       │
│  ───────────────────────────────────────────────────   │
│  1   │ Produto A   │ R$ 99    │ 50      │ [✏️] [🗑️] │
│  2   │ Produto B   │ R$ 149   │ 23      │ [✏️] [🗑️] │
│  3   │ Produto C   │ R$ 79    │ 0       │ [✏️] [🗑️] │
│                                                         │
└────────────────────────────────────────────────────────┘
```

---

## 🔑 Credenciais de Teste

### Usuário Cliente
```
Email: cliente@teste.com
Senha: cliente123
```

### Usuário Administrador
```
Email: admin@loja.com
Senha: admin123
```

> **Nota:** Estas credenciais devem estar pré-cadastradas no banco de dados. Verifique o script de inicialização em `/loja-variedades-back/src/main/resources/db/migration/V1__init.sql`

---

## 🐛 Problemas Conhecidos

1. **Validação de estoque incompleta**: Sistema permite adicionar mais itens ao carrinho do que há em estoque
2. **Feedback visual limitado**: Alguns erros de API não mostram mensagens claras
3. **Sem persistência de carrinho**: Carrinho é limpo ao fazer logout
4. **Imagens externas**: URLs de imagens podem quebrar se links externos ficarem indisponíveis

---

## 🔧 Configuração de Desenvolvimento

### Variáveis de Ambiente (Frontend)

Crie um arquivo `.env` em `lojadevariedades-front/`:

```env
VITE_API_BASE_URL=http://localhost:8080
VITE_API_TIMEOUT=10000
```

### Hot Reload

O Vite oferece hot module replacement (HMR). Mudanças em arquivos `.jsx`, `.css` refletem instantaneamente no navegador.

---

## 📱 Responsividade

O protótipo foi testado nas seguintes resoluções:

- 📱 Mobile: 375px (iPhone SE)
- 📱 Tablet: 768px (iPad)
- 💻 Desktop: 1920px (Full HD)

### Teste de Responsividade

1. Abra o DevTools (F12)
2. Ative o modo de dispositivo (Ctrl+Shift+M)
3. Teste diferentes resoluções
4. Verifique que:
   - Menu hamburguer aparece em mobile
   - Cards de produtos se reorganizam
   - Carrinho mantém usabilidade

---

## 🚀 Build para Produção

Para gerar build otimizado:

```bash
cd lojadevariedades-front
npm run build
```

Arquivos gerados em `dist/` podem ser servidos estaticamente ou integrados ao backend em `src/main/resources/static/`.

---

## 📞 Suporte

Para problemas com o protótipo:
1. Verifique se backend está rodando (`http://localhost:8080/api/products` deve retornar JSON)
2. Limpe cache do navegador (Ctrl+Shift+Delete)
3. Verifique console do navegador (F12 → Console) para erros
4. Consulte logs do backend no terminal

---

**Última atualização:** Dezembro 2025  
**Versão do Protótipo:** 1.0 (MVP)