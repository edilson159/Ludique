import Data from "../Data/Data";
import "./HeaderBenefitMobile.css";

const HeaderBenefitMobile = () => {
  return (
    <section className="container-header-benefit-mobile">
      {Data.find((e) => e.headerBenefitMobile).headerBenefitMobile.map(
        ({ name, span }, index) => (
          <div
            className="container-card-item-header-benefit-mobile"
            key={index}
          >
            <p>
              {name} <span>{span}</span>
            </p>
          </div>
        )
      )}
    </section>
  );
};

export default HeaderBenefitMobile;
