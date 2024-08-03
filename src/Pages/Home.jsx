import { useEffect, useState } from "react";
import "./Home.css";
import BannerMobile from "../Componentes/BannerMobile/BannerMobile";
import { Context } from "../Componentes/Context/Context";
import HeaderMobile from "../Componentes/HeaderMobile/HeaderMobile";
import ShowCaseBenefit from "../Componentes/Showcase/ShowCaseBenefit.jsx";
import SectionBanner from "../Componentes/Sections/SectionBanner";
import ShowCaseProducts from "../Componentes/Showcase/ShowCaseProducts";
import SectionBanner2 from "../Componentes/Sections/SectionBanner2.jsx";
import SectionBanner3 from "../Componentes/Sections/SectionBanner3.jsx";
import SectionExclusive from "../Componentes/Sections/SectionExclusive.jsx";
import SectionBrand from "../Componentes/Sections/SectionBrand.jsx";
import ShowCaseProducts2 from "../Componentes/Showcase/ShowCaseProducts2.jsx";
import MeetLudique from "../Componentes/MeetLudique/MeetLudique.jsx";
import PresentLudique from "../Componentes/PresentLudique/PresentLudique.jsx";
import Social from "../Componentes/Social/Social.jsx";
import Register from "../Componentes/Register/Register.jsx";
import SummaryFooter from "../Componentes/SummaryFooter/SummaryFooter.jsx";
import Payment from "../Componentes/Payment/Payment.jsx";
import Security from "../Componentes/Security/Security.jsx";
import RedeSocial from "../Componentes/RedeSocial/RedeSocial.jsx";
import Footer from "../Componentes/Footer/Footer.jsx";
import HeaderDesktop from "../Componentes/HeaderDesktop/HeaderDesktop.jsx";
import BannerDesktop from "../Componentes/BannerDesktop/BannerDesktop.jsx";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(false);
  const [actived, setActived] = useState(false);

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

  function toggleScrollPageHome() {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
  toggleScrollPageHome();
  return (
    <Context.Provider
      value={{
        open,
        setOpen,
        title,
        setTitle,
        actived,
        setActived,
        showBlockDesktop,
      }}
    >
      {" "}
      <section className="container-home">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
          rel="stylesheet"
        />
        {showBlockMobile && <HeaderMobile />}
        {showBlockDesktop && <HeaderDesktop />}
        {showBlockMobile && <BannerMobile />}
        {showBlockDesktop && <BannerDesktop />}
        {showBlockMobile && <ShowCaseBenefit />}
        <SectionBanner />
        <ShowCaseProducts />
        <SectionBanner2 />
        <SectionBanner3 />
        <SectionExclusive />
        <SectionBrand />
        <ShowCaseProducts2 />
        <MeetLudique />
        <PresentLudique />
        <Social />
        <Register />
        <SummaryFooter />
        {showBlockMobile && <Payment />}
        {showBlockMobile && <Security />}
        {showBlockMobile && <RedeSocial />}
        <Footer />
      </section>
    </Context.Provider>
  );
};

export default Home;
