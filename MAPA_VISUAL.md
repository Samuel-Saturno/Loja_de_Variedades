# 🗺️ Mapa Visual da Documentação

Este documento contém diagramas visuais da estrutura de documentação do projeto.

## 📊 Estrutura Geral de Documentação

```mermaid
graph TD
    A[README.md<br/>Início] --> B[RESUMO_EXECUTIVO.md<br/>Visão Rápida]
    A --> C[AVALIACAO.md<br/>Guia Professora]
    A --> D[INDICE_DOCUMENTACAO.md<br/>Navegação Completa]
    
    A --> E[/docs/]
    E --> E1[arquitetura.md<br/>Decisões Técnicas]
    E --> E2[estrutura.md<br/>Organização]
    E --> E3[backlog.md<br/>Épicos & Histórias]
    E --> E4[pitch.md<br/>Apresentação]
    
    A --> F[/prototype/<br/>README.md]
    F --> F1[Cenários de Teste]
    F --> F2[Credenciais]
    
    A --> G[GUIA_INTEGRACAO.md<br/>API Docs]
    
    A --> H[/scripts/]
    H --> H1[run_presentation.sh]
    H --> H2[stop_services.sh]
    
    style A fill:#4CAF50,stroke:#333,color:#fff
    style B fill:#2196F3,stroke:#333,color:#fff
    style C fill:#FF9800,stroke:#333,color:#fff
    style D fill:#9C27B0,stroke:#333,color:#fff
```

## 🎯 Fluxo de Leitura por Persona

### 👨‍🎓 Fluxo da Professora (Avaliação)

```mermaid
graph LR
    A[Início] --> B[RESUMO_EXECUTIVO.md<br/>3 min]
    B --> C[AVALIACAO.md<br/>10 min]
    C --> D[Executar Protótipo<br/>5 min]
    D --> E[Testar Sistema<br/>15 min]
    E --> F[docs/arquitetura.md<br/>20 min]
    F --> G[docs/backlog.md<br/>10 min]
    G --> H[Apresentação<br/>15 min]
    H --> I[Avaliação Completa!]
    
    style A fill:#4CAF50,stroke:#333,color:#fff
    style I fill:#4CAF50,stroke:#333,color:#fff
    style C fill:#FF9800,stroke:#333,color:#fff
    style E fill:#2196F3,stroke:#333,color:#fff
```

### 👨‍💻 Fluxo do Desenvolvedor

```mermaid
graph LR
    A[Início] --> B[README.md<br/>5 min]
    B --> C[docs/estrutura.md<br/>25 min]
    C --> D[docs/arquitetura.md<br/>20 min]
    D --> E[Executar Local<br/>5 min]
    E --> F[Explorar Código]
    F --> G[docs/backlog.md<br/>Histórias não implementadas]
    G --> H[GUIA_INTEGRACAO.md<br/>API Details]
    H --> I[Pronto para Contribuir!]
    
    style A fill:#4CAF50,stroke:#333,color:#fff
    style I fill:#4CAF50,stroke:#333,color:#fff
    style F fill:#2196F3,stroke:#333,color:#fff
```

### 🎤 Fluxo do Apresentador

```mermaid
graph LR
    A[Início] --> B[docs/pitch.md<br/>LER COMPLETO<br/>30 min]
    B --> C[prototype/README.md<br/>Praticar Demo<br/>15 min]
    C --> D[RESUMO_EXECUTIVO.md<br/>Stats<br/>3 min]
    D --> E[Ensaiar com<br/>Cronômetro<br/>20 min]
    E --> F[Preparar Respostas<br/>Q&A<br/>15 min]
    F --> G[Apresentação!]
    
    style A fill:#4CAF50,stroke:#333,color:#fff
    style G fill:#4CAF50,stroke:#333,color:#fff
    style B fill:#FF9800,stroke:#333,color:#fff
    style E fill:#2196F3,stroke:#333,color:#fff
```

## 📚 Hierarquia de Documentos

```mermaid
graph TD
    ROOT[Loja_de_Variedades/]
    
    ROOT --> DOC1[README.md ⭐]
    ROOT --> DOC2[RESUMO_EXECUTIVO.md]
    ROOT --> DOC3[AVALIACAO.md]
    ROOT --> DOC4[INDICE_DOCUMENTACAO.md]
    ROOT --> DOC5[GUIA_INTEGRACAO.md]
    
    ROOT --> DOCS[docs/]
    DOCS --> DOCS1[arquitetura.md]
    DOCS --> DOCS2[estrutura.md]
    DOCS --> DOCS3[backlog.md]
    DOCS --> DOCS4[pitch.md]
    
    ROOT --> PROTO[prototype/]
    PROTO --> PROTO1[README.md]
    
    ROOT --> SCRIPTS[scripts/]
    SCRIPTS --> SCRIPT1[run_presentation.sh]
    SCRIPTS --> SCRIPT2[stop_services.sh]
    
    ROOT --> BACK[loja-variedades-back/]
    BACK --> BACK1[HELP.md]
    
    ROOT --> FRONT[lojadevariedades-front/]
    FRONT --> FRONT1[README.md]
    
    style DOC1 fill:#FFD700,stroke:#333,color:#000
    style DOC2 fill:#4CAF50,stroke:#333,color:#fff
    style DOC3 fill:#FF9800,stroke:#333,color:#fff
```

## 🔄 Dependências entre Documentos

```mermaid
graph TD
    README[README.md] -.referencia.-> TODOS[Todos os outros]
    
    INDICE[INDICE_DOCUMENTACAO.md] -.referencia.-> TODOS
    
    RESUMO[RESUMO_EXECUTIVO.md] -.resume.-> README
    RESUMO -.resume.-> ARQ[docs/arquitetura.md]
    RESUMO -.resume.-> BACK[docs/backlog.md]
    
    AVAL[AVALIACAO.md] -.referencia.-> README
    AVAL -.referencia.-> ARQ
    AVAL -.referencia.-> BACK
    AVAL -.referencia.-> PROTO[prototype/README.md]
    
    PITCH[docs/pitch.md] -.usa.-> PROTO
    PITCH -.usa.-> ARQ
    PITCH -.usa.-> BACK
    
    STRUCT[docs/estrutura.md] -.detalha.-> README
    
    style README fill:#FFD700,stroke:#333,color:#000
    style INDICE fill:#9C27B0,stroke:#333,color:#fff
    style RESUMO fill:#4CAF50,stroke:#333,color:#fff
    style AVAL fill:#FF9800,stroke:#333,color:#fff
```

## 📊 Cobertura de Requisitos do Projeto Final

```mermaid
graph LR
    PF[Projeto Final] --> R1[Item 1: Repositório]
    PF --> R2[Item 2: Apresentação]
    
    R1 --> R1A[a. Código MVP]
    R1 --> R1B[b. Protótipo]
    R1 --> R1C[c. Arquitetura]
    R1 --> R1D[d. Backlog]
    R1 --> R1E[e. README]
    
    R1A -.cumprido por.-> CODE[/src/ Backend+Frontend]
    R1B -.cumprido por.-> PROTO[/prototype/README.md]
    R1C -.cumprido por.-> ARQ[/docs/arquitetura.md]
    R1D -.cumprido por.-> BACK[/docs/backlog.md]
    R1E -.cumprido por.-> README[/README.md]
    
    R2 --> R2A[10min apresentação]
    R2 --> R2B[5min Q&A]
    
    R2A -.cumprido por.-> PITCH[/docs/pitch.md]
    R2B -.cumprido por.-> QA[pitch.md seção Q&A]
    
    style CODE fill:#4CAF50,stroke:#333,color:#fff
    style PROTO fill:#4CAF50,stroke:#333,color:#fff
    style ARQ fill:#4CAF50,stroke:#333,color:#fff
    style BACK fill:#4CAF50,stroke:#333,color:#fff
    style README fill:#4CAF50,stroke:#333,color:#fff
    style PITCH fill:#4CAF50,stroke:#333,color:#fff
    style QA fill:#4CAF50,stroke:#333,color:#fff
```

## 🎯 Prioridade de Leitura

```mermaid
graph TD
    A[Documentos] --> P1[🔴 OBRIGATÓRIO]
    A --> P2[🟡 IMPORTANTE]
    A --> P3[🟢 DIFERENCIAL]
    
    P1 --> P1A[README.md]
    P1 --> P1B[docs/arquitetura.md]
    P1 --> P1C[docs/backlog.md]
    P1 --> P1D[prototype/README.md]
    P1 --> P1E[docs/pitch.md]
    
    P2 --> P2A[RESUMO_EXECUTIVO.md]
    P2 --> P2B[AVALIACAO.md]
    P2 --> P2C[docs/estrutura.md]
    P2 --> P2D[scripts/*.sh]
    
    P3 --> P3A[INDICE_DOCUMENTACAO.md]
    P3 --> P3B[GUIA_INTEGRACAO.md]
    P3 --> P3C[MAPA_VISUAL.md]
    
    style P1 fill:#f44336,stroke:#333,color:#fff
    style P2 fill:#FF9800,stroke:#333,color:#fff
    style P3 fill:#4CAF50,stroke:#333,color:#fff
```

## 📈 Evolução da Documentação

```mermaid
gantt
    title Linha do Tempo de Criação da Documentação
    dateFormat  YYYY-MM-DD
    section Core
    Código-fonte MVP           :done, 2025-11-01, 2025-11-30
    README.md                  :done, 2025-11-15, 2025-12-03
    section Arquitetura
    docs/arquitetura.md        :done, 2025-12-03, 1d
    docs/estrutura.md          :done, 2025-12-03, 1d
    section Planejamento
    docs/backlog.md            :done, 2025-12-03, 1d
    section Apresentação
    docs/pitch.md              :done, 2025-12-03, 1d
    prototype/README.md        :done, 2025-12-03, 1d
    section Auxiliares
    RESUMO_EXECUTIVO.md        :done, 2025-12-03, 1d
    AVALIACAO.md               :done, 2025-12-03, 1d
    INDICE_DOCUMENTACAO.md     :done, 2025-12-03, 1d
    scripts/run_presentation.sh:done, 2025-12-03, 1d
```

## 📦 Tamanho da Documentação

```mermaid
pie title Distribuição de Linhas de Documentação
    "docs/pitch.md (Apresentação)" : 900
    "docs/backlog.md (Histórias)" : 800
    "docs/estrutura.md (Organização)" : 700
    "docs/arquitetura.md (Técnica)" : 500
    "AVALIACAO.md (Guia Professora)" : 400
    "prototype/README.md (Protótipo)" : 400
    "README.md (Principal)" : 300
    "GUIA_INTEGRACAO.md (API)" : 300
    "RESUMO_EXECUTIVO.md" : 150
    "Outros" : 250
```

---

## 🔗 Links Rápidos

- [Voltar ao README Principal](./README.md)
- [Ver Índice Completo de Documentação](./INDICE_DOCUMENTACAO.md)
- [Resumo Executivo (1 página)](./RESUMO_EXECUTIVO.md)
- [Guia de Avaliação para Professora](./AVALIACAO.md)

---

**Nota:** Os diagramas acima são renderizados automaticamente pelo GitHub usando Mermaid. Se estiver visualizando em outro lugar, pode ser necessário um plugin ou ferramenta compatível.

---

**UFERSA | Engenharia de Software | Prof.ª Huliane Medeiros | 2025.2**
