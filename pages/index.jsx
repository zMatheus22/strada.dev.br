import HorizontalCard from "../components/HorizontalCard.jsx";
import BaseLayout from "../layouts/BaseLayout.jsx";

function Home() {
  return (
    <BaseLayout sideBarActiveItemID="home">
      <div className="pb-12 mt-5">
        <div className="text-xl py-1">Hey there 👋</div>
        <div className="text-5xl font-bold">I'm Matheus Vinicyus Strada</div>
        <div className="text-3xl py-3 font-bold">
          Software Analysis and Development Student
        </div>
        <div className="py-2">
          <text className="text-lg">
            This is a personal portfolio, using NextJS, ReactJS, and Tailwind
            CSS
          </text>
        </div>
        <div className="mt-8">
          <a
            className="btn"
            href="https://www.linkedin.com/in/matheus-vinicyus-strada/"
            target="_blank"
          >
            Let's connect!
          </a>
          <a
            className="btn btn-outline ml-5"
            href="https://github.com/zMatheus22?tab=repositories"
            target="_blank"
          >
            See my repositories
          </a>
        </div>
      </div>

      <div>
        <div className="text-3xl w-full font-bold mb-2">
          My last projects {"</>"}
        </div>
      </div>

      <HorizontalCard
        title="Demo Project 1"
        img="/post_img.webp"
        format="webp"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        url="#"
        badge="FOOS"
      />

      <div className="divider my-0"></div>

      <HorizontalCard
        title="Demo Project 1"
        img="/post_img.webp"
        format="webp"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        url="#"
        badge="NEW"
      />
    </BaseLayout>
  );
}

export default Home;
