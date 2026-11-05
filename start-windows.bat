@echo off
cd /d "%~dp0"
where py >nul 2>&1
if %errorlevel%==0 (
  start "Tesla Local Server" cmd /k py -3 server.py
) else (
  start "Tesla Local Server" cmd /k python server.py
)
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:8765/"
