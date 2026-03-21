// import http, { request } from 'node:http'

// const server = http.createServer((request, response) => {

// });

// const server2 = http.createServer()
// server2.on('request', (request, response) => {

// }) 

// server.listen(8080)

// const {method, url, headers} = request

// const userAgent = headers['user-agent']

import http, { request } from 'node:http'

const PORT = 3000

const server = http.createServer((request, response) => {
    // 1 - identificacao: log no console para sabermos o que foi pedido
    console.log(`Recebi uma requisição ${request.method} para: ${request.url}`)

    // 2 - idioma: definir o conteudo é um HTML e o alfabeto UTF-8
    response.setHeader('Content-Type', 'text/html; charset=utf-8')

    // 3 - confirmação do recebimento 
    response.writeHead(200)

    // 4 - o conteudo 
    response.write('<h1>Olá Mundo!</h1>')
    response.write('<p>Este é o meu primeiro servidor node</p>')

    // envia a resposta de volta
    response.end()
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});
