import Data from "../Data/Data";
import UseContext from "../Hook/UseContext";
import "./PresentLudique.css";

const PresentLudique = () => {
  const { showBlockDesktop } = UseContext();
  return (
    <section className="container-present-ludique">
      {Data.find((e) => e.presentLudique).presentLudique.map(
        ({ title, images, description, link, button }, index) => (
          <div key={index} className="container-card-present-ludique">
            {images.map(({ img }, index) =>
              showBlockDesktop
                ? img !== "../img/imgPresentDesk.png" && (
                    <img
                      key={index}
                      className="container-card-present-ludique-img"
                      src={img}
                      alt=""
                    />
                  )
                : img === "../img/imgPresentDesk.png" && (
                    <img
                      key={index}
                      className="container-card-present-ludique-img"
                      src={img}
                      alt=""
                    />
                  )
            )}
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
