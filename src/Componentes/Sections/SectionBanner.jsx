import Data from "../Data/Data";
import UseContext from "../Hook/UseContext";
import "./SectionBanner.css";

const SectionBanner = () => {
  const { showBlockDesktop } = UseContext();
  return (
    <section className="container-section-banner">
      <div className="container-card-section-banner">
        {Data.find((e) => e.sectionBanner)
          .sectionBanner.slice(0, 2)
          .map(({ title, description, img, button }, index) => (
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
                <img
                  className="container-card-item-section-banner-img"
                  src={img}
                  alt=""
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default SectionBanner;
