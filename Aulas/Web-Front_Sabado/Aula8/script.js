// const botao = document.querySelector('button');
// // botao.onclick = function() {
// //     console.log('Botão clicado via propriedade!');
// // };

// function saudacao(){
//     console.log("Oii")
// }

// botao.addEventListener('click', saudacao)
// botao.addEventListener('click', () => console.log("Segunda função executada"))

// function soma(num1, num2){
//     return num1+num2
// }

// let resultado = soma(10, 3)
// console.log(resultado)

// const x = function(a, b){return a+b}

// const dobrar = (n) => n *2

// Desafio: Criar um botão que "foge" do mouse do usuário. 
// Se o usuário conseguir clicar, ele ganha um ponto. 

botao.addEventListener('mouseover', mover)

const botao = document.querySelector('#botaoFujao')
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
    alert("Parabens")
});


// O Desafio: Criar uma página onde o adolescente pode digitar o 
// nome do seu "clã" ou "perfil" e mudar a cor de fundo da página em tempo real.














// const inputNome = document.querySelector('#inputNome');
// const inputCor = document.querySelector('#inputCor');
// const titulo = document.querySelector('#tituloPerfil');
// const corpoPagina = document.querySelector('#pagina');

// function atualizarTexto(novoTexto) {
//     titulo.textContent = `Perfil de: ${novoTexto}`;
// }

// inputNome.addEventListener('input', () => {
//     atualizarTexto(inputNome.value);
// });

// inputCor.addEventListener('change', (event) => {
//     const corEscolhida = event.target.value;
//     corpoPagina.style.backgroundColor = corEscolhida;
// });