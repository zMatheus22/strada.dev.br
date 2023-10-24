export const createListaCurso = () => {
  const elementListaCurso = document.createElement("li");
  elementListaCurso.classList.add("estudo");

  return elementListaCurso;
};

export const createNomeCurso = (curso) => {
  const elementNomeCurso = document.createElement("h3");
  elementNomeCurso.classList.add(curso.icon);
  elementNomeCurso.innerText = curso.nomeCurso;

  return elementNomeCurso;
};

export const createInstituicao = (curso) => {
  const elementInstituicao = document.createElement("p");
  elementInstituicao.innerText = curso.instituicao;

  return elementInstituicao;
};

export const createPerildo = (curso) => {
  const elementPerildo = document.createElement("p");
  elementPerildo.innerText = `${curso.inicio} - ${curso.fim}`;

  return elementPerildo;
};
