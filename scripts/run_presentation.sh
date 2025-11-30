#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

echo "Building frontend..."
if [ -d "lojadevariedades-front" ]; then
  cd lojadevariedades-front
  npm install --no-audit --no-fund
  npm run build
  echo "Copying built front to backend static..."
  rm -rf ../loja-variedades-back/src/main/resources/static/* || true
  cp -r dist/* ../loja-variedades-back/src/main/resources/static/
  cd ..
else
  echo "Frontend folder not found, skipping frontend build"
fi

echo "Building backend..."
cd loja-variedades-back
./mvnw package -DskipTests

JAR=target/loja-variedades-backend-0.0.1-SNAPSHOT.jar
if [ ! -f "$JAR" ]; then
  echo "JAR not found: $JAR" >&2
  exit 1
fi

LOG=/tmp/loja-presentation.log
PIDFILE=/tmp/loja-presentation.pid

nohup java -jar "$JAR" > "$LOG" 2>&1 &
echo $! > "$PIDFILE"

echo "Application started in background. PID=$(cat $PIDFILE), logs: $LOG"

echo "To stop: kill \\$(cat $PIDFILE) && rm -f $PIDFILE"
