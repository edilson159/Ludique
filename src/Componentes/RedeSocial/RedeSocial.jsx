import Data from "../Data/Data";
import "./RedeSocial.css";

const RedeSocial = () => {
  return (
    <section className="container-rede-Social">
      {Data.find((e) => e.redeSocial).redeSocial.map(
        ({ title, imgs }, index) => (
          <div className="container-card-rede-Social" key={index}>
            <h2 className="container-card-rede-Social-title">{title}</h2>
            <div className="container-card-rede-Social-imgs">
              {imgs.map(({ img }, index) => (
                <div
                  key={index}
                  className={
                    img === "../img/AMEX.png"
                      ? "container-card-rede-Social-imgs-item-amex"
                      : "container-card-rede-Social-imgs-item"
                  }
                >
                  <img
                    className="container-card-rede-Social-imgs-item-item"
                    src={img}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default RedeSocial;
