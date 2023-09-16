export function Rodape(props) {
  const data = new Date();
  const ano = data.getFullYear();
  return (
    <footer>
      <img
        width="40rem"
        src="https://cdn-icons-png.flaticon.com/512/2827/2827418.png"
      />
      <h4>Em contrução </h4>
      <br />
      <br />
      <h5>
        Desenvolvido por {props.nome} @ {ano}
      </h5>
    </footer>
  );
}
