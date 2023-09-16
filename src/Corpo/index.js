import { Dados } from "../model/Dados";
import { RedeSocial } from "../model/RedeSocial";

export function Corpo() {
  return (
    <main>
      <Dados
        imgPerfil="https://scontent.fcac2-1.fna.fbcdn.net/v/t39.30808-6/317638315_2044050712452292_2656827919324557991_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHn2qrZnW505zKz3OcQltzgAjuNzewJ6q4CO43N7Anqru7p8unakEV8Rx-XCTaJgIiR-IDgV63dpJzdx8s-qegI&_nc_ohc=8cTbj_dRY0UAX-mHvpg&_nc_ht=scontent.fcac2-1.fna&oh=00_AfBDgRJ0tQW0PinmR_C0oLN2VXAzvKl4zcYUa2bzRgcWww&oe=6508C4DD"
        nome="Matheus Vinicyus Strada"
        idade="20"
        faculdade="Analista e desenvolvimento de sistemas & Técnico em Informática - T.I."
      />
      <ul>
        <RedeSocial
          link="https://github.com/zMatheus22"
          site="Github"
          logo="github.svg"
        />
        <RedeSocial
          link="https://www.linkedin.com/in/matheus-vinicyus-strada/"
          logo="linkedin.svg"
          site="LinkedIn"
        />
      </ul>
    </main>
  );
}
