const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function autenticarUsuario(email, senha) {
    await esperar(1000);
    if (email === "aluno@escola.com" && senha === "1234") {
        console.log("Usuario autenticado!")
        return { nome: "Ana", id: 1 };
    } else {
        throw "usuario nao encontrado, email ou senha incorretos!"
    }
}

async function buscarFavoritos(userId) {
    await esperar(500)

    console.log("Buscando favoritos...")
    return ["Terror", "Comedia", "Fantasia"]
}

async function recomendarFilme(categorias) {
    await esperar(500)

    console.log("Gerando uma lista de recomendacoes baseada em: " + categoria[1])
    return "As branquelas";
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
