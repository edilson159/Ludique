import Slider from "react-slick";
import "./ShowCaseProducts.css";
import Data from "../Data/Data";

const ShowCaseProducts = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    dots: true,
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
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="container-showcase-products">
      <div className="container-card-showcase-products-main">
        <>
          {Data.find(
            (e) => e.showcaseProductsAndBanner
          ).showcaseProductsAndBanner.map(
            ({ title, icon, buttons }, index) =>
              title && (
                <div
                  className="container-card-showcase-products-header"
                  key={index}
                >
                  <div className="container-card-showcase-products-header-body">
                    <div className="container-card-showcase-products-header-p1">
                      <img
                        className="container-card-showcase-products-header-p1-img img-1"
                        src={icon}
                        alt=""
                      />
                      <h1 className="container-card-showcase-products-header-p1-title">
                        {title}
                      </h1>
                      <img
                        className="container-card-showcase-products-header-p1-img img-2"
                        src={icon}
                        alt=""
                      />
                    </div>
                    <div className="container-card-showcase-products-header-buttons">
                      {buttons &&
                        Data.find((e) => e.showcaseProductsAndBanner)
                          .showcaseProductsAndBanner.find((e) => e.buttons)
                          .buttons.map(({ button }, index) => (
                            <button key={index}>{button}</button>
                          ))}
                    </div>
                  </div>
                </div>
              )
          )}
          <div className="container-card-showcase-products-p1">
            <Slider {...settings}>
              {Data.find((e) => e.showcaseProductsAndBanner)
                .showcaseProductsAndBanner.find((e) => e.showcaseProducts)
                .showcaseProducts.map(
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
                      className="container-card-showcase-products"
                    >
                      <div className="container-card-showcase-products-icons">
                        <img
                          className="container-card-showcase-products-logo-ludique"
                          src={logo}
                          alt=""
                        />
                        <img
                          className="container-card-showcase-products-icon-heart"
                          src={icon}
                          alt=""
                        />
                      </div>
                      <img
                        className="container-card-showcase-products-img"
                        src={img}
                        alt=""
                      />
                      <div className="container-description">
                        <h2>{title}</h2>
                        <div className="container-description-p1">
                          <div className="container-card-showcase-products-old-price-and-discount">
                            <p className="container-old-price">{oldPrice}</p>
                            <div className="container-discount">
                              <p>{discount}</p>
                            </div>
                          </div>
                          <p className="container-card-showcase-products-current-price">
                            {currentPrice}
                          </p>
                          <p className="container-card-showcase-products-payment">
                            {payment}
                          </p>
                        </div>
                        <div className="container-card-showcase-products-button">
                          <a href={link}>{button}</a>
                        </div>
                      </div>
                    </div>
                  )
                )}
            </Slider>
          </div>
          <div className="container-card-showcase-products-name">
            <p className="container-card-showcase-products-name-item">
              {
                Data.find(
                  (e) => e.showcaseProductsAndBanner
                ).showcaseProductsAndBanner.find((e) => e.name).name
              }
            </p>
          </div>
        </>
      </div>
    </section>
  );
};

export default ShowCaseProducts;
