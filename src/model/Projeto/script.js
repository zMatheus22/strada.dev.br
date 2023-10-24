import {
  createProject,
  createImage,
  createNameProject,
  createTags,
} from "./create.js";

const projetoConteudo = document.getElementById("projeto_conteudo");

const loadProjetos = (projetos) => {
  projetos.forEach((projeto) => {
    // criando projeto/âncora
    const elementProjeto = createProject(projeto);
    // add Imagem
    elementProjeto.appendChild(createImage(projeto));
    // add Nome projeto
    elementProjeto.appendChild(createNameProject(projeto));
    // add Tags do projeto
    elementProjeto.appendChild(createTags(projeto));

    projetoConteudo.appendChild(elementProjeto);
  });
};

fetch("../../../projetos.json")
  .then((response) => response.json())
  .then(loadProjetos);
