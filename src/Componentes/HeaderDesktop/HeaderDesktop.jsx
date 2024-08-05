import Data from "../Data/Data";
import UseContext from "../Hook/UseContext";
import "./HeaderDesktop.css";

const HeaderDesktop = () => {
  const { setScroulled, scrolled, setOver, over } = UseContext();

  function togleOver() {
    if (window.scrollY > 40) {
      setOver(!over);
    } else {
      setScroulled(!scrolled);
      setOver(!over);
    }
  }

  return (
    <header
      onMouseEnter={togleOver}
      onMouseLeave={togleOver}
      className={scrolled ? "header-desktop-fixo" : "container-header-desktop"}
    >
      <div className={over ? "header-desktop-active" : ""}>
        <div className={over ? "header-desktop-over" : "header-desktop"}>
          {Data.find((e) => e.headerDesktop).headerDesktop.map(
            ({ images, names, icons, input, placeholder }, index) => (
              <div className="container-card-header-desktop" key={index}>
                {images.map(({ img }, index) =>
                  over
                    ? img !== "../img/logoLudiqueW.png" && (
                        <div
                          key={index}
                          className="container-card-header-desktop-logo"
                        >
                          <img src={img} alt="" />
                        </div>
                      )
                    : img === "../img/logoLudiqueW.png" && (
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
                  {icons.map(({ icon }, index) =>
                    over
                      ? icon === "../img/imgSearchG.png" && (
                          <img
                            className="container-card-header-desktop-input-img"
                            key={index}
                            src={icon}
                            alt=""
                          />
                        )
                      : icon === "../img/iconSearchW.png" && (
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
                  {icons.slice(2, 5).map(({ icon }, index) => (
                    <img key={index} src={icon} alt="" />
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderDesktop;
