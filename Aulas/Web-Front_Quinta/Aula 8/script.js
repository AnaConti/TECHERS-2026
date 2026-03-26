


// const botao = document.querySelector('button')

// // botao.onclick = function() {
// //     console.log('Botao clicado via propriedade')
// // }

// function saudacao(){
//     console.log("Olá")
// }

// botao.addEventListener('click', saudacao)
// botao.addEventListener('click', () => console.log('Segunda função executada'))

// // funcoes: sao um bloco de codigo para executar uma tarefa especifica

// function soma(a, b=5){
//     return a+b
// }

// const resultado = soma(5, 6)

// console.log(resultado)

// const x = function(a, b) { return a+b}

// const dobrar = (n) => n * 2


// exercicio:

//  criar um botao que foge do mouse, se conseguir clicar ganha ponto 

const botao = document.querySelector('#botao-fujao')
const placar = document.querySelector('#placar')

let pontos = 0

function moverBotao(){
    const x = Math.random() * (window.innerWidth - 100)
    const y = Math.random() * 300

    botao.style.left = `${x}px`
    botao.style.top = `${y}px`
}

botao.addEventListener('mouseover', moverBotao)

botao.addEventListener('click', () => {
    pontos++
    placar.textContent = pontos
    alert("Boa, você é rápido!")
});