@echo off
title Feirão do Trabalhador 2025
cd /d "%~dp0"
echo Iniciando o servidor de desenvolvimento...
echo Aguarde alguns segundos e o navegador sera aberto.
echo Acessivel em: http://localhost:5173 e http://SEU_IP:5173 (rede local)
echo.
start http://localhost:5173
npm run dev -- --host
pause
