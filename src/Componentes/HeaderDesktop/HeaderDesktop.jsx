import Data from "../Data/Data";
import HeaderBenefitDesktop from "../HeaderBenefitDesktop/HeaderBenefitDesktop";
import UseContext from "../Hook/UseContext";
import "./HeaderDesktop.css";

const HeaderDesktop = () => {
  const { scrolled, setOver, over } = UseContext();

  function togleOver() {
    setOver(!over);
  }

  return (
    <header
      onMouseEnter={togleOver}
      onMouseLeave={togleOver}
      className="container-header-desktop"
    >
      <HeaderBenefitDesktop />
      <div className={scrolled ? "header-desktop-fixo" : "header-desktop"}>
        {Data.find((e) => e.headerDesktop).headerDesktop.map(
          ({ images, names, icons, input, placeholder }, index) => (
            <div className="container-card-header-desktop" key={index}>
              {images.map(({ img }, index) =>
                over
                  ? img === "../img/logoLudiqueW.png" && (
                      <div
                        key={index}
                        className="container-card-header-desktop-logo"
                      >
                        <img src={img} alt="" />
                      </div>
                    )
                  : img !== "../img/logoLudiqueW.png" && (
                      <div
                        key={index}
                        className="container-card-header-desktop-caramelo"
                      >
                        <img src={img} alt="" />
                      </div>
                    )
              )}
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
      </div>
    </header>
  );
};

export default HeaderDesktop;
