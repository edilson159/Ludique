import Data from "../Data/Data";
import "./BannerDesktop.css";

const BannerDesktop = () => {
  return (
    <section className="container-banner-desktop">
      {Data.find((e) => e.bannerDesktop).bannerDesktop.map(
        ({ img, title, button, link }, index) => (
          <div className="container-card-banner-desktop" key={index}>
            <img
              className="container-card-banner-desktop-img"
              src={img}
              alt=""
            />
            <div className="container-card-banner-desktop-description">
              <div className="container-card-banner-desktop-description-item">
                <h2 className="container-card-banner-desktop-title">{title}</h2>
                <div className="container-card-banner-desktop-button">
                  <a
                    className="container-card-banner-desktop-button-item"
                    href={link}
                  >
                    {button}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default BannerDesktop;
