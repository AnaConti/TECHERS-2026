

// document.getElementById(nome) // retorna o elemento com o id passado
// document.getElementsByClassName(nome) // retorna todas as tags com essa classe
// document.getElementsByTagName(nome) // retornar um vetor com todas as tags com esse nome

// const titulo = document.getElementById("titulo1")

// titulo.textContent = "Titulo adicionada com JS"
// titulo.setAttribute("class", "titulo-base")
// titulo.style.color = "blue"

let src = "01-domesticated-dog.webp"
let text = "Um cachorro muito fofinho que gosta de biscoitos"
let titulo = "Joaozinho"

const infoCard = document.getElementById('info1')
const tituloCard = document.getElementById('titulo1')
const imgCard = document.getElementById('img1')

imgCard.setAttribute('src', src)
infoCard.textContent = text
tituloCard.textContent = titulo



