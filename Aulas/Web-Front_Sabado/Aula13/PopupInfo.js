class PopupInfo extends HTMLElement {
    constructor() {
        super();
        // Estabelece a raiz fantasma (Shadow Root) acoplada ao elemento
        this.shadow = this.attachShadow({ mode: 'open' }); 
    }

    connectedCallback() {
        // A geração imperativa dos nós permanece inalterada
        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");

        const icon = document.createElement("span");
        icon.setAttribute("class", "icon");
        icon.setAttribute("tabindex", "0");

        const info = document.createElement("span");
        info.setAttribute("class", "info");

        const text = this.getAttribute("data-text");
        info.textContent = text;

        let imgUrl = this.hasAttribute("img") ? this.getAttribute("img") : "default.png";
        const img = document.createElement("img");
        img.src = imgUrl;
        img.setAttribute("width", "30px");
        icon.appendChild(img);

        // Estilos confinados ao escopo do Shadow DOM
        const style = document.createElement("style");
        style.textContent = `
            .wrapper { position: relative; display: inline-block; }
            .info {
                visibility: hidden; width: 200px; background-color: #333; color: #fff;
                text-align: center; padding: 10px; border-radius: 6px;
                position: absolute; z-index: 1; bottom: 125%; left: 50%;
                margin-left: -100px; opacity: 0; transition: opacity 0.3s;
            }
            .icon:hover + .info { visibility: visible; opacity: 1; }
        `;

        wrapper.appendChild(icon);
        wrapper.appendChild(info);

        // Anexação direcionada exclusivamente à raiz encapsulada
        this.shadow.appendChild(style);
        this.shadow.appendChild(wrapper);
    }
}  

customElements.define("popup-info", PopupInfo);