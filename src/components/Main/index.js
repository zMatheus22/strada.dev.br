async function chamada() {
  await import("../../model/Dados/index.js");
  await import("../../model/Projeto/index.js");
  await import("../../model/Historia/index.js");
}

class Main extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    chamada();
    this.innerHTML = `
      <main>
        <dados-component></dados-component>
        <historia-component></historia-component>
        <projeto-component></projeto-component>
      </main>
    `;
  }
}

customElements.define("main-component", Main);
