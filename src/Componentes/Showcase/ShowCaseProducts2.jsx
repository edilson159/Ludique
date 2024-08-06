import Slider from "react-slick";
import "./ShowCaseProducts2.css";
import Data from "../Data/Data";

const ShowCaseProducts2 = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="container-showcase-products-2">
      <div className="container-card-showcase-products-2-names">
        <div className="container-card-showcase-products-2-names-main">
          {Data.find((e) => e.showcaseProducts2)
            .showcaseProducts2.find((e) => e.names)
            .names.map(
              ({ name }, index) =>
                name !== "VER TODOS >" && (
                  <p
                    key={index}
                    className="container-card-showcase-products-2-names-item"
                  >
                    {name}
                  </p>
                )
            )}
        </div>
      </div>
      <div className="container-card-showcase-products-2-main">
        <div>
          <div className="container-card-showcase-products-2-p1">
            <Slider {...settings}>
              {Data.find((e) => e.showcaseProducts2).showcaseProducts2.map(
                (
                  {
                    title,
                    icon,
                    logo,
                    img,
                    oldPrice,
                    currentPrice,
                    discount,
                    button,
                    payment,
                    link,
                  },
                  index
                ) => (
                  <div
                    key={index}
                    className="container-card-showcase-products-2"
                  >
                    <div className="container-card-showcase-products-2-icons">
                      <img
                        className="container-card-showcase-products-2-logo-ludique"
                        src={logo}
                        alt=""
                      />
                      <img
                        className="container-card-showcase-products-2-icon-heart"
                        src={icon}
                        alt=""
                      />
                    </div>
                    <img
                      className="container-card-showcase-products-2-img"
                      src={img}
                      alt=""
                    />
                    <div className="container-description-2">
                      <h2>{title}</h2>
                      <div className="container-description-2-p1">
                        <div className="container-card-showcase-products-2-old-price-and-discount">
                          <p className="container-old-price">{oldPrice}</p>
                          <div className="container-discount">
                            <p>{discount}</p>
                          </div>
                        </div>
                        <p className="container-card-showcase-products-2-current-price">
                          {currentPrice}
                        </p>
                        <p className="container-card-showcase-products-2-payment">
                          {payment}
                        </p>
                      </div>
                      <div className="container-card-showcase-products-2-button">
                        <a href={link}>{button}</a>
                      </div>
                    </div>
                  </div>
                )
              )}
            </Slider>
          </div>
          {Data.find((e) => e.showcaseProducts2)
            .showcaseProducts2.find((e) => e.names)
            .names.map(
              ({ name }, index) =>
                name === "VER TODOS >" && (
                  <div
                    key={index}
                    className="container-card-showcase-products-2-name"
                  >
                    <p className="container-card-showcase-products-2-name-item">
                      {name}
                    </p>
                  </div>
                )
            )}
        </div>
      </div>
    </section>
  );
};

export default ShowCaseProducts2;
