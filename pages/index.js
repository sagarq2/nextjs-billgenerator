import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import HomeBanner from "@/components/Home/HomeBanner/HomeBanner";
import HomeBio from "@/components/Home/HomeBio/HomeBio";
import HomeWhy from "@/components/Home/HomeWhy/HomeWhy";
import HomeAdvantages from "@/components/Home/HomeAdvantages/HomeAdvantages"
import HomeHowWorks from "@/components/Home/HomeHowWorks/HomeHowWorks"
import HomeTryNow from "@/components/Home/HomeTryNow/HomeTryNow"

const Home = () => {

    return (
        <section className="holder">
            <Header tabIndex="0" />
            <main tabIndex="0" className="main">
                <HomeBanner />
                <HomeBio />
                <HomeWhy />
                <HomeAdvantages />
                <HomeHowWorks />
                <HomeTryNow />
            </main>
            <Footer tabIndex="0" />
        </section>
    );
};

export default Home;

