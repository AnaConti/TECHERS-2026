const imgSrc = [
  'pikachu.jpg',
  'squirtle.jpg',
  'caterpie.jpg',
  'fearow.jpg',
  'vulpix.jpg',
  'mankey.jpg',
  'arbok.jpg',
  'metapod.jpg',
  'mewtwo.jpg',
  'jigglypuff.jpg'
];

const dataInfo = [
  "Um pequeno Pokémon elétrico que armazena eletricidade em suas bochechas vermelhas. É o primeiro Pokémon de Ash e seu companheiro mais leal.",
  "Um Pokémon tartaruga que pode disparar jatos de água de sua boca. Ele tem uma evolução teimosa, mas é muito leal ao seu treinador.",
  "Um Pokémon do tipo inseto que cospe cordas pegajosas para imobilizar seus oponentes. É conhecido por sua habilidade de evoluir rapidamente.",
  "Um Pokémon pássaro selvagem e agressivo que ataca com ataques de vento cortante. Lidera bandos de Spearow e Pidgey.",
  "Um Pokémon raposa que carrega ossos radioativos em seu corpo. Conhecido por suas habilidades psíquicas e chamas misteriosas.",
  "Um Pokémon macaco que começa a espirrar quando está resfriado. Sua cauda está sempre em chamas e quanto mais saudável, maior a chama.",
  "Um Pokémon cobra que usa sua língua afiada para farejar o perigo. Conhecido por sua velocidade e por envenenar oponentes com presas afiadas.",
  "Um Pokémon com uma casca dura que prendeu a Equipe Rocket diversas vezes. Extremamente leal, evolui para proteger seus amigos.",
  "Um Pokémon misterioso que aparece raramente e pode controlar o tempo. É um dos Pokémon lendários mais poderosos de Kanto.",
  "Um Pokémon que adora cantar e pode induzir qualquer um ao sono com sua melodia hipnótica. Tem uma rivalidade amigável com seu treinador.",
];

const headings = [
  "Pikachu",
  "Squirtle",
  "Caterpie",
  "Fearow",
  "Vulpix",
  "Mankey",
  "Arbok",
  "Metapod",
  "Mewtwo",
  "Jigglypuff",
];

//Cada constante dessa agora recebe um vetor com todos os elementos de cada classe
const imgCard = document.getElementsByClassName('img-card')
const titulo = document.getElementsByClassName('titulo')
const info = document.getElementsByClassName('info')

//É preciso que todas as informações estejam nas ordens correspondentes em cada vetor
for(let i =0; i<10; i++){
    imgCard[i].setAttribute("src", imgSrc[i])
    titulo[i].textContent = headings[i]
    info[i].textContent = dataInfo[i]
}


