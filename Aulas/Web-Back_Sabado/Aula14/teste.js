import { v4 as geradorID} from 'uuid'

const novoItem = {
    id: geradorID(),
    nome: "Poção de Cura",
    quantidade: 3
}

console.log("Novo item cadastrado com ID seguro: ")
console.log(novoItem)
