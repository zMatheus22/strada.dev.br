const today = new Date();

function Footer() {
  return (
    <footer className="footer footer-center block mb-5 pt-10">
      <div className="pb-2">
        &copy; {today.getFullYear()} Matheus Vinicyus Strada
      </div>
      <div className="inline opacity-75">
        Developed by{" "}
        <a
          target="_blank"
          className="font-bold"
          href="https://github.com/zMatheus22/strada.dev.br"
        >
          Matheus Vinicyus Strada
        </a>{" "}
        using{" "}
        <a
          href="https://astrofy-template.netlify.app/"
          target="_blank"
          className="font-bold"
        >
          Astrofy Template ⚡️ Adapter for React
        </a>
      </div>
    </footer>
  );
}

export default Footer;
