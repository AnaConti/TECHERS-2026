const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function autenticarUsuario(email, senha){
    await esperar(1000);

    if(email === "aluno@escola.com" && senha === "1234"){
        console.log("Usuario autenticado!")

        return {nome: "Ana", id: 1};
    } else {
        throw "Email ou senha incorretos"
    }
}

async function buscaFavoritos(usuarioId){
    await esperar(1500)
    console.log("Buscando lista de favoritos")
    return ["Supernatural", "The walking dead", "The office"]
}

async function recomendaarFavoritos(favoritos){
    await esperar(500)
    console.log("Gerando recomendação baseada em: " + favoritos[2])
    return "TBBT"
}


async function carregarInterface() {
  console.log("🚀 Carregando sistema de streaming...");

  // 1. Tente (try) autenticar o usuário "aluno@escola.com" com a senha "1234"
  // 2. Aguarde (await) a autenticação para pegar o ID do usuário
  // 3. Aguarde buscar os favoritos usando esse ID
  // 4. Aguarde a recomendação de filme baseada nos favoritos
  // 5. Mostre o filme recomendado no console
  // 6. Capture (catch) qualquer erro e exiba na tela
  // 7. No final (finally), diga "Sessão encerrada."
}

carregarInterface();



