async function chama() {
  await import("./script.js");
}

class Projeto extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    chama();
    this.innerHTML = `
      <section class="projetos">
        <h2>Projetos</h2>
        <ul id="projeto_conteudo">
        </ul>
      </section>
    `;
  }
}

customElements.define("projeto-component", Projeto);
