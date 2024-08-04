import Slider from "react-slick";
import Data from "../Data/Data";
import "./BannerDesktop.css";

const BannerDesktop = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
  };
  return (
    <section className="container-banner-desktop">
      <Slider {...settings}>
        {Data.find((e) => e.bannerDesktop).bannerDesktop.map(
          ({ img, title, button, link }, index) => (
            <div className="container-card-banner-desktop" key={index}>
              <img
                className="container-card-banner-desktop-img"
                src={img}
                alt=""
              />
              <div className="container-card-banner-desktop-description">
                <div className="container-card-banner-desktop-description-item">
                  <h2 className="container-card-banner-desktop-title">
                    {title}
                  </h2>
                  <div className="container-card-banner-desktop-button">
                    <a
                      className="container-card-banner-desktop-button-item"
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
      </Slider>
    </section>
  );
};

export default BannerDesktop;
