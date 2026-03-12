// console.log("Hello World") // printa no terminal

// 3*5 

// console.log("3*5")
// console.log(3*5)

// let idade = 24;
// const nome = "Ana Bárbara"

// console.log("nome")
// console.log(nome)

// console.log(`Bem vinda, ${nome}!`)
// console.log("Bem vinda, ", nome)

// if(true){

// } elif(){

// } else {

// }

// for(let i = 0; i <= 10; i++){
//     console.log(i)
// }

// for(let i = 10; i <= 0; i--){
//     console.log(i)
// }

// let frutas = ["maça", "banana", "kiwi", "morango"]

// console.log(frutas[0])

// frutas[0] = "melao"

// console.log(frutas[0])

// for (let i = 0; i < frutas.length; i++){
//     console.log(frutas[i])
// }
function mudaTudo(){
    const titulo = document.getElementById("titulo")
    titulo.innerText = "Lista de compras!"
    titulo.style.color = "blue"

    let itens = ["maça", "banana", "kiwi", "morango"]
    let container = document.getElementById("lista-frutas")

    container.innerHTML = ""

    for(let i = 0; i < itens.length; i++){
        container.innerHTML += `<p>Item ${i+1} ${itens[i]} </p>`
    }
}
