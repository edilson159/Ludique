import Data from "../Data/Data";
import HeaderBenefitDesktop from "../HeaderBenefitDesktop/HeaderBenefitDesktop";
import "./HeaderDesktop.css";

const HeaderDesktop = () => {
  return (
    <section className="container-header-desktop">
      <HeaderBenefitDesktop />
      {Data.find((e) => e.headerDesktop).headerDesktop.map(
        ({ img, names, icons, input, placeholder }, index) => (
          <div className="container-card-header-desktop" key={index}>
            <div className="container-card-header-desktop-logo">
              <img src={img} alt="" />
            </div>
            <div className="container-card-header-desktop-names">
              {names.map(({ name, link }, index) => (
                <a
                  className="container-card-header-desktop-names-item"
                  key={index}
                  href={link}
                >
                  {name}
                </a>
              ))}
            </div>
            <div className="container-card-header-desktop-input">
              <input type={input} name="" placeholder={placeholder} id="" />
              {icons.map(
                ({ icon }, index) =>
                  icon === "../img/iconSearchW.png" && (
                    <img
                      className="container-card-header-desktop-input-img"
                      key={index}
                      src={icon}
                      alt=""
                    />
                  )
              )}
            </div>
            <div className="container-card-header-desktop-icons">
              {icons.map(
                ({ icon }, index) =>
                  icon !== "../img/iconSearchW.png" && (
                    <img key={index} src={icon} alt="" />
                  )
              )}
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default HeaderDesktop;
