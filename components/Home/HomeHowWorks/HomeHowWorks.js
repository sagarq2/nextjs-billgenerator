import style from "./HomeHowWorks.module.scss";

const HomeHowWorks = () => {




    return (
        <section className={`${style.HomeHowWorks}`}>
            <div className={`${style.HowWorksBox}`}>
                <div className={`${style.HowWorksText}`}>
                    <h2 className={`${style.SectionHeading} font25 fw400 color222`}>How the Bill Generator Online Works</h2>
                    <div className={`font14 fw400 color00A`}>Navigating through the intricacies of billing is now a breeze with our Bill Generator Online tool. Here's a breakdown of how it operates:</div>
                    <ul className={`${style.List} mt-20`}>
                        <li className={`${style.Item}`}>
                            <div className={`${style.ItemIcon} `}>1</div>
                            <div className={`${style.ItemText} pl-20`}>
                                <div className={`font22 fw700 color222`}>Template Selection:</div>
                                <div className={`font14 fw400 color393`}>Head to our website at http://billgenerator.online/ and peruse our diverse array of professionally curated templates. Select the one that perfectly aligns with your invoicing or receipt requirements.</div>
                            </div>
                        </li>
                        <li className={`${style.Item}`}>
                            <div className={`${style.ItemIcon} `}>2</div>
                            <div className={`${style.ItemText} pl-20`}>
                                <div className={`font22 fw700 color222`}>Input Your Details:</div>
                                <div className={`font14 fw400 color393`}>Fill in the essential particulars, including recipient information, billing items, corresponding amounts, and any pertinent notes. Our intuitive interface ensures a seamless data input process.</div>
                            </div>
                        </li>
                        <li className={`${style.Item}`}>
                            <div className={`${style.ItemIcon} `}>3</div>
                            <div className={`${style.ItemText} pl-20`}>
                                <div className={`font22 fw700 color222`}>Receipt Retrieval:</div>
                                <div className={`font14 fw400 color393`}>With your details accurately inputted, simply hit the generate button. Voila! Your customized invoice or receipt is promptly generated and ready for download in PDF format. Experience the convenience and efficiency of streamlined billing with the Bill Generator Online today!</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={`${style.HowWorksImage} `}>
                    <img className={`${style.Image} `} src="https://cdni.iconscout.com/illustration/premium/thumb/girl-shopping-for-fresh-vegetables-illustration-download-in-svg-png-gif-file-formats--vegetable-shopper-selection-groceries-pack-e-commerce-illustrations-9145322.png?f=webp" />
                </div>
            </div>
        </section>
    );
};

export default HomeHowWorks;
