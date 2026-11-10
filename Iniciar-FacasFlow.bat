@echo off
title FacasFlow OS ^& Finance Engine - Qualifacas
cd /d "%~dp0"
echo =================================================================
echo   Iniciando FacasFlow OS ^& Finance Engine (Qualifacas)...
echo =================================================================
start "" "http://localhost:4173"
call agy-node server.cjs
pause
