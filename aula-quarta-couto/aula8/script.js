// const botao = document.querySelector("#botao")

// function teste1(){
//     console.log("Função 1 executada.")
// }

// botao.addEventListener("click", teste1)


// botao.addEventListener("mouseover", () => {
//     console.log("Função seta executada (função 2)")
// })


const botao  = document.querySelector("#botao-jogo")
const placar = document.querySelector("#placar") 
let pontos   = 0

function moverBotao(){
    const x = Math.random() * window.innerWidth
    const y = Math.random() * 400

    botao.style.left = `${x}px`
    botao.style.top = `${y}px`
}

botao.addEventListener("mouseover", moverBotao)

botao.addEventListener("click", () =>{
    pontos++ 
    //pontos = pontos + 1
    placar.textContent = `Pontos: ${pontos}`
    alert("Você clicou no botão?")

})