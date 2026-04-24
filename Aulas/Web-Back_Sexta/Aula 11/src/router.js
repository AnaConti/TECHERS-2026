import fs from 'node:fs/promises'
import * as inventoryCrontroller from './modules/inventory/inventory.controller.js'

export const roteador = async (request, response) => {
    const {url, method} = request

    if (url === '/' && method === 'GET'){
        return inventoryCrontroller.listarInventario(request, response)
    }
    else if (url === '/adicionar' && method === 'POST'){
        return inventoryCrontroller.adicionarNoInventario(request, response)
    }
    else if (url.endsWith('.css')){
        try{
            const css = await fs.readFile('.' + url, 'utf-8')
            response.setHeader('X-Content-Type-Options', 'nosniff')
            response.setHeader('Content-Type', 'text/css')

            responde.writeHead(200)
            return response.end(css)
        } catch(erro) {}
    }
    else {
        response.writeHead(404)
        response.end('Página não encontrada')
    }
};
