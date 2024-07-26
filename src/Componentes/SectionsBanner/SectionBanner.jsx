import Data from "../Data/Data";
import "./SectionBanner.css";

const SectionBanner = () => {
  return (
    <section className="container-section-banner">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lemon&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lemon&family=Roboto+Flex:opsz,wght@8..144,100..1000&family=Sofia&display=swap"
        rel="stylesheet"
      />
      {Data.find((e) => e.sectionBanner).sectionBanner.map(
        ({ title, description, img, button }, index) => (
          <div
            className={
              title === "Meninos"
                ? "container-card-item-section-banner-meninos"
                : "container-card-item-section-banner-meninas"
            }
            key={index}
          >
            <div className="container-card-item-section-banner">
              <div className="container-card-item-section-banner-p1">
                <h2>{title}</h2>
                <p>{description}</p>
                <div
                  className={
                    title === "Meninos"
                      ? "container-card-item-section-banner-meninos-button button"
                      : "container-card-item-section-banner-meninas-button button"
                  }
                >
                  <a href="//">{button}</a>
                </div>
              </div>
              <img src={img} alt="" />
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default SectionBanner;
