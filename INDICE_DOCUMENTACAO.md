# 📚 Índice Geral de Documentação - Loja de Variedades

> Guia completo para navegar por toda a documentação do projeto

---

## 🎯 Para Começar Rápido

### Se você é...

**🎓 Avaliador/Professora:**
1. Comece pelo [`RESUMO_EXECUTIVO.md`](./RESUMO_EXECUTIVO.md) (1 página)
2. Leia o [`AVALIACAO.md`](./AVALIACAO.md) para roteiro de avaliação
3. Execute o projeto seguindo [`/prototype/README.md`](./prototype/README.md)

**👨‍💻 Desenvolvedor Novo:**
1. Leia o [`README.md`](./README.md) principal
2. Explore [`/docs/estrutura.md`](./docs/estrutura.md) para entender organização
3. Veja [`/docs/arquitetura.md`](./docs/arquitetura.md) para decisões técnicas

**📊 Product Owner/Scrum Master:**
1. Consulte [`/docs/backlog.md`](./docs/backlog.md) para histórias e épicos
2. Revise retrospectivas no final do backlog

**🎤 Apresentador:**
1. Use [`/docs/pitch.md`](./docs/pitch.md) como roteiro
2. Prepare demo seguindo [`/prototype/README.md`](./prototype/README.md)

---

## 📂 Estrutura de Documentação

### 📄 Raiz do Projeto

#### [`README.md`](./README.md) 🌟 **COMECE AQUI**
**O que é:** Documentação principal do projeto  
**Quando usar:** Primeira visita ao projeto  
**Contém:**
- Visão geral do sistema
- Funcionalidades principais
- Stack tecnológico
- Como executar (backend, frontend, Docker)
- Integrantes do time
- Links para toda documentação

**Tempo de leitura:** 5-7 minutos

---

#### [`RESUMO_EXECUTIVO.md`](./RESUMO_EXECUTIVO.md) ⭐ **RESUMO RÁPIDO**
**O que é:** Resumo de 1 página para impressão/apresentação  
**Quando usar:** Precisa de visão geral rápida  
**Contém:**
- Time e responsabilidades
- Objetivo do sistema
- Stack em tabela
- Estatísticas (histórias, endpoints, LOC)
- Arquitetura ASCII
- Como executar (resumido)

**Tempo de leitura:** 2-3 minutos

---

#### [`AVALIACAO.md`](./AVALIACAO.md) 🎓 **GUIA PARA PROFESSORA**
**O que é:** Roteiro de avaliação completo  
**Quando usar:** Avaliação acadêmica do projeto  
**Contém:**
- Checklist de itens obrigatórios
- Roteiro de teste (15 minutos)
- Critérios de avaliação sugeridos
- Destaques e áreas de melhoria
- Conceitos de ES aplicados
- Ordem sugerida de avaliação

**Tempo de leitura:** 10 minutos

---

#### [`GUIA_INTEGRACAO.md`](./GUIA_INTEGRACAO.md) 🔌 **INTEGRAÇÃO TÉCNICA**
**O que é:** Detalhes técnicos de API e integração  
**Quando usar:** Integrar com sistema ou entender endpoints  
**Contém:**
- Documentação de endpoints REST
- Exemplos de requisições/respostas
- Autenticação JWT
- Códigos de erro

**Tempo de leitura:** 15 minutos

---

### 📁 `/docs/` - Documentação Técnica

#### [`/docs/arquitetura.md`](./docs/arquitetura.md) 🏗️ **ARQUITETURA**
**O que é:** Arquitetura técnica completa  
**Quando usar:** Entender decisões de design e estrutura  
**Contém:**
- Separação de responsabilidades (Frontend/Backend/DB)
- Fluxo básico do sistema com diagramas
- Tecnologias selecionadas (tabelas detalhadas)
- Diagrama de camadas e componentes
- Decisões arquiteturais e trade-offs
- Estrutura de pastas
- Segurança

**Tempo de leitura:** 20 minutos  
**Diagramas:** 4 (fluxo, camadas, componentes, estrutura)

---

#### [`/docs/estrutura.md`](./docs/estrutura.md) 📁 **ESTRUTURA DE PASTAS**
**O que é:** Guia completo da organização do projeto  
**Quando usar:** Navegar código-fonte, entender onde está cada coisa  
**Contém:**
- Árvore completa de diretórios
- Explicação de cada pasta e arquivo
- Responsabilidades de cada camada
- Fluxo de dados com exemplos
- Guias por perfil (backend dev, frontend dev, QA, designer)
- Estatísticas do projeto

**Tempo de leitura:** 25 minutos  
**Ideal para:** Onboarding de novos desenvolvedores

---

#### [`/docs/backlog.md`](./docs/backlog.md) 📊 **BACKLOG & HISTÓRIAS**
**O que é:** Backlog completo do produto  
**Quando usar:** Entender funcionalidades, planejar próximas features  
**Contém:**
- **8 épicos** organizados por tema:
  1. Catálogo de Produtos
  2. Carrinho de Compras
  3. Autenticação e Perfis
  4. Gerenciamento Admin
  5. Finalização de Compras
  6. Experiência do Usuário
  7. Segurança e Performance
  8. Testes e Qualidade
- **13 histórias de usuário** bem estruturadas
- Critérios de aceitação específicos
- Status: ✅ Implementado, 🟡 Parcial, ⏳ Planejado, 💡 Backlog
- Priorização MoSCoW
- Divisão de responsabilidades por membro
- Retrospectivas

**Tempo de leitura:** 40 minutos  
**Ideal para:** Product Owners, Scrum Masters, desenvolvedores planejando trabalho

---

#### [`/docs/pitch.md`](./docs/pitch.md) 🎤 **ROTEIRO DE APRESENTAÇÃO**
**O que é:** Guia completo para apresentação de 10 minutos  
**Quando usar:** Preparar e realizar apresentação final  
**Contém:**
- Cronograma detalhado por minuto
- Scripts de fala para cada seção
- Slides sugeridos (ASCII art)
- Divisão de responsáveis por seção
- Demonstração ao vivo (passo a passo)
- **10 perguntas previstas** com respostas técnicas completas:
  1. Por que Spring Boot?
  2. Segurança de senhas
  3. Pronto para produção?
  4. Concorrência no estoque
  5. Testes automatizados
  6. Como funciona JWT?
  7. Persistência do carrinho
  8. Maiores desafios
  9. Escalabilidade
  10. Expansão mobile
- Dicas de apresentação
- Checklist final

**Tempo de leitura:** 30 minutos  
**Tempo de apresentação:** 10 minutos + 5 Q&A

---

### 📁 `/prototype/` - Protótipo Navegável

#### [`/prototype/README.md`](./prototype/README.md) 🚀 **GUIA DO PROTÓTIPO**
**O que é:** Instruções completas para executar e testar  
**Quando usar:** Executar aplicação, fazer demo, testes  
**Contém:**
- Como executar (passo a passo)
- **3 cenários de teste detalhados:**
  1. Fluxo do Cliente (compra completa)
  2. Fluxo do Administrador (CRUD)
  3. Teste de Carrinho
- Credenciais de teste
- Preview visual das telas (ASCII art)
- Funcionalidades implementadas (checklist)
- Problemas conhecidos
- Teste de responsividade
- Build para produção
- Troubleshooting

**Tempo de leitura:** 15 minutos  
**Tempo de execução:** 5 minutos

---

### 📁 `/scripts/` - Automação

#### [`/scripts/run_presentation.sh`](./scripts/run_presentation.sh) 🎬
**O que é:** Script para iniciar tudo automaticamente  
**Quando usar:** Apresentação, demo rápida  
**Faz:**
- Verifica dependências (Java, Node, PostgreSQL)
- Compila backend
- Prepara frontend
- Inicia ambos os serviços
- Abre navegador automaticamente
- Mostra credenciais e URLs

**Execução:**
```bash
cd scripts
./run_presentation.sh
```

---

#### [`/scripts/stop_services.sh`](./scripts/stop_services.sh) 🛑
**O que é:** Script para parar serviços  
**Quando usar:** Após apresentação/demo  
**Faz:**
- Para backend (PID)
- Para frontend (PID)
- Limpa processos nas portas 8080/5173
- Informa localização dos logs

**Execução:**
```bash
cd scripts
./stop_services.sh
```

---

### 📁 `/lojadevariedades-front/` - Frontend

#### [`/lojadevariedades-front/README.md`](./lojadevariedades-front/README.md)
**O que é:** README específico do frontend  
**Contém:**
- Instruções de instalação
- Como executar (`npm run dev`)
- Scripts disponíveis
- Estrutura de pastas

---

### 📁 `/loja-variedades-back/` - Backend

#### [`/loja-variedades-back/HELP.md`](./loja-variedades-back/HELP.md)
**O que é:** Documentação gerada pelo Spring Boot  
**Contém:**
- Links úteis do Spring
- Referências de documentação

---

## 🗺️ Mapa de Navegação por Persona

### 🎓 Professora Huliane Medeiros

```
1. RESUMO_EXECUTIVO.md (3 min)
   ↓
2. AVALIACAO.md (10 min) - Roteiro de avaliação
   ↓
3. /prototype/README.md (5 min) - Executar sistema
   ↓
4. Testar aplicação (15 min)
   ↓
5. /docs/arquitetura.md (20 min) - Entender decisões
   ↓
6. /docs/backlog.md (10 min) - Folhear histórias
   ↓
7. Assistir apresentação (15 min)
```

**Tempo total:** ~80 minutos

---

### 👨‍💻 Novo Desenvolvedor

```
1. README.md (5 min)
   ↓
2. /docs/estrutura.md (25 min) - Entender organização
   ↓
3. /docs/arquitetura.md (20 min) - Decisões técnicas
   ↓
4. /prototype/README.md (5 min) - Executar localmente
   ↓
5. Explorar código com estrutura em mente
   ↓
6. /docs/backlog.md (10 min) - Ver histórias não implementadas
   ↓
7. GUIA_INTEGRACAO.md (15 min) - Detalhes de API
```

**Tempo total:** ~80 minutos

---

### 📊 Product Owner / Scrum Master

```
1. RESUMO_EXECUTIVO.md (3 min)
   ↓
2. /docs/backlog.md (40 min) - Épicos e histórias completas
   ↓
3. README.md (5 min) - Visão geral
   ↓
4. /docs/arquitetura.md (20 min) - Entender capacidades técnicas
   ↓
5. Testar protótipo (15 min)
   ↓
6. Revisar retrospectivas no backlog
```

**Tempo total:** ~85 minutos

---

### 🎤 Membro do Time Preparando Apresentação

```
1. /docs/pitch.md (30 min) - LER COMPLETO
   ↓
2. /prototype/README.md (15 min) - Praticar demo
   ↓
3. RESUMO_EXECUTIVO.md (3 min) - Números e stats
   ↓
4. Ensaiar cronômetro (20 min)
   ↓
5. Preparar respostas de Q&A (pitch.md tem 10 respostas)
   ↓
6. Testar apresentação completa (15 min)
```

**Tempo total:** ~85 minutos

---

### 🔍 Auditor de Segurança

```
1. /docs/arquitetura.md - Seção 6 (Segurança)
   ↓
2. GUIA_INTEGRACAO.md - Autenticação
   ↓
3. Código: SecurityConfig.java
   ↓
4. Código: JwtUtil.java
   ↓
5. /docs/backlog.md - Épico 7 (Segurança)
```

---

## 📊 Estatísticas da Documentação

```
Total de Arquivos Markdown:      11 arquivos
Total de Linhas de Documentação: ~4.000 linhas
Total de Páginas (A4 estimado):  ~50 páginas

Distribuição:
- README principal:              ~300 linhas
- Resumo Executivo:              ~150 linhas
- Guia de Avaliação:             ~400 linhas
- Arquitetura:                   ~500 linhas
- Estrutura:                     ~700 linhas
- Backlog:                       ~800 linhas
- Pitch (Apresentação):          ~900 linhas
- Guia Protótipo:                ~400 linhas
- Integração:                    ~300 linhas
- Outros:                        ~250 linhas
```

---

## 🎯 Documentos por Prioridade

### 🔴 **OBRIGATÓRIO** (Projeto Final)

1. ✅ **README.md** - Item 1.e (Arquivo README profissional)
2. ✅ **Código-fonte** - Item 1.a (MVP em `/src/`)
3. ✅ **Protótipo navegável** - Item 1.b (instruções em `/prototype/`)
4. ✅ **Arquitetura** - Item 1.c (em `/docs/arquitetura.md`)
5. ✅ **Backlog** - Item 1.d (em `/docs/backlog.md`)
6. ✅ **Apresentação** - Item 2 (roteiro em `/docs/pitch.md`)

### 🟡 **IMPORTANTE** (Melhora Avaliação)

7. ✅ **RESUMO_EXECUTIVO.md** - Facilita avaliação
8. ✅ **AVALIACAO.md** - Roteiro para professora
9. ✅ **Estrutura** - `/docs/estrutura.md`
10. ✅ **Scripts automatizados** - `/scripts/*.sh`

### 🟢 **DIFERENCIAL** (Excelência)

11. ✅ **GUIA_INTEGRACAO.md** - Documentação de API
12. ✅ **INDICE_DOCUMENTACAO.md** - Este arquivo (navegação)
13. ✅ Divisão de responsabilidades no backlog
14. ✅ Q&A com 10 perguntas previstas

---

## 🔗 Links Rápidos

- [README Principal](./README.md)
- [Resumo Executivo](./RESUMO_EXECUTIVO.md)
- [Guia de Avaliação](./AVALIACAO.md)
- [Arquitetura](./docs/arquitetura.md)
- [Estrutura](./docs/estrutura.md)
- [Backlog](./docs/backlog.md)
- [Roteiro Apresentação](./docs/pitch.md)
- [Guia Protótipo](./prototype/README.md)
- [Integração API](./GUIA_INTEGRACAO.md)

---

## 📞 Suporte

**Dúvidas sobre documentação?**  
Contato: Francisco Lailson de Almeida (Scrum Master)

**Repositório:**  
github.com/Samuel-Saturno/Loja_de_Variedades

---

**UFERSA | Engenharia de Software | Prof.ª Huliane Medeiros | 2025.2**
