@echo off
echo ========================================
echo   Portal Navbar - Starting Server
echo ========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [+] Node.js found! Starting with http-server...
    echo [+] CORS enabled
    echo.
    npx http-server -p 8000 --cors
    goto :end
)

REM Check if Python is installed
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [+] Python found! Starting with Python server...
    echo [+] CORS enabled
    echo.
    python server.py
    goto :end
)

REM No server found
echo [-] ERROR: Neither Node.js nor Python found!
echo.
echo Please install one of the following:
echo   1. Node.js: https://nodejs.org/
echo   2. Python: https://www.python.org/
echo.
pause
goto :end

:end
