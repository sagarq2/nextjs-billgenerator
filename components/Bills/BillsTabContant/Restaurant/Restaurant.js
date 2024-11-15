import ComingSoon from "@/components/Common/ComingSoon/ComingSoon";
import style from "./Restaurant.module.scss";


const Restaurant = () => {

   


    return (
        <section className={`${style.RestaurantPage} p-20`}>
            <h1 className={`font26 fw700 color222`}>Restaurant Bill</h1>
            <ComingSoon />




        </section >
    );
};

export default Restaurant;
