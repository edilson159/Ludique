import Data from "../Data/Data";
import "./PresentLudique.css";

const PresentLudique = () => {
  return (
    <section className="container-present-ludique">
      {Data.find((e) => e.presentLudique).presentLudique.map(
        ({ title, img, description, link, button }, index) => (
          <div key={index} className="container-card-present-ludique">
            <img
              className="container-card-present-ludique-img"
              src={img}
              alt=""
            />
            <div className="container-card-present-ludique-description">
              <h2 className="container-card-present-ludique-title">{title}</h2>
              <div className="container-card-present-ludique-description-p1">
                <p>{description}</p>
                <div className="container-card-present-ludique-button">
                  <a
                    className="container-card-present-ludique-button-item"
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

export default PresentLudique;
