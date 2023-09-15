export function Rodape(props) {
  const data = new Date();
  const ano = data.getFullYear();
  return (
    <footer>
      Desenvolvido por {props.nome} @ {ano}
    </footer>
  );
}
