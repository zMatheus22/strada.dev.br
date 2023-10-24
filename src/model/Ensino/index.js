async function chamada() {
  await import("./script.js");
}

class Ensino extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    chamada();
    this.innerHTML = `
    <section>
      <h2>Ensino</h2>
      <ul id="ensino">
      </ul>
    </section>
      `;
  }
}

customElements.define("ensino-component", Ensino);
