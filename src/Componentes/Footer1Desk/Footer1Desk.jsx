import Data from "../Data/Data"
import Payment from "../Payment/Payment"
import RedeSocial from "../RedeSocial/RedeSocial"
import Security from "../Security/Security"
import SummaryFooterDesk from "../SummaryFooterDesk/SummaryFooterDesk"
import "./Footer1Desk.css"

const Footer1Desk = () => {
    return (
        <section className="container-footer-1-desk">
            <div className="container-card-footer-1-desk-img">
                {Data.find(e => e.summaryFooter).summaryFooter.map(({img}, index) => (
                    <img key={index} src={img} alt="" />
                ))}
            </div>
            <div className="container-card-footer-1-desk">
                <RedeSocial/>
                <SummaryFooterDesk/>
                <div className="container-card-footer-1-desk-payment-security">
                    <Payment/>
                    <Security/>
                </div>
            </div>
        </section>
    )
}

export default Footer1Desk