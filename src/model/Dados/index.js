async function chamada() {
  await import("../Ensino/index.js");
  await import("../RedeSocial/index.js");
}

class Dados extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    chamada();

    const ano = new Date().getFullYear();
    const idade = ano - 2002;
    const imgSRC = "../../public/Matheus.jpeg";

    this.innerHTML = `
      <section id="user">
        <section id="informacao">
          <img src="${imgSRC}" alt="Imagem de perfil" />
          <h1>Matheus Vinicyus Strada</h1>
          <p>${idade} Anos</p>
          <o class="bi bi-geo-alt-fill"> Cascavel - PR</p>
        </section>
        <hr />
        <ensino-component></ensino-component>
        <hr />
        <rede-social-component></rede-social-component>
      </section>
    `;
  }
}

customElements.define("dados-component", Dados);
