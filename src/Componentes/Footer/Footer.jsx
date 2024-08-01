import Data from "../Data/Data";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="container-footer">
      {Data.find((e) => e.footer).footer.map(
        ({ description, icons }, index) => (
          <div className="container-card-footer" key={index}>
            <p className="container-card-footer-description">{description}</p>
            <div className="container-card-footer-icons">
              {icons.map(({ icon }, index) => (
                <img
                  className="container-card-footer-icon"
                  key={index}
                  src={icon}
                  alt=""
                />
              ))}
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Footer;
