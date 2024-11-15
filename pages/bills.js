import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BillsTabs from "@/components/Bills/BillsTabs/BillsTabs";
import BillsTabContant from "@/components/Bills/BillsTabContant/BillsTabContant";

const bills = () => {

    return (
        <section className="holder">
            <Header tabIndex="0" />
            <main tabIndex="0" className="main">
                <BillsTabs />
                <BillsTabContant />
            </main>
            <Footer tabIndex="0" />
        </section>
    );
};

export default bills;

