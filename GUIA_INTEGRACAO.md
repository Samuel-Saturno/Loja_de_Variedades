**Guia de Integração e Operação**

Este documento explica de forma concisa como executar, depurar e entender o sistema "Loja de Variedades" (frontend React/Vite + backend Spring Boot). Inclui: instruções de execução, arquitetura, endpoints, autenticação, como adicionar produtos e passos de solução de problemas comuns.

**Ambiente**
- **Frontend:** `lojadevariedades-front` — React + Vite
- **Backend:** `loja-variedades-back` — Spring Boot 3.1.0 (Java 17), Maven wrapper (`./mvnw`)
- **Banco (dev):** H2 (arquivo local em `loja-variedades-back/data/competicao_db.mv.db`), Flyway para migrações
- **Autenticação:** JWT customizado + filtro `JwtAuthenticationFilter`

**1. Como rodar (modo apresentação / desenvolvimento)**
- Uso rápido (script que automatiza build e start):

  - No diretório raiz do projeto execute:

    ```bash
    chmod +x scripts/run_presentation.sh
    ./scripts/run_presentation.sh
    ```

  - O script faz:
    - `npm run build` dentro de `lojadevariedades-front` (gera `dist/`)
    - copia `dist` para `loja-variedades-back/src/main/resources/static/`
    - `./mvnw package -DskipTests` no backend
    - inicia o JAR repackaged em background e grava PID em `/tmp/loja-presentation.pid` e logs em `/tmp/loja-presentation.log`

  - Parar a aplicação (se iniciada pelo script):

    ```bash
    kill $(cat /tmp/loja-presentation.pid) && rm -f /tmp/loja-presentation.pid
    tail -n 200 /tmp/loja-presentation.log
    ```

**2. Endpoints principais**
- Autenticação:
  - `POST /api/auth/login` — corpo JSON: `{ "email": "...", "password": "..." }` → retorna token JWT.
- Produtos públicos:
  - `GET /api/products` — paginação: `?page=0&size=10` e opcional `?q=termo` e `?categoryId=1`
  - `GET /api/products/{id}`
- Operações admin (precisam de role `ADMIN` + Authorization header `Bearer <token>`):
  - `POST /api/admin/products` — criar produto
  - `PUT /api/admin/products/{id}` — atualizar
  - `DELETE /api/admin/products/{id}` — deletar

**3. Como adicionar produtos**

- Pela interface (recomendado):
  1. Abra `http://localhost:8080` no navegador.
  2. Clique no ícone de perfil / botão `Login`.
  3. Entre com as credenciais dev (seeded durante apresentação):
     - Email: `admin@loja.com`
     - Senha: `admin123`
  4. Depois de logado, navegue até a área de administração / `Manage` ou `Add Product` e use o formulário para criar o produto.

- Via API (curl):
  1. Obter token:

    ```bash
    curl -s -X POST http://localhost:8080/api/auth/login \
      -H 'Content-Type: application/json' \
      -d '{"email":"admin@loja.com","password":"admin123"}'
    # resposta JSON -> campo token
    ```

  2. Criar produto (substitua `TOKEN`):

    ```bash
    curl -i -X POST http://localhost:8080/api/admin/products \
      -H "Content-Type: application/json" \
      -H "Authorization: Bearer TOKEN" \
      -d '{"name":"Produto Demo","description":"Desc","price":19.9,"stockQuantity":10,"imageUrl":"https://via.placeholder.com/150"}'
    ```

  - Resposta esperada: HTTP 200/201 com JSON do objeto criado.

**4. Arquitetura e pontos importantes do código**
- `loja-variedades-back/src/main/java/com/example/loja/config/SecurityConfig.java` — configura CORS, regras de autorização e registra `JwtAuthenticationFilter`. *Removemos* `httpBasic()` para evitar que o navegador exiba prompt de autenticação.
- `JwtAuthenticationFilter.java` — extrai JWT do header `Authorization` e popula `SecurityContext`.
- `AdminUserInitializer.java` — seeder de admin para desenvolvimento (cria/atualiza `admin@loja.com` com senha `admin123`). Remover antes de deploy público.
- `ProductController.java` — endpoints públicos de produtos (`/api/products`).
- Frontend:
  - `lojadevariedades-front/src/api/apiClient.js` — axios client com interceptor para anexar `Authorization: Bearer <token>` (salvo em `localStorage`)
  - `lojadevariedades-front/src/services/productService.js` — serviço que consulta `/api/products` e possui métodos para admin.

**5. Logs e troubleshooting rápido**
- Logs da aplicação (script coloca em): `/tmp/loja-presentation.log`
- Se ver erro H2 lock (`The file is locked`) — solução:
  1. Encontrar PID que segurou o DB: `lsof -nP loja-variedades-back/data/competicao_db.mv.db`
  2. Matar o processo: `kill <PID>` ou `kill -9 <PID>` se necessário
  3. Reiniciar via `./scripts/run_presentation.sh`
- Se o frontend mostrar "Erro ao carregar produtos":
  - Abra DevTools → Network → verifique `GET /api/products` (status e body). 500 indica erro no backend — veja logs em `/tmp/loja-presentation.log`.
  - 401 indica token/autenticação; faça login novamente.

**6. Git / Repositório**
- Branch de integração para apresentação: `presentation-setup` — contém as mudanças de integração e o script de apresentação.
- Fiz push das alterações relevantes e adicionei regras ao `.gitignore` para evitar versionar DB e artefatos gerados.

Comandos úteis:

```bash
# Ver status
git status

# Push do branch local
git push origin presentation-setup

# Criar PR localmente com GitHub CLI (opcional)
gh pr create --base main --head presentation-setup --title "Apresentação: integração front/back" --body "Documentação e script de apresentação"
```

**7. Boas práticas / notas finais**
- Não comitar arquivos binários / DB. Mantenha `loja-variedades-back/data/` no `.gitignore`.
- Antes de publicar em produção remova `AdminUserInitializer` ou altere para não expor credenciais.
- Guarde secrets (jwt.secret) em variáveis de ambiente para produção; para apresentação usamos valores embutidos/dev.

**8. Arquivos e locais importantes**
- Frontend: `lojadevariedades-front/src/`
- Backend principal: `loja-variedades-back/src/main/java/com/example/loja/`
- Script de execução: `scripts/run_presentation.sh`
- Logs de execução: `/tmp/loja-presentation.log`

Se quiser, eu:
- executo um exemplo de `curl` agora para criar um produto de teste e mostro a saída, e
- gero um `DOCUMENTACAO.md` separado com a mesma informação (formatado) para revisão.

---
*Escrevi este guia com os passos que executei e as decisões tomadas para a apresentação. Diga se quer que eu gere um PDF/Markdown adicional ou faça screenshots das telas do frontend.*
