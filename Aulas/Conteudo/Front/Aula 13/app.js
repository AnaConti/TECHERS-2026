class PopupInfo extends HTMLElement {
    constructor(){
        // O super() invoca o construtor do HTMLElement para que a tag funcione
        super();
    }

    // Método chamado quando o elemento entra no DOM
    connectedCallback(){
        // 1. Criando os elementos internos
        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");

        const icon = document.createElement("span");
        icon.setAttribute("class", "icon");
        icon.setAttribute("tabindex", "0");

        const info = document.createElement("span");
        info.setAttribute("class", "info");

        // 2. Lendo o texto do atributo 'data-text'
        const text = this.getAttribute("data-text");
        info.textContent = text;

        // 3. Lógica da Imagem
        let imgUrl;
        if (this.hasAttribute("img")){
            imgUrl = this.getAttribute("img");
        } else {
            // Usamos uma imagem de placeholder para não aparecer erro de arquivo faltando
            imgUrl = "https://cdn-icons-png.flaticon.com/512/1828/1828787.png"; 
        }

        const img = document.createElement("img");
        img.src = imgUrl;
        img.setAttribute("alt", "Icone de informação");
        img.setAttribute("width", "50px"); // Ajustei para 50px para ficar mais harmônico
        
        // 4. Montando a árvore de elementos (Hierarquia)
        icon.appendChild(img);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);

        // 5. Injetando tudo dentro da tag <popup-info>
        this.appendChild(wrapper);
    }
}  

// Registrando a tag no navegador
customElements.define("popup-info", PopupInfo);