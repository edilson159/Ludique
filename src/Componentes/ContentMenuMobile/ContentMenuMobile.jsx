import React, { useState } from "react";
import "./ContentMenuMobile.css";
import UseContext from "../Hook/UseContext";
import Data from "../Data/Data";

const ContentMenuMobile = () => {
  const { open, setOpen } = UseContext();
  const [dataChildren, setDataChildren] = useState([]);
  const [nameData, setNameData] = useState("");
  const [actived, setActived] = useState(false);
  function browsingMenu(data, name) {
    setDataChildren(data);
    setNameData(name);
    setActived(!actived);
  }
  function closeMenuMobile() {
    setActived(actived);
    setOpen(!open);
  }
  return (
    <div>
      {Data.find((e) => e.menuMobile).menuMobile.map(
        ({ title, image, children, icon }, index) => (
          <div className="container-card-content-menu-mobile" key={index}>
            <div className="container-card-content-menu-mobile-header">
              <div className="container-card-content-menu-mobile-header-p1">
                {actived ? (
                  <div
                    onClick={() => browsingMenu()}
                    className="container-card-content-menu-mobile-header-p1-actived"
                  >
                    <img src={icon} alt="" />
                    <h2>{nameData}</h2>
                  </div>
                ) : (
                  <a href="//">
                    <img src={image} alt="" />
                    <h2>{title}</h2>
                  </a>
                )}
              </div>
              <button
                className="container-menu-hamburguer-close"
                onClick={() => closeMenuMobile()}
              ></button>
            </div>
            <div className="container-card-content-menu-mobile-body">
              {actived ? (
                <div className="container-card-content-menu-mobile-body-map">
                  <div className="container-card-content-menu-mobile-body-map-p1">
                    {dataChildren
                      ?.slice(0, 1)
                      .map(({ title, children, name }, index) => (
                        <div className="container-card-details" key={index}>
                          <details className="container-details">
                            <summary>
                              {title}
                              <img
                                className="container-card-content-menu-mobile-body-p2-img"
                                src=""
                                alt=""
                              />
                            </summary>
                            <div className="container-card-number">
                              {children.map(({ title, number }, index) => (
                                <React.Fragment key={index}>
                                  {title && <h2>{title}</h2>}
                                  <p>{number}</p>
                                </React.Fragment>
                              ))}
                            </div>
                            <p className="container-details-todos">{name}</p>
                          </details>
                        </div>
                      ))}
                  </div>
                  <div>
                    {dataChildren
                      ?.slice(1, 2)
                      .map(({ title, children, name }, index) => (
                        <div className="container-card-details" key={index}>
                          <details className="container-details">
                            <summary>
                              {title}
                              <img
                                className="container-card-content-menu-mobile-body-p2-img"
                                src=""
                                alt=""
                              />
                            </summary>
                            <div className="container-card-calçados">
                              {children.map(({ name }, index) => (
                                <p
                                  className={
                                    name === "Tênis"
                                      ? "item-tenis"
                                      : "item-chuteira"
                                  }
                                  key={index}
                                >
                                  {name}
                                </p>
                              ))}
                            </div>
                            <p className="container-details-todos-p1">{name}</p>
                          </details>
                        </div>
                      ))}
                  </div>
                  <div>
                    {dataChildren
                      ?.slice(2, 3)
                      .map(({ title, children, name }, index) => (
                        <div className="container-card-details" key={index}>
                          <details className="container-details">
                            <summary>
                              {title}
                              <img
                                className="container-card-content-menu-mobile-body-p2-img"
                                src=""
                                alt=""
                              />
                            </summary>
                            <div className="container-card-marcas">
                              {children.map(({ name }, index) => (
                                <p key={index}>{name}</p>
                              ))}
                            </div>
                            <p className="container-details-todos-p2">{name}</p>
                          </details>
                        </div>
                      ))}
                  </div>
                  {Data.find((e) => e.menuMobile).menuMobile.map(
                    ({ name }, index) =>
                      name && (
                        <a
                          href="//"
                          key={index}
                          className="container-name-children"
                        >
                          {name}
                        </a>
                      )
                  )}
                </div>
              ) : (
                <div className="container-card-content-menu-mobile-body-p1 ">
                  {children.map(({ img, title, icon, children }, index) => (
                    <div
                      onClick={() => browsingMenu(children, title)}
                      key={index}
                      className="container-card-content-menu-mobile-body-p1-item"
                    >
                      <div className="container-card-content-menu-mobile-body-p1-item-p1">
                        <img src={img} alt="" />
                        <h2>{title}</h2>
                      </div>
                      <img src={icon} alt="" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ContentMenuMobile;
