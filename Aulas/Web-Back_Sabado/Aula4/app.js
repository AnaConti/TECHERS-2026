function assarPizzaCaos(numero){
    setTimeout(() => {
        console.log(`Pizza ${numero} pronta!`)
    }, 000);
}
// '' ou "" + nomevariavel  | `${variavel} `

function prepararPedido(){
    console.log("Iniciando pedido...")
    for(let i = 1; i <= 3; i++){
        assarPizzaCaos(i)  
    }

    console.log("Pedido finalizado!")
}

prepararPedido()