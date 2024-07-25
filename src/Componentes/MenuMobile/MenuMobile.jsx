import "./MenuMobile.css";
import UseContext from "../Hook/UseContext";
import Data from "../Data/Data";
import React, { useState } from "react";

function Drawer({ open, setOpen }) {
  const { title, setTitle } = UseContext();
  const [dataChildren, setDataChildren] = useState([]);
  const [nameData, setNameData] = useState("");
  const [actived, setActived] = useState(false);
  function browsingMenu(data, name) {
    setTitle(!title);
    setDataChildren(data);
    setNameData(name);
    setActived(!actived);
    console.log(data);
    console.log(name);
  }
  return (
    <div
      className={`${
        open ? "container-drawer-p" : "container-drawer-"
      } container-drawer`}
    >
      <div className="container-drawer-p1" />
      <div className="container-drawer-p2 ">
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
                    onClick={() => setOpen(!open)}
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
                                <p className="container-details-todos">
                                  {name}
                                </p>
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
                                <p className="container-details-todos-p1">
                                  {name}
                                </p>
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
                                <p className="container-details-todos-p2">
                                  {name}
                                </p>
                              </details>
                            </div>
                          ))}
                      </div>
                    </div>
                  ) : (
                    <div className="container-card-content-menu-mobile-body-p1 ">
                      {children.map(({ img, name, icon, children }, index) => (
                        <div
                          onClick={() => browsingMenu(children, name)}
                          key={index}
                          className="container-card-content-menu-mobile-body-p1-item"
                        >
                          <div className="container-card-content-menu-mobile-body-p1-item-p1">
                            <img src={img} alt="" />
                            <h2>{name}</h2>
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
      </div>
    </div>
  );
}

const MenuMobile = () => {
  const { open, setOpen } = UseContext();

  return (
    <section
      className={
        open ? "container-menu-lateral-open" : "container-menu-lateral"
      }
    >
      <button
        className={open ? "hidden" : "container-menu-hamburguer-open"}
        onClick={() => setOpen(!open)}
      ></button>

      <Drawer setOpen={setOpen} open={open}></Drawer>
    </section>
  );
};

export default MenuMobile;
