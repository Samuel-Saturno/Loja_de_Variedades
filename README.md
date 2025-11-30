# Loja Variedades - Backend (Spring Boot)


## Instruções rápidas


1. Certifique-se de ter Java 17 e Maven instalados.
2. Configure as variáveis de ambiente ou use o docker-compose.


Para rodar com Docker Compose:


```
docker-compose up --build
```


A API estará em http://localhost:8080


Endpoints principais:
- POST /api/auth/register
- POST /api/auth/login
- GET /api/products
- GET /api/products/{id}
- CRUD admin: /api/admin/products


Observações:
- Troque `jwt.secret` por uma chave forte em produção.
- Integrações com PSP (pagamentos) devem ser adicionadas conforme seu provedor.