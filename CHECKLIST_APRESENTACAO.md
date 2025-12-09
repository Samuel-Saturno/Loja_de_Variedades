# ✅ Checklist Final - Dia da Apresentação

**Data de Apresentação:** _____________  
**Horário:** _____________  
**Local:** _____________

---

## 📅 1 Semana Antes

### Preparação Técnica
- [ ] **Backend compila sem erros:** `cd loja-variedades-back && mvn clean package`
- [ ] **Frontend compila sem erros:** `cd lojadevariedades-front && npm run build`
- [ ] **PostgreSQL configurado e rodando**
- [ ] **Banco populado com dados de teste** (produtos, usuários admin/cliente)
- [ ] **Credenciais de teste validadas:**
  - [ ] Admin: `admin@loja.com` / `admin123` ✅
  - [ ] Cliente: `cliente@teste.com` / `cliente123` ✅

### Documentação
- [ ] **Todos os arquivos .md revisados** (sem erros de digitação)
- [ ] **README.md atualizado** com informações do time
- [ ] **Links internos funcionando** (testar todos os links entre documentos)
- [ ] **Diagramas renderizando corretamente** no GitHub (arquitetura.md, MAPA_VISUAL.md)

### Time
- [ ] **Reunião de alinhamento:** Todos leram docs/pitch.md
- [ ] **Divisão clara de responsabilidades** na apresentação
- [ ] **Cada membro revisou sua seção** do pitch

---

## 📅 3 Dias Antes

### Ensaios
- [ ] **Ensaio completo com cronômetro** (deve ficar entre 9-11 minutos)
- [ ] **Demonstração testada 3 vezes:**
  - [ ] Fluxo do Cliente (adicionar ao carrinho → login → checkout)
  - [ ] Fluxo do Admin (adicionar produto → editar → excluir)
- [ ] **Transições entre apresentadores suaves**
- [ ] **Respostas de Q&A revisadas** (10 perguntas no pitch.md)

### Materiais
- [ ] **Slides preparados** (se houver, baseados no pitch.md)
- [ ] **Backup da apresentação:**
  - [ ] Slides em PDF
  - [ ] Vídeo gravado da demo (caso internet falhe)
  - [ ] Screenshots das telas principais
- [ ] **Pendrive com repositório completo** (backup offline)

### Equipamento
- [ ] **Notebook do apresentador testado:**
  - [ ] Bateria carregada
  - [ ] Fonte/carregador funcionando
  - [ ] Portas HDMI/USB testadas
- [ ] **Conexão com projetor testada** (adaptadores prontos se necessário)
- [ ] **Internet estável ou 4G backup**

---

## 📅 1 Dia Antes

### Checklist Técnico Final
- [ ] **Atualizar repositório GitHub:**
  ```bash
  git add .
  git commit -m "Final version for presentation"
  git push origin presentation-setup
  ```
- [ ] **Verificar que todos os commits estão no remoto**
- [ ] **README.md visualizar no GitHub** (garantir formatação correta)

### Time
- [ ] **Reunião final de alinhamento** (15 minutos)
- [ ] **Confirmar ordem de apresentação:**
  1. Francisco Lailson - Introdução (1 min)
  2. Francisco Lailson - Visão do Produto (1m30s)
  3. Antonio Nogueira - Arquitetura (2 min)
  4. Luiz Eduardo/Antonio Joaquim - Demo (3 min)
  5. Samuel Saturno/Francisco - Desenvolvimento (1m30s)
  6. Antonio Nogueira - Lições Aprendidas (1 min)
  7. Francisco Lailson - Conclusão (1 min)
- [ ] **Definir quem responde cada tipo de pergunta:**
  - Perguntas técnicas backend → Antonio Joaquim
  - Perguntas de arquitetura/integração → Antonio Nogueira
  - Perguntas de banco de dados → Samuel Saturno
  - Perguntas de frontend → Luiz Eduardo
  - Perguntas de processo/metodologia → Francisco Lailson

### Preparação Pessoal
- [ ] **Cada membro praticou sua parte individualmente**
- [ ] **Anotações/cola preparadas** (discretas, apenas lembretes)
- [ ] **Roupas definidas** (apresentação profissional)
- [ ] **Dormir cedo** 😴

---

## 📅 Dia da Apresentação - Manhã

### 2-3 Horas Antes

#### Preparação do Ambiente
- [ ] **Executar script de apresentação:**
  ```bash
  cd ~/Loja_de_Variedades/scripts
  ./run_presentation.sh
  ```
- [ ] **Verificar serviços rodando:**
  - [ ] Backend: http://localhost:8080 ✅
  - [ ] Frontend: http://localhost:5173 ✅
- [ ] **Testar credenciais de login novamente**
- [ ] **Abrir abas do navegador:**
  - [ ] Tab 1: http://localhost:5173 (frontend)
  - [ ] Tab 2: http://localhost:8080 (verificar API)
  - [ ] Tab 3: GitHub do projeto
  - [ ] Tab 4: Documentação (/docs/ no VSCode ou navegador)

#### Backup
- [ ] **Verificar pendrive com backup**
- [ ] **Ter celular com 4G pronto** (hotspot se internet falhar)
- [ ] **Ter vídeo de demo no celular/pendrive**

#### Time
- [ ] **Todos chegaram ao local com antecedência**
- [ ] **Conferir presença:**
  - [ ] Antonio Joaquim ✅
  - [ ] Samuel Saturno ✅
  - [ ] Antonio Nogueira ✅
  - [ ] Luiz Eduardo ✅
  - [ ] Francisco Lailson ✅
- [ ] **Fazer aquecimento vocal** (falar em voz alta)
- [ ] **Respirar fundo, relaxar** 🧘

---

## 📅 30 Minutos Antes

### Setup Final
- [ ] **Testar projetor:**
  - [ ] Imagem aparecendo corretamente
  - [ ] Resolução adequada (testar mudar para 1920x1080 se necessário)
  - [ ] Fontes legíveis no projetor
- [ ] **Testar microfone** (se houver)
- [ ] **Posicionar notebook:**
  - [ ] Em local estável
  - [ ] Com visão clara da tela e do público
  - [ ] Conectado à energia
- [ ] **Abrir aplicação e deixar na tela de login**
- [ ] **Fechar notificações do sistema** (modo "Não perturbe")
- [ ] **Deixar água por perto** 💧

### Materiais na Mesa
- [ ] **Notebook aberto e funcionando**
- [ ] **Anotações/lembretes**
- [ ] **Pendrive de backup**
- [ ] **Carregador/fonte conectado**
- [ ] **Celular em silencioso** (mas disponível para hotspot)

### Mental
- [ ] **Revisar cronograma mental:**
  - 0-1 min: Introdução
  - 1-2:30 min: Visão do Produto
  - 2:30-4:30 min: Arquitetura
  - 4:30-7:30 min: Demo
  - 7:30-9 min: Desenvolvimento
  - 9-10 min: Conclusão
- [ ] **Revisar primeira frase** (entrada impactante)
- [ ] **Lembrar de sorrir e fazer contato visual** 😊
- [ ] **Respirar fundo 3 vezes** 🌬️

---

## 📅 Durante a Apresentação

### Francisco Lailson (Introdução - 1 min)
- [ ] Apresentar time e contexto acadêmico
- [ ] Mencionar UFERSA e Prof.ª Huliane
- [ ] Introduzir objetivo do projeto

### Francisco Lailson (Visão do Produto - 1m30s)
- [ ] Explicar problema que o sistema resolve
- [ ] Apresentar públicos-alvo (cliente e admin)
- [ ] Listar funcionalidades principais

### Antonio Nogueira (Arquitetura - 2 min)
- [ ] Mostrar stack tecnológico
- [ ] Explicar separação Frontend/Backend/Database
- [ ] Apresentar diagrama de camadas (arquitetura.md)
- [ ] Mencionar decisões arquiteturais (JWT, REST API)

### Luiz Eduardo + Antonio Joaquim (Demo - 3 min)

**Parte 1: Cliente (Luiz Eduardo - 1m30s)**
- [ ] Abrir localhost:5173
- [ ] Navegar pelo catálogo
- [ ] Adicionar 2-3 produtos ao carrinho
- [ ] Clicar no carrinho
- [ ] Ajustar quantidade
- [ ] Clicar em "Finalizar Compra" → redireciona para login
- [ ] Fazer login (cliente@teste.com)
- [ ] Confirmar compra

**Parte 2: Admin (Antonio Joaquim - 1m30s)**
- [ ] Fazer logout
- [ ] Login como admin (admin@loja.com)
- [ ] Acessar painel administrativo
- [ ] Adicionar um produto novo
- [ ] Editar produto existente
- [ ] Excluir produto
- [ ] Mostrar que sumiu do catálogo

### Samuel Saturno (Desenvolvimento - 1m30s)
- [ ] Explicar metodologia Scrum aplicada
- [ ] Apresentar organização em épicos
- [ ] Mostrar exemplos de histórias de usuário
- [ ] Mencionar backlog completo em docs/backlog.md
- [ ] Destacar divisão de responsabilidades do time

### Antonio Nogueira (Lições Aprendidas - 1 min)
- [ ] Mencionar desafio de integração (CORS)
- [ ] Explicar como superaram (configuração adequada)
- [ ] Destacar aprendizados técnicos

### Francisco Lailson (Conclusão - 1 min)
- [ ] Recapitular entregas (MVP funcional, docs, apresentação)
- [ ] Mencionar repositório GitHub
- [ ] Agradecer Prof.ª Huliane e turma
- [ ] Abrir para perguntas

---

## 📅 Q&A (5 minutos)

### Distribuição de Respostas por Especialidade

**Perguntas sobre Backend/Spring Boot:**
- [ ] Antonio Joaquim responde

**Perguntas sobre Banco de Dados/PostgreSQL:**
- [ ] Samuel Saturno responde

**Perguntas sobre Integração/API:**
- [ ] Antonio Nogueira responde

**Perguntas sobre Frontend/React:**
- [ ] Luiz Eduardo responde

**Perguntas sobre Processo/Metodologia:**
- [ ] Francisco Lailson responde

### Dicas para Q&A
- [ ] **Escutar pergunta completamente** antes de responder
- [ ] **Respirar antes de responder** (não apressar)
- [ ] **Se não souber:** Admitir e oferecer investigar depois
- [ ] **Agradecer cada pergunta:** "Ótima pergunta!"
- [ ] **Ser objetivo:** Respostas de 30-60 segundos

### 10 Perguntas Mais Prováveis (respostas em docs/pitch.md)
1. [ ] Por que Spring Boot?
2. [ ] Como garantem segurança de senhas?
3. [ ] Sistema está pronto para produção?
4. [ ] Como lidam com concorrência no estoque?
5. [ ] Por que não implementaram testes automatizados?
6. [ ] Como funciona JWT?
7. [ ] Como carrinho persiste entre sessões?
8. [ ] Maiores desafios técnicos?
9. [ ] Como escalariam para milhões de usuários?
10. [ ] Projeto pode ser expandido para mobile?

---

## 📅 Após a Apresentação

### Imediato (0-10 minutos)
- [ ] **Agradecer Prof.ª Huliane pessoalmente**
- [ ] **Desligar serviços:**
  ```bash
  cd ~/Loja_de_Variedades/scripts
  ./stop_services.sh
  ```
- [ ] **Guardar equipamentos**
- [ ] **Reunião rápida do time:**
  - O que funcionou bem?
  - O que poderia melhorar?
  - Como foi o Q&A?

### No Mesmo Dia
- [ ] **Enviar email de agradecimento** para Prof.ª Huliane (se aplicável)
- [ ] **Documentar feedback recebido** (adicionar em retrospectiva do backlog)
- [ ] **Celebrar! 🎉** Time merece descanso

### Próximos Dias (se necessário)
- [ ] **Implementar melhorias sugeridas** na apresentação
- [ ] **Atualizar documentação** com feedback
- [ ] **Commit final:**
  ```bash
  git add .
  git commit -m "Post-presentation updates based on feedback"
  git push origin presentation-setup
  ```

---

## 🎯 Lembretes Importantes

### ⚠️ O Que NÃO Fazer
- ❌ **Não ler slides palavra por palavra** (explicar conceitos)
- ❌ **Não correr na fala** (falar devagar e claro)
- ❌ **Não dar as costas para a plateia** (sempre virado)
- ❌ **Não usar gírias ou linguagem informal** demais
- ❌ **Não se desculpar demais** ("desculpa se ficou ruim...")
- ❌ **Não entrar em pânico se algo falhar** (usar backup)

### ✅ O Que Fazer
- ✅ **Fazer contato visual** com a Prof.ª e colegas
- ✅ **Falar com entusiasmo** (demonstrar orgulho do trabalho)
- ✅ **Usar gestos naturais** para enfatizar pontos
- ✅ **Pausar entre seções** (dar tempo para plateia absorver)
- ✅ **Sorrir!** 😊 (transmite confiança)
- ✅ **Respirar fundo** se ficar nervoso

---

## 🚨 Plano de Contingência

### Se Internet Cair
- [ ] **Usar hotspot do celular** (4G)
- [ ] **Usar aplicação local** (backend + frontend já rodando)
- [ ] **Mostrar vídeo de demo gravado** (backup)

### Se Projetor Não Funcionar
- [ ] **Usar tela do notebook** (girar para plateia)
- [ ] **Descrever verbalmente** com ajuda de documentação impressa

### Se Demo Travar
- [ ] **Recarregar página** (F5)
- [ ] **Reiniciar serviços** rapidamente (script stop + run)
- [ ] **Pular para slides** enquanto reinicia
- [ ] **Usar screenshots** de backup

### Se Esquecer Algo
- [ ] **Pedir ajuda aos colegas** ("Antonio, você pode complementar?")
- [ ] **Consultar anotações** discretamente
- [ ] **Respirar fundo** e retomar

---

## 📊 Checklist Pós-Apresentação

### Autoavaliação do Time

**Francisco Lailson (Scrum Master):**
- [ ] Coordenação do time: ⭐⭐⭐⭐⭐
- [ ] Clareza nas explicações: ⭐⭐⭐⭐⭐
- [ ] Controle do tempo: ⭐⭐⭐⭐⭐

**Antonio Joaquim (Backend):**
- [ ] Conhecimento técnico demonstrado: ⭐⭐⭐⭐⭐
- [ ] Clareza na demo: ⭐⭐⭐⭐⭐
- [ ] Respostas em Q&A: ⭐⭐⭐⭐⭐

**Samuel Saturno (Database):**
- [ ] Explicação de processos: ⭐⭐⭐⭐⭐
- [ ] Conhecimento de backlog: ⭐⭐⭐⭐⭐

**Antonio Nogueira (Integration):**
- [ ] Explicação de arquitetura: ⭐⭐⭐⭐⭐
- [ ] Articulação de conceitos: ⭐⭐⭐⭐⭐
- [ ] Lições aprendidas: ⭐⭐⭐⭐⭐

**Luiz Eduardo (Frontend):**
- [ ] Demo de UI/UX: ⭐⭐⭐⭐⭐
- [ ] Apresentação visual: ⭐⭐⭐⭐⭐

### Feedback da Prof.ª Huliane
- [ ] Nota recebida: _____________
- [ ] Feedback positivo: _________________________________
- [ ] Sugestões de melhoria: _________________________________

---

## 🎉 Mensagem Final

> **"Vocês trabalharam duro durante todo o semestre. Esta apresentação é a celebração de todo o aprendizado e esforço. Confiem no trabalho que fizeram, apoiem uns aos outros, e aproveitem o momento de mostrar o resultado. Independente do resultado, vocês já cresceram muito como desenvolvedores e profissionais."**
> 
> **Boa sorte, equipe! 🚀**
> 
> *— Time Loja de Variedades*

---

**UFERSA | Engenharia de Software | Prof.ª Huliane Medeiros | 2025.2**

---

## ✍️ Assinaturas (Checklist Revisado)

- [ ] **Antonio Joaquim de Lira Neto** _______________
- [ ] **Samuel de Almeida Saturno** _______________
- [ ] **Antonio Nogueira da Silva Neto** _______________
- [ ] **Luiz Eduardo de Almeida Rodrigues** _______________
- [ ] **Francisco Lailson de Almeida** _______________

**Data da Revisão:** _______________
