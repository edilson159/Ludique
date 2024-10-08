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
import HeaderBenefitDesktop from "../Componentes/HeaderBenefitDesktop/HeaderBenefitDesktop.jsx";
import HeaderBenefitMobile from "../Componentes/HeaderBenefit/HeaderBenefitMobile.jsx";
import ShowcaseAndBanner from "../Componentes/ShowcaseAndBanner/ShowcaseAndBanner.jsx";
import SectionBanner3Desk from "../Componentes/SectionsDesk/SectionBanner3Desk.jsx";
import SectionExclusiveDesk from "../Componentes/SectionsDesk/SectionExclusiveDesk.jsx";
import Footer1Desk from "../Componentes/Footer1Desk/Footer1Desk.jsx";
import Data from "../Componentes/Data/Data.js";

const Home = (props) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(false);
  const [actived, setActived] = useState(false);

  const [over, setOver] = useState(false);

  const [showBlockMobile, setShowBlockMobile] = useState(true);

  const [scrolled, setScroulled] = useState(false);

  useEffect(() => {
    const handleScroull = () => {
      if (window.scrollY > 40) {
        setScroulled(true);
        setOver(true);
      } else {
        setScroulled(false);
        setOver(false);
      }
    };

    window.addEventListener("scroll", handleScroull);

    return () => {
      window.removeEventListener("scroll", handleScroull);
    };
  }, []);

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
        setScroulled,
        scrolled,
        setOver,
        over,
      }}
    >
      {" "}
      <section className="container-home">
        {showBlockMobile && <HeaderBenefitDesktop />}
        {showBlockDesktop && <HeaderBenefitMobile />}
        {showBlockDesktop && <HeaderMobile />}
        {showBlockMobile && <HeaderDesktop />}
        {showBlockDesktop && <BannerMobile />}
        {showBlockMobile && <BannerDesktop />}
        {showBlockDesktop && <ShowCaseBenefit />}
        <SectionBanner />
        <ShowcaseAndBanner />
        <div className="container-hidden">
          {showBlockMobile && (
            <ShowCaseProducts
              products={
                props.products ||
                Data.find((e) => e.showcaseProductsAndBanner)
                  .showcaseProductsAndBanner
              }
            />
          )}
        </div>
        <SectionBanner2 />
        {showBlockMobile && <SectionBanner3 />}
        {showBlockDesktop && <SectionBanner3Desk />}
        {showBlockDesktop && <SectionExclusiveDesk />}
        {showBlockMobile && <SectionExclusive />}
        <SectionBrand />
        <ShowCaseProducts2 />
        <MeetLudique />
        <PresentLudique />
        <Social />
        <Register />
        <div className="container-hidden">
          {showBlockMobile && <SummaryFooter />}

          {showBlockMobile && <Payment />}
          {showBlockMobile && <Security />}
          {showBlockMobile && <RedeSocial />}
        </div>
        <Footer1Desk />
        <Footer />
      </section>
    </Context.Provider>
  );
};

export default Home;
