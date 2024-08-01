import Slider from "react-slick";
import Data from "../Data/Data";
import "./Social.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
</style>;

const Social = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2.69,
    slidesToScroll: 2.69,
    initialSlide: 0,
    arrows: false,
    dots: false,
  };
  return (
    <section className="container-social">
      <link
        href="https://db.onlinewebfonts.com/c/fc2fb6bfda3f4ab8a893ef037bcf3947?family=Town+10+Display+W05+Black"
        rel="stylesheet"
      />
      {Data.find((e) => e.social).social.map(
        ({ title, button, icons, link, imgs }, index) => (
          <div className="container-card-social" key={index}>
            <div className="container-card-social-header">
              {icons.map(
                ({ icon }, index) =>
                  icon === "../img/iconSocial.png" && (
                    <div key={index} className="line">
                      <img src={icon} alt="" />
                    </div>
                  )
              )}
              <div className="container-card-social-header-item">
                {icons.map(
                  ({ icon }, index) =>
                    icon !== "../img/iconSocial.png" && (
                      <img
                        className="container-card-social-icon"
                        key={index}
                        src={icon}
                        alt=""
                      />
                    )
                )}

                <h2 className="container-card-social-title">{title}</h2>
                <a className="container-card-social-button" href={link}>
                  {button}
                </a>
              </div>
              {icons.map(
                ({ icon }, index) =>
                  icon === "../img/iconSocial.png" && (
                    <div key={index} className="line">
                      <img src={icon} alt="" />
                    </div>
                  )
              )}
            </div>
            <div className="container-card-social-imgs">
              <Slider {...settings}>
                {imgs.map(({ img }, index) => (
                  <div className="container-card-social-imgs-item" key={index}>
                    <div className="container-card-social-img">
                      <img
                        className="container-card-social-img-item"
                        src={img}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Social;
