import { createListaRede, createRede, createUser } from "./create.js";

const redeSocial = document.getElementById("redeSocial");

const loadRedeSocial = (redeSociais) => {
  redeSociais.forEach((rede) => {
    const elementListaRede = createListaRede();
    const elementRede = createRede(rede);

    // add Link das redes
    elementRede.appendChild(createUser(rede));
    // add Lista de rede social
    elementListaRede.appendChild(elementRede);

    // add redes sociais no HTML
    redeSocial.appendChild(elementListaRede);
  });
};

fetch("../../../redeSocial.json")
  .then((response) => response.json())
  .then(loadRedeSocial);
