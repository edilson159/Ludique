import Data from "../Data/Data"
import "./SectionExclusiveDesk.css"

const SectionExclusiveDesk = () => {
    return (
        <section className="container-secion-exclusive-desk">
            {Data.find(e => e.sectionExclusiveDesk).sectionExclusiveDesk.map(({img, title, description, button, link , span,icons}, index) => (
                <div className="container-card-section-exclusive-desk" key={index}>
                    { icons.map(({icon}, index) => (
                    icon === '../img/iconEsclusiveLudique.svg' &&  <img className="container-section-exclusive-desk-icon-1" key={index} src={icon} alt="" />
                    ))}
                    <div className="container-card-section-exclusive-desk-p1">
                        <div className="container-section-exclusive-desk-img">
                            <img  className="container-section-exclusive-desk-img-item" src={img} alt="" />
                        </div>
                        <div className="container-card-section-exclusive-desk-description">
                            <div className="container-card-section-exclusive-desk-description-p1">
                                {icons.map(({icon}, index) => (
                                   icon !== '../img/iconEsclusiveLudique.svg' &&  <img key={index} className="container-card-section-exclusive-desk-icon-3" src={icon} alt="" />
                                ))}
                                <h2 className="container-section-exclusive-desk-title">{title} <span className="container-section-exclusive-desk-span">{span}</span></h2>
                                <p  className="container-section-exclusive-desk-paragraph">{description}</p>
                                <div  className="container-section-exclusive-desk-button">
                                    <a className="container-section-exclusive-desk-button-item" href={link}>{button}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {icons.map(({icon}, index) => (
                     icon === '../img/iconEsclusiveLudique.svg' &&   <img className="container-section-exclusive-desk-icon-2" key={index} src={icon} alt="" />
                    ))}
                </div>
            ))}
        </section>
    )
}

export default SectionExclusiveDesk