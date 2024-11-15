import style from "./HomeAdvantages.module.scss";

const HomeAdvantages = () => {




    return (
        <section className={`${style.HomeAdvantages}`}>
            <div className={`${style.AdvantagesBox}`}>
                <div className={`${style.AdvantagesImage} `}>
                    <img className={`${style.Image} `} src="https://cdni.iconscout.com/illustration/premium/thumb/financial-planner-illustration-download-in-svg-png-gif-file-formats--strategy-puzzle-manager-problem-solving-finance-consultant-pack-business-illustrations-8815580.png?f=webp" />
                </div>
                <div className={`${style.AdvantagesText}`}>
                    <h2 className={`${style.SectionHeading} font25 fw400 color222`}>Unlock These Advantages Today!</h2>
                    <div className={`font14 fw400 color00A`}>Discover these perks and more with our intuitive bill-generation platform. Start today!</div>
                    <ul className={`${style.List} mt-25`}>
                        <li className={`${style.Item}`}>
                            <div className={`${style.ItemIcon}  material-symbols-outlined color00A`}>timer_5</div>
                            <div className={`${style.ItemText}`}>
                                <div className={`font18 fw600 color393 mb-5`}>Efficient Time Management:</div>
                                <div className={`font14 fw400 color393`}>Reclaim valuable time by swiftly crafting bills, invoices, and receipts online within minutes</div>
                            </div>
                        </li>
                        <li className={`${style.Item}`}>
                            <div className={`${style.ItemIcon}  material-symbols-outlined color00A`}>cases</div>
                            <div className={`${style.ItemText}`}>
                                <div className={`font18 fw600 color393 mb-5`}>Precision Assured:</div>
                                <div className={`font14 fw400 color393`}>Bid farewell to human errors; our system guarantees accurate calculations on every bill.</div>
                            </div>
                        </li>
                        <li className={`${style.Item}`}>
                            <div className={`${style.ItemIcon}  material-symbols-outlined color00A`}>approval_delegation</div>
                            <div className={`${style.ItemText}`}>
                                <div className={`font18 fw600 color393 mb-5`}>Elevated Professionalism:</div>
                                <div className={`font14 fw400 color393`}>Impress clients and collaborators with meticulously designed bill templates.</div>
                            </div>
                        </li>
                        <li className={`${style.Item}`}>
                            <div className={`${style.ItemIcon}  material-symbols-outlined color00A`}>inbox</div>
                            <div className={`${style.ItemText}`}>
                                <div className={`font18 fw600 color393 mb-5`}>Instant Accessibility:</div>
                                <div className={`font14 fw400 color393`}>Retrieve your billing data anytime, anywhere, across all devices with internet access.</div>
                            </div>
                        </li>
                        <li className={`${style.Item}`}>
                            <div className={`${style.ItemIcon}  material-symbols-outlined color00A`}>outbound</div>
                            <div className={`${style.ItemText}`}>
                                <div className={`font18 fw600 color393 mb-5`}>Environmentally Conscious:</div>
                                <div className={`font14 fw400 color393`}>Contribute to a sustainable future by minimizing paper usage and waste.</div>
                            </div>
                        </li>
                        <li className={`${style.Item}`}>
                            <div className={`${style.ItemIcon}  material-symbols-outlined color00A`}>timelapse</div>
                            <div className={`${style.ItemText}`}>
                                <div className={`font18 fw600 color393 mb-5`}>Simplified Organization:</div>
                                <div className={`font14 fw400 color393`}>Effortlessly manage and archive all billing records in a single secure location.</div>
                            </div>
                        </li>
                        <li className={`${style.Item}`}>
                            <div className={`${style.ItemIcon}  material-symbols-outlined color00A`}>send</div>
                            <div className={`${style.ItemText}`}>
                                <div className={`font18 fw600 color393 mb-5`}>Email Dispatch:</div>
                                <div className={`font14 fw400 color393`}>Send bills directly to recipients' emails as PDFs, ensuring swift delivery.</div>
                            </div>
                        </li>
                        <li className={`${style.Item}`}>
                            <div className={`${style.ItemIcon}  material-symbols-outlined color00A`}>point_of_sale</div>
                            <div className={`${style.ItemText}`}>
                                <div className={`font18 fw600 color393 mb-5`}>Cost-Effective Solutions:</div>
                                <div className={`font14 fw400 color393`}>Slash traditional invoicing expenses while optimizing operational efficiency.</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HomeAdvantages;
