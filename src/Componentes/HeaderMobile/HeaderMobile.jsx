import Data from "../Data/Data";
import "./HeaderMobile.css";
import MenuMobile from "../MenuMobile/MenuMobile";
import UseContext from "../Hook/UseContext";

const HeaderMobile = () => {
  const { scrolled, setOver, over } = UseContext();

  function togleOver() {
    if (window.scrollY > 40) {
      setOver(over);
    } else {
      setOver(!over);
    }
  }
  return (
    <header
      onMouseEnter={togleOver}
      onMouseLeave={togleOver}
      className={
        scrolled ? "container-header-mobile-fixo" : "container-header-mobile"
      }
    >
      <div
        className={
          over
            ? "container-card-header-mobile-main-active"
            : "container-card-header-mobile-main"
        }
      >
        {Data.find((e) => e.headerMobile).headerMobile.map(
          ({ images, icons }, index) => (
            <div className="container-card-header-mobile" key={index}>
              <div className="container-card-header-mobile-p1">
                <div className="container-card-header-mobile-menu-and-icon-heart">
                  <MenuMobile />
                  {icons.slice(0, 1).map(({ icon }, index) => (
                    <div
                      className="container-card-header-mobile-icon-heart"
                      key={index}
                    >
                      <img
                        className="container-card-header-mobile-icon-heart-img"
                        src={icon}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
                {images.map(({ image }, index) =>
                  over
                    ? image !== "../img/logoLudiqueBlack.png" && (
                        <img
                          key={index}
                          className="container-card-header-mobile-logo-black"
                          src={image}
                          alt=""
                        />
                      )
                    : image === "../img/logoLudiqueBlack.png" && (
                        <img
                          key={index}
                          className="container-card-header-mobile-logo-caramelo"
                          src={image}
                          alt=""
                        />
                      )
                )}
                <div className="container-card-header-mobile-icons">
                  {icons.slice(1, 3).map(({ icon }, index) => (
                    <img
                      className={
                        icon === "../img/puppet.png"
                          ? "icon-puppet"
                          : "icon-bag"
                      }
                      key={index}
                      src={icon}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
          )
        )}
        <div className="container-card-header-mobile-input">
          {Data.find((e) => e.headerMobile).headerMobile.map(
            ({ input, placeholder, icons }, index) => (
              <div
                key={index}
                className="container-card-header-mobile-input-p1"
              >
                <input
                  className="container-card-header-mobile-input-item"
                  type={input}
                  placeholder={placeholder}
                />
                {icons.map(
                  ({ icon }, index) =>
                    icon === "../img/search1.png" && (
                      <img
                        key={index}
                        className="container-card-header-mobile-input-icon"
                        src={icon}
                        alt=""
                      />
                    )
                )}
              </div>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
