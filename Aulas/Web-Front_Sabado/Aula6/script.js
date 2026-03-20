console.log("Hello World")
9+4
console.log("9+4")
console.log(9+4)

let idade = 24 
const nome = "Ana Barbara"

console.log(nome)

console.log("Bem vinda " + nome + " ao curso de programacao")
console.log(`Bem vinda ${nome} ao curso de programacao`)

// for while
// for loop finito por ex de 0 a 10
// while loop que executa enquanto for vdd

for (let i = 0; i <= 10; i++){
    if(i !== 2){
        console.log(i)
    }
}

// for de 10 a 0
for (let i = 10; i >= 0; i--){
    console.log(i)
}

// array ou vetor
// lista de alguma coisa: numeros, strings, posicoes, boleano
let frutas = ["maça", "banana", "kiwi"]
console.log(frutas)

frutas[3] = "manga"

console.log(frutas[3])

frutas[1] = "pera"
console.log(frutas)

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

function mudarTudo(){
    const titulo = document.getElementById("titulo")
    titulo.innerText = "Lista de compras"
    titulo.style.color = "blue"
    titulo.style.fontFamily = "helvetica"

    let itens = ["maça", "banana", "kiwi", "manga"]
    let container = document.getElementById("lista-frutas")

    container.innerHTML = ""

    for(let i = 0; i < itens.length; i++){
        container.innerHTML += `<p>Item ${i+1}: ${itens[i]} </p>`
    }
}

// criar uma funcao para calcular o imc
// imc = peso / altura^2 (altura * altura)

let peso = Number(document.getElementById("peso").value)

// git add .
// git commit -m "mensagem"
// git push





