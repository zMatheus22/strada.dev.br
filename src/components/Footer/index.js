class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <footer>
            <p>Desenvolvido por Matheus Strada</p>
        </footer>
    `;
  }
}

customElements.define("footer-component", Footer);
