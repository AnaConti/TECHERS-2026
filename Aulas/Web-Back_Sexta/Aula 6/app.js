// const item = { nome: "Poção", qtd: 5};

// const textoSalvar = JSON.stringify(item) // transformando em texto o objeto para salvar

// const objetoCarregado = JSON.parse(textoSalvar) // transforma texto em objeto para usar

// import fs from 'fs/promises'; //importar o moodulo

// await fs.writeFile('teste.txt', 'Conteudo do arquivo'); // escrever no arquivo

// const conteudo = await fs.readFile('teste.txt', 'utf-8') // ler o arquivo e guardar na variavel
// console.log(conteudo)

import fs from 'fs/promises'

const CAMINHO_ARQUIVO = './inventario.js'

// funcao para ler o banco de dados
async function lerBanco(){
    try{
        const dados = await fs.readFile(CAMINHO_ARQUIVO, 'utf-8')
        return JSON.parse(dados)
    } catch (erro){
        return []
    }
}

//  funcao salvar no banco de dados
async function salvarBanco(lista){
    const texto = JSON.stringify(lista, null, 2);
    await fs.writeFile(CAMINHO_ARQUIVO, texto)
}
// CRUD
// create - insere um novo item no array e salva o arquivo
// read - le o arquivo e exibir os itens no terminal
// update - alterar uma propriedade já existente
// delete - excluir um item especifico

// 1 create (Adicionar item)
async function adicionar(nome, categoria, qtd){
    const inventario = await lerBanco();
    const novoItem = {
        id: Date.now(),
        nome,
        categoria,
        qtd
    };

    inventario.push(novoItem) 
    await salvarBanco(inventario)
    console.log(`Item ${nome} adicionado ao inventario`)
}

//2 read listar os nossos itens
async function listarItens() {
    const inventario = await lerBanco()

    if(inventario.length === 0){
        console.log("Inventario vazio")
    } else {
        console.table(inventario)
    }
}

// 3 delete remover itens
async function removerItem(id) {
    const inventario = await lerBanco()

    const novaLista = inventario.filter(item => item.id !== id)

    await salvarBanco(novaLista)
    console.log(`Item com id: ${id} removido`)
} 

// executar nosso codigo
async function iniciar() {
    console.log("Iniciando Gerenciador de inventario")
    await adicionar("Espada de Diamante", "Armas", 1)
    await adicionar("poção de cura", "Consumiveis", 5)

    console.log("\nEstado Atual do Incentario:")
    await listarItens()
}

iniciar()