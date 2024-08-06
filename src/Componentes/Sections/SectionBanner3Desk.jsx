import Slider from "react-slick"
import "./SectionBanner3Desk.css"
import Data from "../Data/Data"

const SectionBanner3Desk = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false ,
    }
    return (
        <section className="container-section-banner-3-desk">
            <div className="container-card-section-banner-3-desk">
                <Slider {...settings} >
                {Data.find((e) => e.sectionBanner3).sectionBanner3.map(
                          ({ img, name }, index) => (
                <div className="container-card-section-banner-3-desk-item" key={index}>
                  <img
                    className="container-card-section-banner-3-desk-img"
                    src={img}
                    alt=""
                  />
                  <div className="container-card-section-banner-3-desk-name">
                    <a
                      className="container-card-section-banner-3-desk-name-item"
                      href="//"
                    >
                      {name}
                    </a>
                  </div>
                </div>
                          )
                        )}
                </Slider>
            </div>
        </section>
    )
}

export default SectionBanner3Desk