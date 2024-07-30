import Data from "../Data/Data";
import "./SectionBanner3.css";

const SectionBanner3 = () => {
  return (
    <section className="container-section-banner-3">
      <div className="container-card-section-banner-3">
        {Data.find((e) => e.sectionBanner3).sectionBanner3.map(
          ({ img, name }, index) => (
            <div className="container-card-section-banner-3-item" key={index}>
              <img
                className="container-card-section-banner-3-img"
                src={img}
                alt=""
              />
              <div className="container-card-section-banner-3-name">
                <a
                  className="container-card-section-banner-3-name-item"
                  href="//"
                >
                  {name}
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default SectionBanner3;
