import * as service from './auth.service.js';
import fs from 'node:fs/promises';

export const exibirPaginaCadastro = async (request, response) => {
    const html = await fs.readFile('./index.html', 'utf-8');
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.writeHead(200);
    response.end(html);
};

export const exibirPaginaLogin = async (request, response) => {
    const html = await fs.readFile('./login.html', 'utf-8');
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.writeHead(200);
    response.end(html);
};

export const processarCadastro = (request, response) => {
    let corpo = '';
    request.on('data', chunk => corpo += chunk.toString());
    
    request.on('end', async () => {
        try {
            const dadosDigitados = new URLSearchParams(corpo);
            await service.cadastrarNovoUsuario(dadosDigitados);
            
            // Sucesso: Redireciona para login
            response.writeHead(302, { 'Location': '/login' });
            response.end();
        } catch (erro) {
            // Falha: Erro 400 com mensagem do Service
            response.setHeader('Content-Type', 'text/html; charset=utf-8');
            response.writeHead(400);
            response.end(`<h1>Erro: ${erro.message}</h1><a href="/home">Voltar</a>`);
        }
    });
};