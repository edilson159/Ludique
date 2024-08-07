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
    slidesToShow: 4.69,
    slidesToScroll: 4.69,
    initialSlide: 0,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 2.69,
          slidesToScroll: 2.69,
          dots:true,
        },
      },
    ]
  };

  return (
    <section className="container-social">
      <link
        href="https://db.onlinewebfonts.com/c/fc2fb6bfda3f4ab8a893ef037bcf3947?family=Town+10+Display+W05+Black"
        rel="stylesheet"
      />
      {Data.find((e) => e.social).social.map(
        ({ title, button, icon, link, imgs }, index) => (
          <div className="container-card-social" key={index}>
            <div className="container-card-social-header">
            <div className="container-icon">

            </div>
              <div className="container-card-social-header-item">
                
                      <img
                        className="container-card-social-icon"
                        
                        src={icon}
                        alt=""
                      />
                <h2 className="container-card-social-title">{title}</h2>
                <a className="container-card-social-button" href={link}>
                  {button}
                </a>
              </div>
              <div className="container-icon">

              </div>
              
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
