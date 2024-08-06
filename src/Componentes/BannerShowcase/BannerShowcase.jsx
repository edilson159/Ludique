import Data from "../Data/Data";
import "./BannerShowcase.css";

const BannerShowcase = () => {
  return (
    <section className="container-banner-showcase">
      {Data.find(
        (e) => e.showcaseProductsAndBanner
      ).showcaseProductsAndBanner.map(
        ({ img }, index) =>
          img && (
            <img
              key={index}
              className="container-banner-showcase-img"
              src={img}
              alt=""
            />
          )
      )}
    </section>
  );
};

export default BannerShowcase;
