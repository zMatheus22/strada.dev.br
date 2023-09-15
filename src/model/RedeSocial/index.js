export function RedeSocial(props) {
  return (
    <a href={props.link} target="_blank" rel="externos">
      <li className="link">
        <p>{props.site}</p>
      </li>
    </a>
  );
}
