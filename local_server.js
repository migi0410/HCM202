const http = require('http');
const fs = require('fs');
const path = require('path');
const { parse } = require('url');

// Dynamic import for chat.js (since it uses ES modules)
let chatHandler;
import('./api/chat.js').then(module => {
    chatHandler = module.default;
});

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.json': 'application/json',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
};

const server = http.createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true);
    let pathname = parsedUrl.pathname;

    // Handle API routes
    if (pathname === '/api/chat') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            if (body) {
                try {
                    req.body = JSON.parse(body);
                } catch (e) {
                    req.body = {};
                }
            } else {
                req.body = {};
            }

            // Mock res object for Vercel API
            res.status = (statusCode) => {
                res.statusCode = statusCode;
                return res;
            };
            res.json = (data) => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
            };
            res.send = (data) => {
                res.end(data);
            };

            if (chatHandler) {
                try {
                    await chatHandler(req, res);
                } catch (err) {
                    console.error(err);
                    if (!res.headersSent) res.status(500).json({ error: 'Internal Server Error' });
                }
            } else {
                res.status(500).json({ error: 'Chat handler not loaded yet' });
            }
        });
        return;
    }

    // Serve static files
    if (pathname === '/') {
        pathname = '/index.html';
    }

    // Remove extension-less URLs by trying to add .html
    let filePath = path.join(process.cwd(), pathname);
    if (!path.extname(pathname) && fs.existsSync(filePath + '.html')) {
        filePath += '.html';
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('Not found');
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`Chat API available at http://localhost:${port}/api/chat`);
});
