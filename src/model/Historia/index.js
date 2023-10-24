class Historia extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <article>
        <h2>História</h2>
        <p>
        Sou formado em Técnico em Informática pelo IFPR (Instituto Federal do Paraná). Durante essa formação, desenvolvi trabalhos acadêmicos nas áreas de programação, banco de dados e empreendedorismo. Após concluir o ensino médio, adquiri experiência profissional na área de transporte e logística, onde fui responsável por tarefas como gestão de documentos fiscais de viagem, elaboração de relatórios e atendimento ao cliente. Essa experiência me permitiu aprimorar habilidades e qualidades, tais como pensamento analítico, planejamento e comunicação.
        </p>
      </article>
    `;
  }
}

customElements.define("historia-component", Historia);
