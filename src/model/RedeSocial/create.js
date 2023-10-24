export const createListaRede = () => {
  const elementListaRede = document.createElement("li");
  elementListaRede.classList.add("redeSocial");

  return elementListaRede;
};

export const createRede = (rede) => {
  const elementRede = document.createElement("a");
  elementRede.setAttribute("href", rede.link);
  elementRede.setAttribute("target", "_blank");

  return elementRede;
};

export const createUser = (rede) => {
  const elementUser = document.createElement("p");
  elementUser.classList.add(rede.icon);
  elementUser.innerText = rede.user;

  return elementUser;
};
