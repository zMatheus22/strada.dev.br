function SideBarMenu() {
  return (
    <ul className="menu grow shrink menu-md overflow-y-auto">
      <li>
        <a className="py-3 text-base" id="home" href="/">
          Home
        </a>
      </li>
      <li>
        <a className="py-3 text-base" id="projects" href="/projects">
          Projects
        </a>
      </li>
      <li>
        <a className="py-3 text-base" id="cv" href="/cv">
          CV
        </a>
      </li>
      <li>
        <a
          className="py-3 text-base"
          href="mailto:matheusv.strada4@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default SideBarMenu;
