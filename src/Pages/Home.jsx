import { useEffect, useState } from "react";
import BannerMobile from "../Componentes/BannerMobile/BannerMobile";
import { Context } from "../Componentes/Context/Context";
import HeaderMobile from "../Componentes/HeaderMobile/HeaderMobile";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(false);

  const [showBlockMobile, setShowBlockMobile] = useState(true);

  useEffect(() => {
    const handleResize1 = () => {
      if (window.innerWidth > 1024) {
        setShowBlockMobile(false);
      } else {
        setShowBlockMobile(true);
      }
    };

    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", handleResize1);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize1);
    };
  }, []);

  const [showBlockDesktop, setShowBlockDesktop] = useState(true);

  useEffect(() => {
    const handleResize2 = () => {
      if (window.innerWidth < 1024) {
        setShowBlockDesktop(false);
      } else {
        setShowBlockDesktop(true);
      }
    };

    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", handleResize2);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize2);
    };
  }, []);
  return (
    <Context.Provider value={{ open, setOpen, title, setTitle }}>
      {" "}
      <section>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
          rel="stylesheet"
        />
        {showBlockMobile && <HeaderMobile />}
        {showBlockMobile && <BannerMobile />}
      </section>
    </Context.Provider>
  );
};

export default Home;
