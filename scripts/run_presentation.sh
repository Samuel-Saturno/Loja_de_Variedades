#!/usr/bin/env bash
# Script para Apresentação - Loja de Variedades
# UFERSA - Engenharia de Software | Prof.ª Huliane Medeiros
# Equipe: Antonio Joaquim, Samuel Saturno, Antonio Nogueira, Luiz Eduardo, Francisco Lailson

set -euo pipefail
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

echo "=========================================="
echo "LOJA DE VARIEDADES - SETUP"
echo "=========================================="
echo ""

# Cores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "Verificando dependências..."

# Verificar Java
if ! command -v java &> /dev/null; then
    echo -e "${YELLOW}Java não encontrado. Instale Java 17+${NC}"
    exit 1
fi
echo -e "${GREEN}Java: OK${NC}"

# Verificar Node
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}Node.js não encontrado. Instale Node.js 18+${NC}"
    exit 1
fi
echo -e "${GREEN}Node.js: OK${NC}"

# Verificar PostgreSQL
if ! command -v psql &> /dev/null; then
    echo -e "${YELLOW}PostgreSQL não encontrado${NC}"
else
    echo -e "${GREEN}PostgreSQL: OK${NC}"
fi

echo ""
echo "Construindo Backend..."
cd loja-variedades-back

if [ ! -f "mvnw" ]; then
    mvn clean package -DskipTests
else
    ./mvnw clean package -DskipTests
fi

echo -e "${GREEN}Backend: OK${NC}"

echo ""
echo "Preparando Frontend..."
cd ../lojadevariedades-front

if [ ! -d "node_modules" ]; then
    npm install --silent
fi
echo -e "${GREEN}Frontend: OK${NC}"

echo ""
echo "Iniciando Serviços..."

# Iniciar Backend
cd "$ROOT_DIR/loja-variedades-back"
LOG_BACKEND=/tmp/loja-backend.log
PIDFILE_BACKEND=/tmp/loja-backend.pid

JAR_FILE="target/loja-variedades-backend-0.0.1-SNAPSHOT.jar"
if [ ! -f "$JAR_FILE" ]; then
    echo -e "${YELLOW}JAR não encontrado${NC}"
    exit 1
fi

nohup java -jar "$JAR_FILE" > "$LOG_BACKEND" 2>&1 &
echo $! > "$PIDFILE_BACKEND"
echo -e "${GREEN}Backend iniciado (PID: $(cat $PIDFILE_BACKEND))${NC}"

sleep 15

# Iniciar Frontend
cd "$ROOT_DIR/lojadevariedades-front"
LOG_FRONTEND=/tmp/loja-frontend.log
PIDFILE_FRONTEND=/tmp/loja-frontend.pid

nohup npm run dev > "$LOG_FRONTEND" 2>&1 &
echo $! > "$PIDFILE_FRONTEND"
echo -e "${GREEN}Frontend iniciado (PID: $(cat $PIDFILE_FRONTEND))${NC}"

sleep 5

echo ""
echo "=========================================="
echo -e "${GREEN}SISTEMA PRONTO${NC}"
echo "=========================================="
echo ""
echo "URLs:"
echo "  Frontend: http://localhost:5173"
echo "  Backend:  http://localhost:8080"
echo ""
echo "Credenciais:"
echo "  Admin:   admin@loja.com / admin123"
echo "  Cliente: usuario@loja.com / 123456"
echo ""
echo "Logs:"
echo "  tail -f $LOG_BACKEND"
echo "  tail -f $LOG_FRONTEND"
echo "=========================================="

# Tentar abrir navegador automaticamente (Linux)
if command -v xdg-open &> /dev/null; then
    sleep 2
    xdg-open http://localhost:5173 &
fi
