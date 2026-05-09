import http from 'node:http';
import { roteador } from './src/router.js';

const server = http.createServer(roteador);

server.listen(3000, () => {
    console.log('🚀 Servidor Modular e Seguro rodando em http://localhost:3000');
});