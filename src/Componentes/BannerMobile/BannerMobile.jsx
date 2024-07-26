import Slider from "react-slick";
import Data from "../Data/Data";
import "./BannerMobile.css";

const BannerMobile = () => {
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
    <section className="container-banner-mobile">
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <div className="container-card-banner-mobile">
        <Slider {...settings}>
          {Data.find((e) => e.bannerMobile).bannerMobile.map(
            ({ image, link, button }, index) => (
              <div key={index}>
                <div className="container-card-banner-mobile-p1">
                  <img src={image} alt="" />
                  {button && (
                    <div className="container-card-banner-mobile-button">
                      <div className="container-card-banner-mobile-button-item">
                        <a href={link}>{button}</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </Slider>
      </div>
    </section>
  );
};

export default BannerMobile;
