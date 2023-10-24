async function chamada() {
  await import("../../model/Menu/index.js");
}

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    chamada();

    this.innerHTML = `
      <header>
        <menu-component></menu-component>
      </header>
    `;
  }
}

customElements.define("header-component", Header);
