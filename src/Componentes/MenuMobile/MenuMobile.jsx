import "./MenuMobile.css";
import UseContext from "../Hook/UseContext";
import ContentMenuMobile from "../ContentMenuMobile/ContentMenuMobile";
import FooterMenuMobile from "../FooterMenuMobile/FooterMenuMobile";

function Drawer({ open }) {
  return (
    <div
      className={`${
        open ? "container-drawer-p" : "container-drawer-"
      } container-drawer`}
    >
      <div className="container-drawer-p1" />
      <div className="container-drawer-p2 ">
        <ContentMenuMobile />
        <FooterMenuMobile />
      </div>
    </div>
  );
}

const MenuMobile = () => {
  const { open, setOpen } = UseContext();

  return (
    <section
      className={
        open ? "container-menu-lateral-open" : "container-menu-lateral"
      }
    >
      <button
        className={open ? "hidden" : "container-menu-hamburguer-open"}
        onClick={() => setOpen(!open)}
      ></button>

      <Drawer setOpen={setOpen} open={open}></Drawer>
    </section>
  );
};

export default MenuMobile;
