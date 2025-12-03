#!/usr/bin/env bash
# Script para Apresentação - Loja de Variedades
# UFERSA - Engenharia de Software | Prof.ª Huliane Medeiros
# Equipe: Antonio Joaquim, Samuel Saturno, Antonio Nogueira, Luiz Eduardo, Francisco Lailson

set -euo pipefail
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

echo "=========================================="
echo "🛍️  LOJA DE VARIEDADES - SETUP"
echo "=========================================="
echo ""

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}📦 Passo 1: Verificando dependências...${NC}"

# Verificar Java
if ! command -v java &> /dev/null; then
    echo -e "${YELLOW}⚠️  Java não encontrado. Instale Java 17+${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Java encontrado: $(java -version 2>&1 | head -n 1)${NC}"

# Verificar Node
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}⚠️  Node.js não encontrado. Instale Node.js 18+${NC}"
    exit 1
fi
echo -e "${GREEN}✓ Node.js encontrado: $(node --version)${NC}"

# Verificar PostgreSQL
if ! command -v psql &> /dev/null; then
    echo -e "${YELLOW}⚠️  PostgreSQL não encontrado. Certifique-se de que está rodando${NC}"
else
    echo -e "${GREEN}✓ PostgreSQL encontrado${NC}"
fi

echo ""
echo -e "${BLUE}🔧 Passo 2: Construindo Backend...${NC}"
cd loja-variedades-back

if [ ! -f "mvnw" ]; then
    echo -e "${YELLOW}⚠️  Maven wrapper não encontrado${NC}"
    mvn clean package -DskipTests
else
    ./mvnw clean package -DskipTests
fi

echo -e "${GREEN}✓ Backend compilado com sucesso${NC}"

echo ""
echo -e "${BLUE}🎨 Passo 3: Preparando Frontend...${NC}"
cd ../lojadevariedades-front

if [ ! -d "node_modules" ]; then
    echo "Instalando dependências do frontend..."
    npm install --silent
fi
echo -e "${GREEN}✓ Frontend preparado${NC}"

echo ""
echo -e "${BLUE}🚀 Passo 4: Iniciando Serviços...${NC}"

# Iniciar Backend
cd "$ROOT_DIR/loja-variedades-back"
LOG_BACKEND=/tmp/loja-backend.log
PIDFILE_BACKEND=/tmp/loja-backend.pid

echo "Iniciando Backend em http://localhost:8080..."
nohup mvn spring-boot:run > "$LOG_BACKEND" 2>&1 &
echo $! > "$PIDFILE_BACKEND"
echo -e "${GREEN}✓ Backend iniciado (PID: $(cat $PIDFILE_BACKEND))${NC}"
echo "   Logs: $LOG_BACKEND"

# Aguardar backend inicializar
echo "Aguardando backend inicializar (15s)..."
sleep 15

# Iniciar Frontend
cd "$ROOT_DIR/lojadevariedades-front"
LOG_FRONTEND=/tmp/loja-frontend.log
PIDFILE_FRONTEND=/tmp/loja-frontend.pid

echo "Iniciando Frontend em http://localhost:5173..."
nohup npm run dev > "$LOG_FRONTEND" 2>&1 &
echo $! > "$PIDFILE_FRONTEND"
echo -e "${GREEN}✓ Frontend iniciado (PID: $(cat $PIDFILE_FRONTEND))${NC}"
echo "   Logs: $LOG_FRONTEND"

# Aguardar frontend inicializar
echo "Aguardando frontend inicializar (5s)..."
sleep 5

echo ""
echo "=========================================="
echo -e "${GREEN}✅ SISTEMA PRONTO PARA APRESENTAÇÃO!${NC}"
echo "=========================================="
echo ""
echo "📍 URLs:"
echo "   Frontend: http://localhost:5173"
echo "   Backend:  http://localhost:8080"
echo ""
echo "🔑 Credenciais de Teste:"
echo "   Admin:   admin@loja.com / admin123"
echo "   Cliente: cliente@teste.com / cliente123"
echo ""
echo "📊 Monitoramento:"
echo "   Backend logs:  tail -f $LOG_BACKEND"
echo "   Frontend logs: tail -f $LOG_FRONTEND"
echo ""
echo "🛑 Para parar os serviços:"
echo "   kill \$(cat $PIDFILE_BACKEND) && rm -f $PIDFILE_BACKEND"
echo "   kill \$(cat $PIDFILE_FRONTEND) && rm -f $PIDFILE_FRONTEND"
echo ""
echo "💡 Dica: Abra http://localhost:5173 no navegador para começar!"
echo ""
echo "🎤 Boa apresentação, equipe! 🚀"
echo "=========================================="

# Tentar abrir navegador automaticamente (Linux)
if command -v xdg-open &> /dev/null; then
    sleep 2
    xdg-open http://localhost:5173 &
fi
