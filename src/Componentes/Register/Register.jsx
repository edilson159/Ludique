import Data from "../Data/Data";
import "./Register.css";

const Register = () => {
  return (
    <section className="container-register">
      <div className="container-card-register">
        {Data.find((e) => e.cadastro).cadastro.map(
          ({ title, description, informations, button }, index) => (
            <div className="container-card-register-p1" key={index}>
              <div className="container-card-register-header">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <div className="container-card-register-inputs">
                <div className="container-card-register-input">
                  {informations
                    .slice(0, 2)
                    .map(({ input, placeholder }, index) => (
                      <input
                        className="container-card-register-input-item"
                        key={index}
                        type={input}
                        placeholder={placeholder}
                      />
                    ))}
                </div>
                <div className="container-card-register-check">
                  {informations
                    .slice(2, 5)
                    .map(({ input, label, id }, index) => (
                      <div
                        className="container-card-register-check-p1"
                        key={index}
                      >
                        <input id={id} type={input} />
                        <label htmlFor={id}>{label}</label>
                      </div>
                    ))}
                </div>
                <div>
                <button className="container-card-register-button">
                {button}
              </button>
                </div>
              </div>
              
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Register;
