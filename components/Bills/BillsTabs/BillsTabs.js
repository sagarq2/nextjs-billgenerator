import { useRef, useState } from "react";
import Link from "next/link"
import { withRouter } from "next/router"
import style from "./BillsTabs.module.scss";



const BillsTabs = ({router}) => {

    const elementRef = useRef(null);
    const [arrowLeftDisable, setArrowLeftDisable] = useState(true);
    const [arrowRightDisable, setArrowRightDisable] = useState(false);

    const { query: { tab } } = router;
    const isTabFuel = tab === "1" || tab == null
    const isTabPhone = tab === "2"
    const isTabInternt = tab === "3"
    const isTabRent = tab === "4"
    const isTabDriver = tab === "5"
    const isTabHelper = tab === "6"
    const isTabBook = tab === "7"
    const isTabRestaurant = tab === "8"
    const isTabLta = tab === "9"
    const isTabEcom = tab === "10"
    const isTabGeneral = tab === "11"
    const isTabMedical = tab === "12"
    const isTabStationary = tab === "13"
    const isTabCab = tab === "14"
    const isTabMart = tab === "15"
    const isTabGym = tab === "16"

    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            element.scrollRight += step;
            scrollAmount += Math.abs(step);
            if(scrollAmount >= distance) {
                clearInterval(slideTimer);
            } 
            if(element.scrollLeft === 0) {
                setArrowLeftDisable(true)
            } else {
                setArrowLeftDisable(false)
            }

            if(element.scrollRight === 0) {
                setArrowRightDisable(true)
            } else {
                setArrowRightDisable(false)
            }

            // console.log("element Lerft", element.scrollLeft);
            // console.log("element right", element.scrollRight);
            console.log("element right", step);
            
        }, speed)

    }


    return (
        <section className={`${style.BillsTabs} pt-20 pb-20`}>

            <div className={`${style.TabPrevNext} ${style.TabPrev}`} onClick={() => {handleHorizantalScroll(elementRef.current, 0, 100, -120);}}
          disabled={arrowLeftDisable}></div>

            <ul className={`${style.TabList}`} ref={elementRef}>
                <li selected={isTabFuel} className={isTabFuel ? `${style.TabItem} ${style.Active}` : `${style.TabItem}`}>
                    <Link className={`${style.TabItemAnchor} whitefill_animate`} href={{ query: { tab: "1" } }}>
                        <span className={`${style.TabIcon} icon color222 material-symbols-outlined mr-4`}>local_gas_station</span>
                        <span className={`${style.TabTxt} font16 fw400 color222`}>Fuel Bill</span>
                    </Link>
                </li>
                <li selected={isTabPhone} className={isTabPhone ? `${style.TabItem} ${style.Active}` : `${style.TabItem}`}>
                    <Link className={`${style.TabItemAnchor} whitefill_animate`} href={{ query: { tab: "2" } }}>
                        <span className={`${style.TabIcon} icon color222 material-symbols-outlined mr-4`}>mobile_friendly</span>
                        <span className={`${style.TabTxt} font16 fw400 color222`}>Phone Bill </span>
                    </Link>
                </li>
                <li selected={isTabInternt} className={isTabInternt ? `${style.TabItem} ${style.Active}` : `${style.TabItem}`}>
                    <Link className={`${style.TabItemAnchor} whitefill_animate`} href={{ query: { tab: "3" } }}>
                        <span className={`${style.TabIcon} icon color222 material-symbols-outlined mr-4`}>wifi</span>
                        <span className={`${style.TabTxt} font16 fw400 color222`}>Internet Invoice</span>
                    </Link>
                </li>
                <li selected={isTabRent} className={isTabRent ? `${style.TabItem} ${style.Active}` : `${style.TabItem}`}>
                    <Link className={`${style.TabItemAnchor} whitefill_animate`} href={{ query: { tab: "4" } }}>
                        <span className={`${style.TabIcon} icon color222 material-symbols-outlined mr-4`}>receipt</span>
                        <span className={`${style.TabTxt} font16 fw400 color222`}>Rent Receipt</span>
                    </Link>
                </li>
                <li selected={isTabDriver} className={isTabDriver ? `${style.TabItem} ${style.Active}` : `${style.TabItem}`}>
                    <Link className={`${style.TabItemAnchor} whitefill_animate`} href={{ query: { tab: "5" } }}>
                        <span className={`${style.TabIcon} icon color222 material-symbols-outlined mr-4`}>payments</span>
                        <span className={`${style.TabTxt} font16 fw400 color222`}>Driver Salary</span>
                    </Link>
                </li>
                <li selected={isTabHelper} className={isTabHelper ? `${style.TabItem} ${style.Active}` : `${style.TabItem}`}>
                    <Link className={`${style.TabItemAnchor} whitefill_animate`} href={{ query: { tab: "6" } }}>
                        <span className={`${style.TabIcon} icon color222 material-symbols-outlined mr-4`}>help_clinic</span>
                        <span className={`${style.TabTxt} font16 fw400 color222`}>Helper Bill</span>
                    </Link>
                </li>
                <li selected={isTabBook} className={isTabBook ? `${style.TabItem} ${style.Active}` : `${style.TabItem}`}>
                    <Link className={`${style.TabItemAnchor} whitefill_animate`} href={{ query: { tab: "7" } }}>
                        <span className={`${style.TabIcon} icon color222 material-symbols-outlined mr-4`}>library_books</span>
                        <span className={`${style.TabTxt} font16 fw400 color222`}>Book Invoice</span>
                    </Link>
                </li>
                <li selected={isTabRestaurant} className={isTabRestaurant ? `${style.TabItem} ${style.Active}` : `${style.TabItem}`}>
                    <Link className={`${style.TabItemAnchor} whitefill_animate`} href={{ query: { tab: "8" } }}>
                        <span className={`${style.TabIcon} icon color222 material-symbols-outlined mr-4`}>restaurant</span>
                        <span className={`${style.TabTxt} font16 fw400 color222`}>Restaurant Bill</span>
                    </Link>
                </li>
                <li selected={isTabLta} className={isTabLta ? `${style.TabItem} ${style.Active}` : `${style.TabItem}`}>
                    <Link className={`${style.TabItemAnchor} whitefill_animate`} href={{ query: { tab: "9" } }}>
                        <span className={`${style.TabIcon} icon color222 material-symbols-outlined mr-4`}>directions_bus</span>
                        <span className={`${style.TabTxt} font16 fw400 color222`}>LTA Receipt</span>
                    </Link>
                </li>
                <li selected={isTabEcom} className={isTabEcom ? `${style.TabItem} ${style.Active}` : `${style.TabItem}`}>
                    <Link className={`${style.TabItemAnchor} whitefill_animate`} href={{ query: { tab: "10" } }}>
                        <span className={`${style.TabIcon} icon color222 material-symbols-outlined mr-4`}>web</span>
                        <span className={`${style.TabTxt} font16 fw400 color222`}>E-Com Invoice</span>
                    </Link>
                </li>
                <li selected={isTabGeneral} className={isTabGeneral ? `${style.TabItem} ${style.Active}` : `${style.TabItem}`}>
                    <Link className={`${style.TabItemAnchor} whitefill_animate`} href={{ query: { tab: "11" } }}>
                        <span className={`${style.TabIcon} icon color222 material-symbols-outlined mr-4`}>order_play</span>
                        <span className={`${style.TabTxt} font16 fw400 color222`}>General Bill</span>
                    </Link>
                </li>
                <li selected={isTabMedical} className={isTabMedical ? `${style.TabItem} ${style.Active}` : `${style.TabItem}`}>
                    <Link className={`${style.TabItemAnchor} whitefill_animate`} href={{ query: { tab: "12" } }}>
                        <span className={`${style.TabIcon} icon color222 material-symbols-outlined mr-4`}>monitor_heart</span>
                        <span className={`${style.TabTxt} font16 fw400 color222`}>Medical Bill</span>
                    </Link>
                </li>
                <li selected={isTabStationary} className={isTabStationary ? `${style.TabItem} ${style.Active}` : `${style.TabItem}`}>
                    <Link className={`${style.TabItemAnchor} whitefill_animate`} href={{ query: { tab: "13" } }}>
                        <span className={`${style.TabIcon} icon color222 material-symbols-outlined mr-4`}>contract_edit</span>
                        <span className={`${style.TabTxt} font16 fw400 color222`}>Stationary Bill</span>
                    </Link>
                </li>
                <li selected={isTabCab} className={isTabCab ? `${style.TabItem} ${style.Active}` : `${style.TabItem}`}>
                    <Link className={`${style.TabItemAnchor} whitefill_animate`} href={{ query: { tab: "14" } }}>
                        <span className={`${style.TabIcon} icon color222 material-symbols-outlined mr-4`}>local_taxi</span>
                        <span className={`${style.TabTxt} font16 fw400 color222`}>Cab Bill</span>
                    </Link>
                </li>
                <li selected={isTabMart} className={isTabMart ? `${style.TabItem} ${style.Active}` : `${style.TabItem}`}>
                    <Link className={`${style.TabItemAnchor} whitefill_animate`} href={{ query: { tab: "15" } }}>
                        <span className={`${style.TabIcon} icon color222 material-symbols-outlined mr-4`}>receipt_long</span>
                        <span className={`${style.TabTxt} font16 fw400 color222`}>Mart Bill</span>
                    </Link>
                </li>
                <li selected={isTabGym} className={isTabGym ? `${style.TabItem} ${style.Active}` : `${style.TabItem}`}>
                    <Link className={`${style.TabItemAnchor} whitefill_animate`} href={{ query: { tab: "16" } }}>
                        <span className={`${style.TabIcon} icon color222 material-symbols-outlined mr-4`}>health_metrics</span>
                        <span className={`${style.TabTxt} font16 fw400 color222`}>Gym Bill</span>
                    </Link>
                </li>
            </ul>

            <div className={`${style.TabPrevNext} ${style.TabNext}`} onClick={() => {handleHorizantalScroll(elementRef.current, 0, 100, 120);}} disabled={arrowRightDisable}></div>

        </section>
    );
};

export default withRouter (BillsTabs);
