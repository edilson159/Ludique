import Data from "../Data/Data";
import "./MeetLudique.css";

const MeetLudique = () => {
  return (
    <section className="container-meet-ludique">
      {Data.find((e) => e.meetLudique).meetLudique.map(
        ({ title, img, description, name, link }, index) => (
          <div key={index} className="container-card-meet-ludique">
            <h2 className="container-card-meet-ludique-title">{title}</h2>
            <img className="container-card-meet-ludique-img" src={img} alt="" />
            <div className="container-card-meet-ludique-description">
              <p className="container-card-meet-ludique-description-item">
                {description}
              </p>
              <a className="container-card-meet-ludique-button" href={link}>
                {name}
              </a>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default MeetLudique;
