// .then() é o sucessor do sucesso
// .catch() é o gerenciador das crises
// .finally() é o encerramento 

function assarPizza(numero, resultado){
    return new Promise((resolve, reject) => {
        console.log(`Começando a assar a Pizza ${numero}`);

        setTimeout(() => {
            const deuCerto = resultado;

            if (deuCerto){
                console.log(`Pizza ${numero} Pronta!`);
                resolve(`Dados da Pizza ${numero}`);
            } else {
                reject(`Pizza ${numero} deu ruim!`)
            }

        }, 1000);
    });
}

console.log("Iniciando pedido!")

assarPizza(1, true)
    .then((resultado1) => {
        console.log(resultado1)
        return assarPizza(2, false)
    })
    .then((resultado2) => {
        console.log(resultado2)
        return assarPizza(3, true)
    })
    .then((resultado3) => {
        console.log(resultado3)
        console.log("Todas as Pizzas foram feitas!")
    })
    .catch((erro) => {
        console.error("Deu muito ruim no meio do caminho!", erro)
    })
    .finally(() =>{
        console.log("Foram finalizadas (A cozinha fechou)")
    })