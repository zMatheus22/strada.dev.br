import {
  createListaCurso,
  createNomeCurso,
  createInstituicao,
  createPerildo,
} from "./create.js";

const ensino = document.getElementById("ensino");

const loadEstudo = (cursos) => {
  cursos.forEach((curso) => {
    const elementListaCurso = createListaCurso();

    // add Nome do curso/faculdade realizado
    elementListaCurso.appendChild(createNomeCurso(curso));
    // add Nome da Instituição
    elementListaCurso.appendChild(createInstituicao(curso));
    // add Perildo do curso
    elementListaCurso.appendChild(createPerildo(curso));

    ensino.appendChild(elementListaCurso);
  });
};

fetch("../../../escolaridade.json")
  .then((response) => response.json())
  .then(loadEstudo);
