import BannerShowcase from "../BannerShowcase/BannerShowcase";
import Data from "../Data/Data";
import ShowCaseProducts from "../Showcase/ShowCaseProducts";
import "./ShowcaseAndBanner.css";

const ShowcaseAndBanner = () => {
  return (
    <section className="container-showcase-and-banner">
      <div className="container-card-showcase-and-banner-main">
        {Data.find(
          (e) => e.showcaseProductsAndBanner
        ).showcaseProductsAndBanner.map(
          ({ title, icon, buttons }, index) =>
            title && (
              <div
                className="container-card-showcase-and-banner-header"
                key={index}
              >
                <div className="container-card-showcase-and-banner-header-body">
                  <div className="container-card-showcase-and-banner-header-p1">
                    <img
                      className="container-card-showcase-and-banner-header-p1-img img-1"
                      src={icon}
                      alt=""
                    />
                    <h1 className="container-card-showcase-and-banner-header-p1-title">
                      {title}
                    </h1>
                    <img
                      className="container-card-showcase-and-banner-header-p1-img img-2"
                      src={icon}
                      alt=""
                    />
                  </div>
                  <div className="container-card-showcase-and-banner-header-buttons">
                    {buttons &&
                      Data.find((e) => e.showcaseProductsAndBanner)
                        .showcaseProductsAndBanner.find((e) => e.buttons)
                        .buttons.map(({ button }, index) => (
                          <button key={index}>{button}</button>
                        ))}
                  </div>
                </div>
              </div>
            )
        )}
        <div className="container-card-showcase-and-banner">
          <div className="container-card-showcase-and-banner-banner">
            <BannerShowcase />
          </div>
          <div className="container-card-showcase-and-banner-showcase">
            <ShowCaseProducts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseAndBanner;
