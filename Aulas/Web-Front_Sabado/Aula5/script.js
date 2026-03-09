// document.getElementById(desc1) // retorna o elemento com o id passado
// document.getElementsByTagName(p) // retorna um vetor/array com as tags passadas
// document.getElementsByClassName(classe) // retorna um array com todos os elementos dessa classe

// const titulo = document.getElementById("titulo1")
// titulo.textContent = "Titulo add com JS"
// titulo.setAttribute("class", "titulo_base")
// titulo.style.color = "red"

// let src = "cachorro.png"
// let text = "Um cachorro muito fofo"
// let titulo = "Pipoca"

// const infoCard = document.getElementById('info1')
// const tituloCard = document.getElementById('titulo1')
// const imgCard = document.getElementById('img1')

// imgCard.setAttribute('src', src)
// infoCard.textContent = text
// tituloCard.textContent = titulo

// const nomes = ["Ana", "David","Luis", "Thither"]

// nomes[0] = "Barbara"
// nomes[4] = "Matheus"

const dataInfo = [
    "Pikachu: O primeiro Pokémon de Ash, dado pelo Professor Carvalho. Inicialmente desconfiado, recusava-se a entrar na Pokébola, mas tornou-se um amigo leal após Ash protegê-lo de Spearow.",
    "Caterpie: O primeiro Pokémon capturado por Ash. Evoluiu rapidamente para Metapod e, posteriormente, para Butterfree. Ash o libertou para que pudesse migrar e encontrar um parceiro.",
    "Pidgeotto: O segundo Pokémon capturado por Ash, muito utilizado em batalhas. Evoluiu para Pidgeot no último episódio da temporada para proteger um bando de Pidgey, sendo deixado por Ash na Floresta de Pallet.",
    "Bulbasaur: Capturado por Ash após salvá-lo da Equipe Rocket. Antes da captura, era o guardião de uma vila de Pokémon abandonados, demonstrando um forte senso de responsabilidade.",
    "Charmander: Encontrado por Ash abandonado pelo seu treinador em uma pedra, com sua cauda prestes a se apagar. Após ser salvo, tornou-se um dos Pokémon mais fortes de Ash, evoluindo para Charmeleon e, depois, para o desobediente Charizard.",
    "Squirtle: Líder de uma gangue de Squirtle que causava travessuras. Ash o capturou após ajudá-lo a salvar sua gangue da Equipe Rocket, e ele se tornou um membro confiável do time.",
    "Krabby: Foi o primeiro Pokémon de Ash a ser enviado para o Professor Carvalho, pois Ash já estava com sua equipe cheia. Durante a Liga Índigo, evoluiu para Kingler em uma batalha.",
    "Haunter: Ash fez amizade com este Pokémon na Cidade de Lavender para usá-lo contra a Líder de Ginásio Sabrina. Após vencer a batalha, Haunter decidiu ficar com Sabrina.",
    "Primeape: Inicialmente era um Mankey que irritou Ash roubando seu boné. Durante uma briga com a Equipe Rocket, evoluiu para Primeape. Mais tarde, Ash o deixou com um treinador para se aperfeiçoar em golpes de luta.",
    "Muk: Líder de um grupo de Grimer que poluía uma usina. Ash o capturou, mas seu fedor era tão forte que precisou mantê-lo no laboratório do Professor Carvalho, de onde costuma escapar para cumprimentar o professor."
];

const headings = [
    "Pikachu",
    "Caterpie",
    "Pidgeotto",
    "Bulbasaur",
    "Charmander",
    "Squirtle",
    "Krabby",
    "Haunter",
    "Primeape",
    "Muk"
];

const imgSrc = [
    'cachorro.png',
    'cachorro.png',
    'cachorro.png',
    'cachorro.png',
    'cachorro.png',
    'cachorro.png',
    'cachorro.png',
    'cachorro.png',
    'cachorro.png',
    'cachorro.png'
]

const imgCard = document.getElementsByClassName('img-card')
const titulo = document.getElementsByClassName('titulo')
const info = document.getElementsByClassName('info')

for(let i = 0; i < 10; i++){
    imgCard[i].setAttribute("src", imgSrc[i])
    titulo[i].textContent = headings[i]
    info[i].textContent = dataInfo[i]
}
