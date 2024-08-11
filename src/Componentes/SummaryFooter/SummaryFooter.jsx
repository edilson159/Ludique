import Data from "../Data/Data";
import "./SummaryFooter.css";

const SummaryFooter = () => {
  return (
   <section className="container-summary-footer">
    <div className="container-card-summary-footer">
      {Data.find((e) => e.summaryFooter).summaryFooter.map(
        ({ img, title, icon, children }, index) => (
          <div key={index} className="container-card-summary-footer-p1">
            {img && (
              <div className="container-card-summary-footer-imgs">
                <img
                  className="container-card-summary-footer-img"
                  src={img}
                  alt=""
                />
              </div>
            )}

            <details className="container-card-summary-footer-details">
              <summary className="container-card-summary-footer-summary">
                {title}{" "}
                <img
                  className="container-card-summary-footer-icon"
                  src={icon}
                  alt=""
                />
              </summary>
              <div className="container-card-summary-footer-summary-itens">
                {children.map(
                  ({ name, link, icon, span }, index) =>
                    name && (
                      <a
                        className={
                          icon
                            ? "container-card-summary-footer-summary-item-and-img"
                            : "container-card-summary-footer-summary-item"
                        }
                        key={index}
                        href={link}
                      >
                        {icon && <img src={icon} alt="" />}
                        {name}{" "}
                        {span && (
                          <span className="conatiner-card-summary-footer-summary-item-span">
                            {span}
                          </span>
                        )}
                      </a>
                    )
                )}
              </div>
            </details>
          </div>
        )
      )}
    </div>
  </section>
       
       
       
  );
};

export default SummaryFooter;
