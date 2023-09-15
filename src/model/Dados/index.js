export function Dados(props) {
  return (
    <>
      <img width="120px" src={props.imgPerfil} />
      <h1>{props.nome}</h1>
      <p>{props.idade} Anos</p>
    </>
  );
}
