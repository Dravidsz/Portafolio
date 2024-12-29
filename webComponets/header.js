class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }


    connectedCallback() {

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './style.css';

        this.shadowRoot.appendChild(link);


        this.shadowRoot.innerHTML += `
              <header>
                <div class="logo">
                  <h2 class="logo-text">D R A V I D Z <span class="logo-dot">.</span></h2>
                </div>
                <div class="nav-links">
                  <a href="index.html" class="nav-link-a">Inicio</a>
                  <a href="trabajos.html" class="nav-link-a">Trabajo</a>
                  <a href="habilidades.html" class="nav-link-a">Habilidades</a>
                  <a href="contacto.html" class="nav-link-a">Contacto</a>
                </div>
                <button class="btn-whatsapp">
                  <a href="https://wa.me/+50762969217" target="_blank">
                    <i class="">Whatsapp</i>
                  </a>
                </button>
              </header>
            `;
    }



}

window.customElements.define('header-component', Header);