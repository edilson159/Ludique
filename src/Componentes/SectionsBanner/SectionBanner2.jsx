import Data from "../Data/Data";
import "./SectionBanner2.css";

const SectionBanner2 = () => {
  return (
    <section className="container-section-banner-2">
      {Data.find((e) => e.sectionBanner2).sectionBanner2.map(
        ({ img, button }, index) => (
          <div
            key={index}
            className={
              img === "../img/imgBannerMarvel.png"
                ? "container-card-section-banner-2 marvel"
                : "container-card-section-banner-2 disnei"
            }
          >
            <img src={img} alt="" />

            <div
              className={
                img === "../img/imgBannerMarvel.png"
                  ? "container-card-section-banner-2-marvel-button"
                  : "container-card-section-banner-2-disnei-button"
              }
            >
              <button
                className={
                  img === "../img/imgBannerMarvel.png"
                    ? "container-card-section-banner-2-marvel button-item"
                    : "container-card-section-banner-2-disnei button-item"
                }
              >
                {button}
              </button>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default SectionBanner2;
