export function RedeSocial(props) {
  return (
    <a href={props.link} target="_blank" rel="externos">
      <li className="link">
        <img width="30rem" src={props.logo} />
        <p>{props.site}</p>
      </li>
    </a>
  );
}
