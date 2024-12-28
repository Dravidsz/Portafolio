class footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const link = document.createElement("link");
        link.rel = 'stylesheet';
        link.href = './style.css';
        

        this.shadowRoot.appendChild(link);

        this.shadowRoot.innerHTML +=
            `
            <footer>
                <a href="https://wa.me/+50762969217"><i class="fa-brands fa-whatsapp"></i></a> 
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            </footer>
        `;

    }
}


window.customElements.define("footer-component", footer);