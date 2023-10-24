class Menu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <menu>
      <nav>
        <ul>
          <li>
            <a href="#redeSocial" target="_self">
              RedeSocial
            </a>
          </li>
        </ul>
      </nav>
    </menu>
    `;
  }
}

customElements.define("menu-component", Menu);
