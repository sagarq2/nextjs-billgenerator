import style from "./Book.module.scss";
import ComingSoon from "@/components/Common/ComingSoon/ComingSoon";

const Book = () => {

   


    return (
        <section className={`${style.BookPage} p-20`}>
            <h1 className={`font26 fw700 color222`}>Book Bill</h1>

            <ComingSoon />



        </section >
    );
};

export default Book;
