const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (request, response) => {
    const url = request.url;

    // Rota Principal
    if (url === '/' || url === '/index.html') {
        const html = await fs.readFile('./index.html');
        response.setHeader('Content-Type', 'text/html');
        response.writeHead(200);
        return response.end(html);
    }

    // TASK 2, 3 e 4: Tratando arquivos estáticos individualmente
    
    // Tratando CSS
    else if (url.endsWith('.css')) {
        try {
            const css = await fs.readFile('.' + url);
            // Task 3: Segurança (Proíbe adivinhar)
            response.setHeader('X-Content-Type-Options', 'nosniff');
            // Task 4: Etiqueta explícita
            response.setHeader('Content-Type', 'text/css');
            response.writeHead(200);
            response.end(css);
        } catch (e) {
            response.writeHead(404);
            response.end('CSS não encontrado');
        }
    }

    // Tratando GIF
    else if (url.endsWith('.gif')) {
        try {
            const gif = await fs.readFile('.' + url);
            response.setHeader('X-Content-Type-Options', 'nosniff');
            response.setHeader('Content-Type', 'image/gif');
            response.writeHead(200);
            response.end(gif);
        } catch (e) {
            response.writeHead(404);
            response.end('GIF não encontrado');
        }
    }

    // Tratando PNG
    else if (url.endsWith('.png')) {
        try {
            const png = await fs.readFile('.' + url);
            response.setHeader('X-Content-Type-Options', 'nosniff');
            response.setHeader('Content-Type', 'image/png');
            response.writeHead(200);
            response.end(png);
        } catch (e) {
            response.writeHead(404);
            response.end('PNG não encontrado');
        }
    }

    // Erro 404 padrão
    else {
        response.writeHead(404);
        response.end('Recurso inexistente');
    }
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});