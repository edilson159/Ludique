import "./MenuMobile.css";
import UseContext from "../Hook/UseContext";

function Drawer({ open }) {
  return (
    <div
      className={`${
        open ? "container-drawer-p" : "container-drawer-"
      } container-drawer`}
    >
      <div className="container-drawer-p1" />
      <div className="container-drawer-p2 "></div>
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
        className={
          open
            ? "container-menu-hamburguer-close"
            : "container-menu-hamburguer-open"
        }
        onClick={() => setOpen(!open)}
      ></button>

      <Drawer open={open}></Drawer>
    </section>
  );
};

export default MenuMobile;
