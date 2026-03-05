//Criando as variáveis e armazenando os dados
let src = 'frieren.jpg'
let text = 'Descrição'
let titulo = 'Título'

//Selecionando os elementos que queremos manipular
const infoCard = document.getElementById('info1')
const tituloCard = document.getElementById('titulo1')
const imgCard = document.getElementById('img1')

//Fazendo as manipulações
imgCard.setAttribute('src', src)
infoCard.textContent = text
tituloCard.textContent = titulo