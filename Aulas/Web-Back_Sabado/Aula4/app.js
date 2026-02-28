function assarPizzaCaos(numero) {
    setTimeout(() => {
        console.log(`Pizza ${numero} pronta!`)
    }, 000);
}
// '' ou "" + nomevariavel  | `${variavel} `

function prepararPedido() {
    console.log("Iniciando pedido...")
    for (let i = 1; i <= 3; i++) {
        assarPizzaCaos(i)
    }

    console.log("Pedido finalizado!")
}

// prepararPedido()

// promises - objeto que representa a conclusao ou falha de uma operacao assincrona
// resolve - valor se deu bom
// reject - se deu ruim 

const myPromise = new Promise((resolve, reject) => {
    const sucesso = true

    if (sucesso) {
        resolve("Deu bom, a operação foi um sucesso")
    } else {
        reject("Algo deu errado.")
    }
})

// promise tem 3 estados
// pendente : esta sendo processada
// resolvida : se concluida com sucesso
// rejeitada : se a operação falhou

//  .then() : é o sucessor do sucesso
//  .catch() : é o gerenciuador de crises 
//  .finally : é o encerramento 

function assarPizza(numero, resultado) {
    return new Promise((resolve, reject) => {
        console.log(`Começando a assar a Pizza ${numero}...`)

        setTimeout(() => {
            const deuCerto = resultado

            if (deuCerto) {
                resolve("Deu bom, a operação foi um sucesso")
            } else {
                reject("Algo deu errado.")
            }
        }, 1000);
    });
}

console.log("Iniciando pedido")

assarPizza(1, true)
    .then((resultado1) => {
        console.log(resultado1)
        return assarPizza(2, true)
    })
    .then((resultado2) => {
        console.log(resultado2)
        return assarPizza(3, false)
    })
    .then((resultado3) => {
        console.log(resultado3)
        console.log("Todas as pizzas foram assadas")
    })
    .catch((erro) => {
        console.log("Deu ruim no meio do caminho", erro)
    })
    .finally(() => {
        console.log("Cozinha fechada")
    });

