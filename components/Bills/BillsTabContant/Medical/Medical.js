import ComingSoon from "@/components/Common/ComingSoon/ComingSoon";
import style from "./Medical.module.scss";


const Medical = () => {

   


    return (
        <section className={`${style.MedicalPage} p-20`}>
            <h1 className={`font26 fw700 color222`}>Medical Bill</h1>
            <ComingSoon />




        </section >
    );
};

export default Medical;
