import Head from "next/head";
import { Header } from "../src/body/Header";
import { Main } from "../src/body/Main";
import { Footer } from "../src/body/footer";

function Home() {
  return (
    <>
      <Head>
        <title>Matheus Vinicyus Strada</title>
      </Head>

      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
