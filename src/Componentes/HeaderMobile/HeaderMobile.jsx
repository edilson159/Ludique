import { useState } from "react";
import Data from "../Data/Data";
import "./HeaderMobile.css";
import MenuMobile from "../MenuMobile/MenuMobile";

const HeaderMobile = () => {
  const [over, setOver] = useState(true);

  function togleOver() {
    setOver(!over);
  }
  return (
    <header
      onMouseEnter={togleOver}
      onMouseLeave={togleOver}
      className="container-header-mobile"
    >
      {Data.find((e) => e.headerMobile).headerMobile.map(
        ({ images, icons, placeholder, input }, index) => (
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
                  ? image === "../img/logoLudiqueBlack.png" && (
                      <img
                        key={index}
                        className="container-card-header-mobile-logo-black"
                        src={image}
                        alt=""
                      />
                    )
                  : image !== "../img/logoLudiqueBlack.png" && (
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
                      icon === "../img/puppet.png" ? "icon-puppet" : "icon-bag"
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
    </header>
  );
};

export default HeaderMobile;
