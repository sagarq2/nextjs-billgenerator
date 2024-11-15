import style from "./HomeWhy.module.scss";

const HomeWhy = () => {




    return (
        <section className={`${style.HomeWhy}`}>

            <div className={`${style.WhyBox}`}>

            <div className={`${style.WhyText}`}>
                    <h2 className={`${style.SectionHeading} font25 fw400 color222`}>Why Choose Bill Generator Online?</h2>
                    <div className={`font14 fw400 color00A`}>Bill Generator Online is the premier choice for simplifying bill creation tasks. Offering a user-friendly platform, it caters to diverse needs by generating invoices and receipts effortlessly. Here's why it's the preferred solution:</div>
                    <ul className={`${style.List} mt-25`}>
                        <li className={`${style.Item}`}>
                            <div className={`${style.ItemIcon}  material-symbols-outlined color00A`}>receipt</div>
                            <div className={`${style.ItemText} mt-20`}>
                                <div className={`font18 fw600 color393 mb-10`}>Precise Bills</div>
                                <div className={`font14 fw400 color393`}>Craft accurate and professional bills effortlessly, meeting all your requirements seamlessly.</div>
                            </div>
                        </li>
                        <li className={`${style.Item}`}>
                            <div className={`${style.ItemIcon}  material-symbols-outlined color00A`}>timer</div>
                            <div className={`${style.ItemText} mt-20`}>
                                <div className={`font18 fw600 color393 mb-10`}>Time Efficiency</div>
                                <div className={`font14 fw400 color393`}>Streamline billing, reduce errors, save time with automated processes, minimizing manual work</div>
                            </div>
                        </li>
                        <li className={`${style.Item}`}>
                            <div className={`${style.ItemIcon}  material-symbols-outlined color00A`}>receipt_long</div>
                            <div className={`${style.ItemText} mt-20`}>
                                <div className={`font18 fw600 color393 mb-10`}>Versatility</div>
                                <div className={`font14 fw400 color393`}>Customize bills to suit your needs, be it for business invoices or personal receipts, using our platform.</div>
                            </div>
                        </li>
                        <li className={`${style.Item}`}>
                            <div className={`${style.ItemIcon}  material-symbols-outlined color00A`}>security</div>
                            <div className={`${style.ItemText} mt-20`}>
                                <div className={`font18 fw600 color393 mb-10`}>Easy To Use</div>
                                <div className={`font14 fw400 color393`}>Easy to use platform for anyone to generate variety of bills required in day to day life</div>
                            </div>
                        </li>
                        <li className={`${style.Item}`}>
                            <div className={`${style.ItemIcon}  material-symbols-outlined color00A`}>forum</div>
                            <div className={`${style.ItemText} mt-20`}>
                                <div className={`font18 fw600 color393 mb-10`}>Send Receipts in 10 sec</div>
                                <div className={`font14 fw400 color393`}>Hassle free delivery of PDF receipt directly to user's inbox within 10 seconds of generation</div>
                            </div>
                        </li>
                        <li className={`${style.Item}`}>
                            <div className={`${style.ItemIcon}  material-symbols-outlined color00A`}>thumb_up</div>
                            <div className={`${style.ItemText} mt-20`}>
                                <div className={`font18 fw600 color393 mb-10`}>24/7 Customer Service</div>
                                <div className={`font14 fw400 color393`}>Reach out to us anytime via chat, email or phone. Our support team are here to guide you to generate bills.</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={`${style.WhyImage} `}>
                    <img className={`${style.Image} `} src="https://cdni.iconscout.com/illustration/premium/thumb/businesswoman-motivates-employee-to-achieve-business-target-illustration-download-in-svg-png-gif-file-formats--analytics-logo-strategy-aim-goal-pack-illustrations-8910654.png?f=webp" />
                </div>
            </div>
        </section>
    );
};

export default HomeWhy;
