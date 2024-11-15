import { withRouter } from "next/router"

import style from "./BillsTabContant.module.scss";
import Fuel from "./Fuel/Fuel";
import Phone from "./Phone/Phone"
import Internt from "./Internt/Internt"
import Rent from "./Rent/Rent"
import Driver from "./Driver/Driver"
import Helper from "./Helper/Helper"
import Book from "./Book/Book"
import Restaurant from "./Restaurant/Restaurant"
import Lta from "./Lta/Lta"
import Ecom from "./Ecom/Ecom"
import General from "./General/General"
import Medical from "./Medical/Medical"
import Stationary from "./Stationary/Stationary"
import Cab from "./Cab/Cab"
import Mart from "./Mart/Mart"
import Gym from "./Gym/Gym"

const BillsTabContant = ({router}) => {

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

    return (
        <>
            {isTabFuel && <Fuel /> }
            {isTabPhone && <Phone />}
            {isTabInternt && <Internt />}
            {isTabRent && <Rent />}
            {isTabDriver && <Driver />}
            {isTabHelper && <Helper />}
            {isTabBook && <Book />}
            {isTabRestaurant && <Restaurant />}
            {isTabLta && <Lta />}
            {isTabEcom && <Ecom />}
            {isTabGeneral && <General />}
            {isTabMedical && <Medical />}
            {isTabStationary && <Stationary />}
            {isTabCab && <Cab />}
            {isTabMart && <Mart />}
            {isTabGym && <Gym />}
        </>
    );
};

export default withRouter (BillsTabContant);
