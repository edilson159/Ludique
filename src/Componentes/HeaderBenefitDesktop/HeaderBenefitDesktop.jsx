import Data from "../Data/Data";
import "./HeaderBenefitDesktop.css";

const HeaderBenefitDesktop = () => {
  return (
    <section className="container-header-benefit-desktop">
      <div className="container-card-header-benefit-desktop">
        {Data.find((e) => e.headerBenefitDesktop).headerBenefitDesktop.map(
          ({ title, span }, index) => (
            <div
              key={index}
              className={
                title === "Frete grátis "
                  ? "container-card-header-benefit-desktop-item"
                  : "container-card-header-benefit-desktop-item-border"
              }
            >
              <h2 className="container-card-header-benefit-desktop-title">
                {title}{" "}
                <span
                  className={
                    span === "saiba como" || span === "saiba mais"
                      ? "container-card-header-benefit-desktop-span-line"
                      : "container-card-header-benefit-desktop-span"
                  }
                >
                  {span}
                </span>
              </h2>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default HeaderBenefitDesktop;
