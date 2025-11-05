#!/bin/bash
echo "========================================"
echo "  Portal Navbar - Starting Server"
echo "========================================"
echo ""

# Check if Node.js is installed
if command -v node &> /dev/null; then
    echo "[+] Node.js found! Starting with http-server..."
    echo "[+] CORS enabled"
    echo ""
    npx http-server -p 8000 --cors
    exit 0
fi

# Check if Python is installed
if command -v python3 &> /dev/null; then
    echo "[+] Python found! Starting with Python server..."
    echo "[+] CORS enabled"
    echo ""
    python3 server.py
    exit 0
elif command -v python &> /dev/null; then
    echo "[+] Python found! Starting with Python server..."
    echo "[+] CORS enabled"
    echo ""
    python server.py
    exit 0
fi

# No server found
echo "[-] ERROR: Neither Node.js nor Python found!"
echo ""
echo "Please install one of the following:"
echo "  1. Node.js: https://nodejs.org/"
echo "  2. Python: https://www.python.org/"
echo ""
exit 1
