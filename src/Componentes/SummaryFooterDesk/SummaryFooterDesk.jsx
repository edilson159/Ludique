import Data from "../Data/Data"
import "./SummaryFooterDesk.css"

const SummaryFooterDesk = () => {
    return (
        <section className="container-summary-footer-desk">
       {Data.find(e => e.summaryFooter).summaryFooter.map(({title, children}, index) => (
         <div className="container-card-summary-footer-desk" key={index}>
           <h2 className="container-card-summary-footer-desk-title">{title}</h2>
           <div className={ title === "CONTATO" ? "container-card-summary-footer-desk-names-contato" :"container-card-summary-footer-desk-names"}>
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
         </div>
       ))}
   
      </section>
    
    )
}

export default SummaryFooterDesk