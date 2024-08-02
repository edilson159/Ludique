import Data from "../Data/Data";
import "./SectionExclusive.css";

const SectionExclusive = () => {
  return (
    <section className="container-section-exclusive">
      {Data.find((e) => e.exclusiveLudique).exclusiveLudique.map(
        ({ imgs }, index) =>
          imgs.map(
            ({ img }, index) =>
              img !== "../img/imgExclusivoLu.png" && (
                <img
                  className={
                    img === "../img/imgBackgroundLeft.png"
                      ? "img-background-left"
                      : "img-background-right"
                  }
                  key={index}
                  src={img}
                  alt=""
                />
              )
          )
      )}
      {Data.find((e) => e.exclusiveLudique).exclusiveLudique.map(
        ({ imgs, title, button, description, span }, index) => (
          <div className="container-card-section-exclusive" key={index}>
            <div className="container-card-exclusive-header">
              <h2 className="container-card-section-exclusive-title title">
                {title}{" "}
                <span className="container-card-section-exclusive-title-span title">
                  {span}
                </span>
              </h2>
              <p className="container-card-section-exclusive-description">
                {description}
              </p>
            </div>
            {imgs.map(
              ({ img }, index) =>
                img === "../img/imgExclusivoLu.png" && (
                  <img
                    className="container-card-section-exclusive-img"
                    key={index}
                    src={img}
                    alt=""
                  />
                )
            )}
            <div className="container-card-section-exclusive-button">
              <a href="//">{button}</a>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default SectionExclusive;
