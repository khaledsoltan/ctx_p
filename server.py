#!/usr/bin/env python3
"""
Simple HTTP Server with CORS enabled
Run: python server.py
"""
from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS for all origins
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        return super(CORSRequestHandler, self).end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

if __name__ == '__main__':
    port = 8000
    server = HTTPServer(('localhost', port), CORSRequestHandler)
    print('=' * 60)
    print(f'🚀 Server running at http://localhost:{port}/')
    print('✅ CORS enabled for all origins')
    print('=' * 60)
    print('Press Ctrl+C to stop the server')
    print('=' * 60)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n\n🛑 Server stopped')
        sys.exit(0)
