import Slider from "react-slick";
import "./ShowCaseBenefit.css";
import Data from "../Data/Data";

const ShowCaseBenefit = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="container-showcase-benefit">
      <div className="container-card-showcase-benefit">
        <Slider {...settings}>
          {Data.find((e) => e.showcaseBenefit).showcaseBenefit.map(
            ({ title, name, img }, index) => (
              <div key={index}>
                <div className="container-card-showcase-benefit-item">
                  <div className="container-card-showcase-benefit-img">
                    <img
                      className="container-card-showcase-benefit-img-item"
                      src={img}
                      alt=""
                    />
                  </div>
                  <div className="container-card-showcase-benefit-item-p1">
                    <h2>{title}</h2>
                    <p>{name}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </Slider>
      </div>
    </section>
  );
};

export default ShowCaseBenefit;
