#!/usr/bin/env bash
# Script para Parar Serviços - Loja de Variedades
# UFERSA - Engenharia de Software

set -euo pipefail

# Cores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo "=========================================="
echo "🛑 Parando Serviços - Loja de Variedades"
echo "=========================================="
echo ""

PIDFILE_BACKEND=/tmp/loja-backend.pid
PIDFILE_FRONTEND=/tmp/loja-frontend.pid

# Parar Backend
if [ -f "$PIDFILE_BACKEND" ]; then
    PID_BACKEND=$(cat "$PIDFILE_BACKEND")
    if ps -p "$PID_BACKEND" > /dev/null 2>&1; then
        echo -e "${YELLOW}Parando Backend (PID: $PID_BACKEND)...${NC}"
        kill "$PID_BACKEND"
        rm -f "$PIDFILE_BACKEND"
        echo -e "${GREEN}✓ Backend parado${NC}"
    else
        echo -e "${YELLOW}Backend já estava parado${NC}"
        rm -f "$PIDFILE_BACKEND"
    fi
else
    echo -e "${YELLOW}Backend não estava rodando (PID file não encontrado)${NC}"
fi

# Parar Frontend
if [ -f "$PIDFILE_FRONTEND" ]; then
    PID_FRONTEND=$(cat "$PIDFILE_FRONTEND")
    if ps -p "$PID_FRONTEND" > /dev/null 2>&1; then
        echo -e "${YELLOW}Parando Frontend (PID: $PID_FRONTEND)...${NC}"
        kill "$PID_FRONTEND"
        rm -f "$PIDFILE_FRONTEND"
        echo -e "${GREEN}✓ Frontend parado${NC}"
    else
        echo -e "${YELLOW}Frontend já estava parado${NC}"
        rm -f "$PIDFILE_FRONTEND"
    fi
else
    echo -e "${YELLOW}Frontend não estava rodando (PID file não encontrado)${NC}"
fi

# Limpar processos remanescentes (backup)
echo ""
echo "Verificando processos remanescentes..."

# Matar processos Maven/Spring Boot na porta 8080
if lsof -Pi :8080 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo -e "${YELLOW}Encontrado processo na porta 8080, encerrando...${NC}"
    kill -9 $(lsof -t -i:8080) 2>/dev/null || true
fi

# Matar processos Vite na porta 5173
if lsof -Pi :5173 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo -e "${YELLOW}Encontrado processo na porta 5173, encerrando...${NC}"
    kill -9 $(lsof -t -i:5173) 2>/dev/null || true
fi

echo ""
echo "=========================================="
echo -e "${GREEN}✅ Todos os serviços foram parados!${NC}"
echo "=========================================="
echo ""
echo "📋 Logs salvos em:"
echo "   Backend:  /tmp/loja-backend.log"
echo "   Frontend: /tmp/loja-frontend.log"
echo ""
