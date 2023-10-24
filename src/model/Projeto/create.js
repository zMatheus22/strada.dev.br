export const createProject = (projeto) => {
  const elementProjeto = document.createElement("a");
  elementProjeto.setAttribute("href", projeto.link);
  elementProjeto.setAttribute("target", "_blank");
  elementProjeto.classList.add("projeto");

  return elementProjeto;
};

export const createImage = (projeto) => {
  const elementPicture = document.createElement("picture");
  const elementImg = document.createElement("img");
  elementImg.setAttribute("src", projeto.imagem);
  elementImg.setAttribute("alt", `Imagem ${projeto.name}`);
  elementPicture.appendChild(elementImg);

  return elementPicture;
};

export const createNameProject = (projeto) => {
  const elementStrong = document.createElement("strong");
  elementStrong.innerText = projeto.name;

  return elementStrong;
};

export const createTags = (projeto) => {
  const elementTags = document.createElement("div");
  projeto.tags.forEach((tag) => {
    const elementTag = document.createElement("span");
    elementTag.innerText = tag;

    elementTags.appendChild(elementTag);
  });

  return elementTags;
};
