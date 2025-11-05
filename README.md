# Portal Navbar - Figma Design Implementation

This project implements a custom navbar design matching Figma specifications with automatic style enforcement via JavaScript.

## 🚀 Running the Project

### Important: Avoid CORS Issues

Since this project uses **ES6 modules** (`import/export`), you **cannot** simply open `index.html` directly in your browser (file:// protocol will cause CORS errors).

You **must** run a local web server.

---

## ✅ Method 1: Using Node.js (http-server) - WITH CORS ENABLED

### Prerequisites
- Node.js installed on your system

### Steps

1. **Install http-server globally** (one-time setup):
```bash
npm install -g http-server
```

2. **Navigate to project directory**:
```bash
cd D:\ctx_p
```

3. **Start the server WITH CORS enabled**:
```bash
http-server -p 8000 --cors
```

**Alternative with more CORS options**:
```bash
http-server -p 8000 --cors='*'
```

4. **Open in browser**:
```
http://localhost:8000
```

### CORS Headers Enabled:
- ✅ Access-Control-Allow-Origin: *
- ✅ Access-Control-Allow-Headers: *
- ✅ Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS

---

## ✅ Method 2: Using Node.js (npx - No Installation) - WITH CORS ENABLED

### Prerequisites
- Node.js installed on your system

### Steps

1. **Navigate to project directory**:
```bash
cd D:\ctx_p
```

2. **Start server directly with npx AND CORS**:
```bash
npx http-server -p 8000 --cors
```

3. **Open in browser**:
```
http://localhost:8000
```

### CORS Headers Enabled:
- ✅ All origins allowed
- ✅ All headers allowed
- ✅ All methods allowed

---

## ✅ Method 3: Using Python - WITH CORS ENABLED

### Prerequisites
- Python 3 installed on your system

### Option A: Simple Python Server (Basic CORS)

1. **Navigate to project directory**:
```bash
cd D:\ctx_p
```

2. **Create a file named `server.py`** with this content:

```python
#!/usr/bin/env python3
from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
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
    print(f'Server running at http://localhost:{port}/')
    print('CORS enabled for all origins')
    server.serve_forever()
```

3. **Run the server**:
```bash
python server.py
```

4. **Open in browser**:
```
http://localhost:8000
```

### Option B: Using Python with cors-anywhere (Advanced)

```bash
pip install flask flask-cors
```

Create `server_flask.py`:
```python
from flask import Flask, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_file(path):
    return send_from_directory('.', path)

if __name__ == '__main__':
    app.run(port=8000, debug=True)
```

Run:
```bash
python server_flask.py
```

---

## ✅ Method 4: Using Live Server (VS Code Extension)

### Prerequisites
- Visual Studio Code installed
- Live Server extension installed

### Steps

1. **Open project folder in VS Code**:
```bash
code D:\ctx_p
```

2. **Right-click on `index.html`** → Select **"Open with Live Server"**

3. **Browser opens automatically** at:
```
http://127.0.0.1:5500
```

---

## ✅ Method 5: Using PHP

### Prerequisites
- PHP installed on your system

### Steps

1. **Navigate to project directory**:
```bash
cd D:\ctx_p
```

2. **Start PHP server**:
```bash
php -S localhost:8000
```

3. **Open in browser**:
```
http://localhost:8000
```

---

## 🌐 Understanding CORS

### What is CORS?

**CORS (Cross-Origin Resource Sharing)** is a security feature implemented by browsers to prevent malicious scripts from accessing resources from different origins.

### Why Do You Need CORS Enabled?

1. **ES6 Modules**: This project uses `import/export` which requires CORS headers
2. **External Resources**: Loading fonts, images, or scripts from different domains
3. **API Calls**: Making requests to external APIs (like the logo from `http://192.168.18.120`)

### CORS Error Example:

```
Access to script at 'file:///D:/ctx_p/index.js' from origin 'null' has been blocked by CORS policy
```

### Solution:

Always run a local server with CORS enabled using one of the methods above.

---

## 🔥 RECOMMENDED: Quick Start with CORS

### Windows (PowerShell/CMD):

```bash
cd D:\ctx_p
npx http-server -p 8000 --cors
```

### Linux/Mac (Terminal):

```bash
cd /path/to/ctx_p
npx http-server -p 8000 --cors
```

Then open: **http://localhost:8000**

---

## 📁 Project Structure

```
D:\ctx_p\
├── index.html                      # Main HTML file
├── index.js                        # Main JavaScript entry point
├── index.css                       # Global styles
├── components/
│   ├── navbar.js                   # Navbar Figma design enforcer
│   ├── navbar.css                  # Navbar CSS styles
│   ├── extension.js                # Extensions
│   └── utils.js                    # Utility functions
├── figma/
│   └── Portal Header.png           # Figma design reference
└── README.md                       # This file
```

---

## 🎨 Figma Design Implementation

The navbar automatically enforces Figma design specifications:

- **Background Color**: `#E8E6E1` (Light beige)
- **Menu Text**: `#000000` (Black)
- **Icons**: `#344054` (Dark gray)
- **Green Buttons**: `#42966A` (AR, Theme, MX)
- **Red Badge**: `#E31C1C` (Shopping cart counter)
- **Height**: `64px`
- **Max Width**: `1440px`

---

## 🧪 Testing the Implementation

When you load the page, you should see:

1. **Alert**: "🚀 Navbar.js loaded! Script is running..."
2. **Alert**: "✅ NAVBAR FOUND! Starting Figma design enforcement..."
3. **Alert**: "✅ SUCCESS! Figma design has been applied..."

These alerts confirm the JavaScript is working correctly.

### Visual Checks:
- ✅ Navbar background is beige (#E8E6E1)
- ✅ Menu items (Data, View, Tools) are black
- ✅ Shopping cart icon is dark gray
- ✅ Shopping cart badge is red with white text
- ✅ User icon is dark gray
- ✅ AR, Theme, and MX buttons are green with white text

---

## 🐛 Troubleshooting

### Issue: CORS Error

**Error Message**:
```
Access to script at 'file:///...' from origin 'null' has been blocked by CORS policy
```

**Solution**:
You must use a local web server (see methods above). Do NOT open the HTML file directly.

---

### Issue: Navbar Styles Not Applied

**Check**:
1. Is the server running?
2. Did you see the test alerts?
3. Check browser console for errors (F12 → Console tab)
4. Verify `components/navbar.js` is loaded in Network tab

---

### Issue: JavaScript Not Running

**Check**:
1. Open browser console (F12)
2. Look for error messages
3. Verify all files exist:
   - `index.js`
   - `components/navbar.js`
   - `components/utils.js`
   - `components/extension.js`

---

## 🔧 Configuration

### Remove Test Alerts

Once you've confirmed the navbar is working, you can remove the alerts:

1. Open `components/navbar.js`
2. Remove or comment out all `alert()` statements
3. Keep the `console.log()` statements for debugging

---

## 📝 Notes

- **ES6 Modules**: This project uses modern JavaScript modules
- **No Build Step**: No webpack, babel, or bundlers required
- **Vanilla JS**: Pure JavaScript, no frameworks
- **Bootstrap**: Uses Bootstrap CSS for base styling
- **Automatic Enforcement**: JavaScript automatically overrides inline styles

---

## 📄 License

This project is for internal use.

---

## 🤝 Support

If you encounter issues:
1. Check the Troubleshooting section
2. Verify your local server is running
3. Check browser console for errors
4. Ensure all files are in correct locations
