// let nome = "Ana Bárbara"

// console.log(nome)
// ex 01:
// 1. O Boas-vindas Personalizado: 
// Crie uma variável para armazenar o nome de 
// um aluno e outra para o nome de um curso. 
// Exiba no console a frase: 
// "Olá [nome], bem-vindo ao curso de [curso]!".

// let nome = "João"
// let curso = "Programação"

// console.log("Olá " + nome + ", bem-vindo ao curso de " + curso + "!")

// ex 02:
// 2. Calculadora de Idade Canina:
// Crie uma variável com a idade de um cachorro e calcule a idade "humana" 
// (multiplicando por 7). Exiba o resultado.

// let idade = 6;

// let resultado_idade = idade * 7

// console.log("A idade do Sammy é " + resultado_idade)

// 3. Sistema de Pontuação:
// Um jogador começa com 100 pontos. Ele ganha um bônus de 20% após uma missão.
//  Crie as variáveis, faça o cálculo e mostre o novo total.

// 4. Filtro de Idade:
// Crie uma variável idade. Se for 18 ou mais, exiba "Acesso liberado".
//  Caso contrário, exiba "Acesso bloqueado: menor de idade".

// 5. Medidor de Temperatura:
// Crie uma variável temperatura. Se for maior que 30, exiba "Está calor!". 
// Se for entre 15 e 30, "Clima agradável". Se for menor que 15, "Está frio!".

let temperatura = 10

if(temperatura > 30){
    console.log("Está calor")
}
else if(temperatura >= 15 && temperatura <= 30){
    console.log("Clima agradavél")
} else {
    console.log("Está frio")
}

// 6. Login Simples:
// Defina uma variável senhaCorreta = "1234". 
// Crie uma variável tentativa. Se forem iguais, 
// exiba "Login realizado!", se não, "Senha incorreta".

// 7. Contador de Lançamento de Foguete (for):
// Crie um laço que conte de 10 até 0 e, no final, exiba "Decolar! 🚀".

for(let i = 10; i>= 0; i--){
    console.log(i)
}


