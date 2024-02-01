import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

import { SITE_TITLE, SITE_DESCRIPTION, TRANSITION_API } from "../config";

function BaseLayout(props) {
  const {
    image,
    title = SITE_TITLE,
    description = SITE_DESCRIPTION,
    includeSidebar = true,
  } = props;

  return (
    <body>
      <div className="bg-base-100 drawer lg:drawer-open">
        <input
          id="my-drawer"
          type="checkbox"
          className="d-none drawer-toggle"
        />
        <div className="drawer-content bg-base-100">
          <Header title={SITE_TITLE} />
          <div className="md:flex md:justify-center">
            <main className="p-6 pt-10 lg:max-w-[900px] max-w-[100vw]">
              {props.children}
            </main>
          </div>
          <Footer />
        </div>
        {includeSidebar && <SideBar />}
      </div>
    </body>
  );
}

export default BaseLayout;
