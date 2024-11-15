import style from "./Cab.module.scss";
import ComingSoon from "@/components/Common/ComingSoon/ComingSoon";

const Cab = () => {

   


    return (
        <section className={`${style.CabPage} p-20`}>
            <h1 className={`font26 fw700 color222`}>Cab Bill</h1>
            <ComingSoon />




        </section >
    );
};

export default Cab;
