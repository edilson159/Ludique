import Data from "../Data/Data";
import UseContext from "../Hook/UseContext";
import "./FooterMenuMobile.css";

const FooterMenuMobile = () => {
  const { actived } = UseContext();
  return (
    <div className={actived ? "hidden" : "container-footer-menu-mobile"}>
      <div className="container-card-footer-menu-mobile">
        {Data.find((e) => e.footerMenuMobile).footerMenuMobile.map(
          ({ image, name }, index) => (
            <div
              key={index}
              className="container-card-footer-menu-lateral-mobile-item"
            >
              <img src={image} alt="" />
              <p>{name}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FooterMenuMobile;
