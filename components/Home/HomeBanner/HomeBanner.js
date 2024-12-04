import style from "./HomeBanner.module.scss";
import { useRouter } from 'next/navigation'
const HomeBanner = () => {
    const router = useRouter()

    return (
        <section className={`${style.Banner}`} role="banner">
            <div className={`${style.BannerTxt}`}>
                <h1 role="heading" tabIndex="0" id="title" className={`${style.BannerHeading} fw400 colorFFF`}>Accurate, fast and secure <span className="color00A"> Bill Generator</span></h1>
                <div className={` font16 fw400 colorFFF mt-20`}>
                    Welcome to the Bill Generator, trusted by thousands of people. Bill Generator lets you
                    quickly make receipts,
                    bills and invoices with our attractive template straight from your web browser.
                </div>
{/* 
                <div className={` font20 fw400 colorFFF mt-20`}>
                    <div className="color00A">Did you know that Bill Generator lets you generate an &nbsp;</div>
                    <strong>Unlimited Number of Bills?</strong>
                </div> */}

                <button className={`${style.BannerButton} font16 fw500 colorFFF mt-30`} onClick={() => router.push('/bills')}>Try It Free</button>
            </div>
            <div className={`${style.BannerImage} `}>
                <img className={`${style.Image} `} src="https://cdni.iconscout.com/illustration/premium/thumb/man-looking-at-grocery-shopping-bill-illustration-download-in-svg-png-gif-file-formats--examination-checking-analysis-inspection-groceries-pack-e-commerce-illustrations-9145317.png?f=webp" />
            </div>
        </section>
    );
};

export default HomeBanner;
