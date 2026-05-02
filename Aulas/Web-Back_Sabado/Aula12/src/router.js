import * as authController from './modules/auth/auth.controller.js';

export const roteador = async (request, response) => {
    const { url, method } = request;

    if (url === '/home' && method === 'GET') {
        return authController.exibirPaginaCadastro(request, response);
    }
    
    if (url === '/home' && method === 'POST') {
        return authController.processarCadastro(request, response);
    }

    if (url === '/login' && method === 'GET') {
        return authController.exibirPaginaLogin(request, response);
    }
    
    response.writeHead(404);
    response.end('Página não encontrada');
};