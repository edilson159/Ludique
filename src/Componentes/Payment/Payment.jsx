import Data from "../Data/Data";
import "./Payment.css";

const Payment = () => {
  return (
    <section className="container-payment">
      {Data.find((e) => e.payment).payment.map(({ title, imgs }, index) => (
        <div className="container-card-payment" key={index}>
          <h2 className="container-card-payment-title">{title}</h2>
          <div className="container-card-payment-imgs">
            {imgs.map(({ img }, index) => (
              <div
                key={index}
                className={
                  img === "../img/AMEX.png"
                    ? "container-card-payment-imgs-item-amex"
                    : "container-card-payment-imgs-item"
                }
              >
                <img
                  className="container-card-payment-imgs-item-item"
                  src={img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Payment;
