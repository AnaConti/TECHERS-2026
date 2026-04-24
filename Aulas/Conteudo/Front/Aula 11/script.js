const form = document.querySelector("#social-form");


form.addEventListener("submit", function(event) {
    event.preventDefault();

    // 1. Capturar valores
    const nome = document.querySelector("#nome").value;
    const usuario = document.querySelector("#usuario").value;
    const bio = document.querySelector("#bio").value;
    const tema = document.querySelector("#tema").value;

    // 2. Criar Elementos
    const novoCard = document.createElement("div");
    novoCard.classList.add("card", tema); // Adiciona a classe base e a do tema escolhido

    // Criar conteúdo interno
    novoCard.innerHTML = `
        <button class="btn-excluir">X</button>
        <h3>${nome}</h3>
        <small>@${usuario}</small>
        <p>${bio}</p>
        <span class="contador-likes">0 Curtidas</span>
        <br>
        <button class="btn-curtir">❤️ Curtir</button>
    `;

    // 3. Lógica do Botão Curtir (Individual para cada card)
    let curtidas = 0;
    const btnCurtir = novoCard.querySelector(".btn-curtir");
    const spanLikes = novoCard.querySelector(".contador-likes");

    btnCurtir.addEventListener("click", function() {
        curtidas++;
        spanLikes.innerText = `${curtidas} Curtidas`;
    });

    // 4. Lógica do Botão Excluir
    const btnExcluir = novoCard.querySelector(".btn-excluir");
    btnExcluir.addEventListener("click", function() {
        novoCard.remove();
    });

    // 5. Adicionar na Timeline e limpar formulário

    const timeline = document.querySelector("#timeline");
    timeline.prepend(novoCard);
    form.reset();
});

function Criar() {
    const ObjInform = {
        title: document.getElementById("title").value,
        conteudo: document.getElementById("cont").value
    };
    const novaDiv = document.createElement('div');
    const NewTextarea = document.createElement('textarea');
    const Boton = document.createElement('img')
    Boton.src = `X.png`
    Boton.width = 25
    Boton.height = 25
    Boton.classList.add('minha-imagem')
    const Space = document.createElement('br')
    novaDiv.classList.add('minha-classe');
    novaDiv.textContent = ObjInform.title;
    
    NewTextarea.value = ObjInform.conteudo;
    novaDiv.appendChild(Space)
    novaDiv.appendChild(NewTextarea);
    novaDiv.appendChild(Boton)
    document.body.appendChild(novaDiv);
    NewTextarea.readOnly = true;
    console.log("Criado");
}
Button.addEventListener("click", Criar);
Boton.addEventListener("click", () => {
    document.body.removeChild(novaDiv)
})