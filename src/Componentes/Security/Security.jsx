import Data from "../Data/Data";
import "./Security.css";

const Security = () => {
  return (
    <section className="container-security">
      {Data.find((e) => e.security).security.map(({ title, imgs }, index) => (
        <div className="container-card-security" key={index}>
          <h2 className="container-card-security-title">{title}</h2>
          <div className="container-card-security-imgs">
            {imgs.map(({ img }, index) => (
              <div
                key={index}
                className={
                  img === "../img/AMEX.png"
                    ? "container-card-security-imgs-item-amex"
                    : "container-card-security-imgs-item"
                }
              >
                <img
                  className="container-card-security-imgs-item-item"
                  src={img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Security;
