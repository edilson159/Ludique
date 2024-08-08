import Slider from "react-slick";
import Data from "../Data/Data";
import "./SectionBrand.css";
import React from "react";

const SectionBrand = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    initialSlide: 0,
    resposive : [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ]
  };
  return (
    <section className="container-section-brand">
      <div className="container-card-section-brand">
        {Data.find((e) => e.SectionBrand).SectionBrand.map(
          ({ title, description, icon }, index) => (
            <div key={index} className="container-card-section-brand-p1">
              <div className="container-card-section-brand-header">
                <img
                  className="container-card-section-brand-img-1"
                  src={icon}
                  alt=""
                />
                <h2>{title}</h2>
                <img
                  className="container-card-section-brand-img-2"
                  src={icon}
                  alt=""
                />
              </div>
              <p>{description}</p>
            </div>
          )
        )}
        <Slider {...settings}>
          {Data.find((e) => e.SectionBrand)
            .SectionBrand.find((e) => e.imgs)
            .imgs.map(({ img }, index) => (
              <div key={index}>
                <div className="container-card-section-brand-p2">
                  <img
                    className={
                      img === "../img/imgVans.png" ? "img-vans" : "img"
                    }
                    src={img}
                    alt=""
                  />
                </div>
              </div>
            ))}
        </Slider>

        {Data.find((e) => e.SectionBrand).SectionBrand.map(
          ({ name }, index) => (
            <div key={index} className="container-card-section-brand-name">
              <a href="//" className="container-card-section-brand-name-item">
                {name}
              </a>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default SectionBrand;
