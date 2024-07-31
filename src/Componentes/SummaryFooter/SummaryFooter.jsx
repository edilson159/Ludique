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
                  {children.map(({ name, link }, index) => (
                    <a
                      className="container-card-summary-footer-summary-item"
                      key={index}
                      href={link}
                    >
                      {name}
                    </a>
                  ))}
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
