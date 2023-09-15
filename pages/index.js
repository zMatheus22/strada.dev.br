import Head from "next/head";
import { Rodape } from "../src/Rodape";
import { Corpo } from "../src/Corpo";

function Home() {
  return (
    <>
      <Head>
        <title>Matheus Vinicyus Strada</title>
        <link rel="stylesheet" href="styles.css"></link>
      </Head>
      <Corpo />
      <Rodape nome="Matheus Vinicyus Strada" />
    </>
  );
}

export default Home;
