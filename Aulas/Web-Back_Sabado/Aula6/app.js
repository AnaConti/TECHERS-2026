
// const item = { nome: "Poção", qtd: 5 };

// // transformar o meu objeto em texto para salvar
// const textoSalvar = JSON.stringify(item);

// // transformar o nosso texto em objeto
// const objetoCarregado = JSON.parse(textoSalvar);

// // importar o nosso file system
// import fs from 'fs/promises'
// // const fs = require('fs').promises;

// // escreer em um arquivo
// await fs.writeFile('teste.txt', "conteudo")

// // ler o arquivo
// const conteudo = await fs.readFile('teste.txt', 'utf-8')
// console.log(conteudo)

import fs from 'fs/promises'

const CAMINHO_ARQUIVO = './inventario.json'

// funcao ler o bd
async function lerBanco() {
    try {
        const dados = await fs.readFile(CAMINHO_ARQUIVO, 'utf-8')
        return JSON.parse(dados)
    } catch (erro) {
        return [] //retornar uma lista vazia
    }
}

// salvar no bd
async function salvarBanco(lista) {
    const texto = JSON.stringify(lista, null, 2)
    await fs.writeFile(CAMINHO_ARQUIVO, texto)
}

// CRUD
// CREATE - INSERIR UM NOVO ITEM
// READ - LE O ARQUIVO E MOSTRAR 
// UPDATE - ATUALIZAR ALGUMA INFORMAÇAO DO ARQUIVO
// DELETE - REMOVER ALGUM ITEM DO ARQUIVO

// CREATE
async function adicionarItens(nome, categoria, quantidade) {
    const inventario = await lerBanco()
    const novoItem = {
        id: Date.now(),
        nome,
        categoria,
        quantidade
    };

    inventario.push(novoItem)
    await salvarBanco(inventario)
    console.log(`Item ${nome} salvo!`)
}

// delete
async function removerItens(id) {
    let inventario = await lerBanco()

    const novaLista = inventario.filter(item => item.id !== id)

    await salvarBanco(novaLista)
    console.log(`Item com ${id} removido`)
}

// read
async function listarItens() {
    const inventario = await lerBanco()

    if(inventario.length === 0){
        console.log("Inventario vazio")
    } else {
        console.table(inventario)
    }
}

async function iniciar(){
    console.log("Iniciando o gerenciador de inventario")
    await adicionarItens("Espada de Diamante", "Armas", 1)
    await adicionarItens("Pocao de cura", "Pocao", 3)

    console.log("Inventario atual:")
    await listarItens()
}

iniciar()