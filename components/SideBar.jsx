import SideBarFooter from "./SideBarFooter.jsx";
import SideBarMenu from "./SideBarMenu.jsx";

function SideBar(props) {
  const { sideBarActiveItemID } = props;

  return (
    <div className="drawer-side z-40">
      <label for="my-drawer" className="drawer-overlay"></label>
      <aside className="px-2 pt-2 h-auto min-h-full w-[19rem] bg-base-200 text-base-content flex flex-col">
        <div className="w-fit mx-auto mt-5 mb-6">
          <a href="/">
            <div className="avatar transition ease-in-out hover:scale-[102%] block m-auto">
              <div className="w-[8.5rem]">
                <img
                  className="mask mask-circle"
                  format="jpeg"
                  width={300}
                  height={300}
                  src="profile.jpeg"
                  alt="Profile image"
                />
              </div>
            </div>
          </a>
        </div>
        <SideBarMenu sideBarActiveItemID={sideBarActiveItemID} />
        <SideBarFooter />
      </aside>
    </div>
  );
}

export default SideBar;
