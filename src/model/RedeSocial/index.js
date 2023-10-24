async function chama() {
  await import("./script.js");
}

class RedeSocial extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    chama();
    this.innerHTML = `
    <section class="informacao">
      <h2>Rede Sociais</h2>
      <ul id="redeSocial">
      </ul>
    </section>
      `;
  }
}

customElements.define("rede-social-component", RedeSocial);
