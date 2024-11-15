
import { withRouter } from "next/router"
import Link from "next/link"
import style from "./HomeTryNow.module.scss";

const HomeTryNow = ({router}) => {

    const { query: { tab } } = router;

    const isTabFuel =  tab === "1" || tab == null
    const isTabPhone =  tab === "2"
    const isTabInternet =  tab === "3"
    const isTabRent =  tab === "4"
    const isTabDriver =  tab === "5"
    const isTabHelper =  tab === "6"
    const isTabBook =  tab === "7"
    const isTabRestaurant =  tab === "8"
    const isTabLta =  tab === "9"
    const isTabEcom =  tab === "10"
    const isTabGeneral =  tab === "11"
    const isTabMedical =  tab === "12"
    const isTabStationary =  tab === "13"
    const isTabCab =  tab === "14"



    return (
        <section className={`${style.HomeTryNow}`}>
            <div className={`${style.TryNowBox}`}>
                <div className={`${style.TryNowImage} `}>
                    <img className={`${style.Image} `} src="https://cdni.iconscout.com/illustration/premium/thumb/employee-receives-bonus-reward-illustration-download-in-svg-png-gif-file-formats--analytics-logo-business-achievement-strategy-pack-illustrations-8910647.png?f=webp" />
                </div>
                <div className={`${style.TryNowText} `}>
                    <h2 className={`${style.SectionHeading} font25 fw400 color222`}>Try Our Bill Generator Online Now</h2>
                    <div className={`${style.TryNowTabbox} mt-20`}>
                        <div className={`${style.TryNowTab}`}>
                            <ul className={`${style.TryNowTabList}`}>
                                <li selected={isTabFuel} className={isTabFuel ? `${style.TryNowTabItem} ${style.Active}` : `${style.TryNowTabItem}`} >
                                    <Link className="font16 fw400 color393" href={{query: { tab: "1" }}}>Fuel Bill</Link>
                                </li>
                                <li selected={isTabPhone} className={isTabPhone ? `${style.TryNowTabItem} ${style.Active}` : `${style.TryNowTabItem}`}>
                                    <Link className="font16 fw400 color393" href={{query: { tab: "2" }}}>Phone Bill </Link>
                                </li>
                                <li selected={isTabInternet} className={isTabInternet ? `${style.TryNowTabItem} ${style.Active}` : `${style.TryNowTabItem}`}>
                                    <Link className="font16 fw400 color393" href={{query: { tab: "3" }}}>Internet Invoice</Link>
                                </li>
                                <li selected={isTabRent} className={isTabRent ? `${style.TryNowTabItem} ${style.Active}` : `${style.TryNowTabItem}`}>
                                    <Link className="font16 fw400 color393" href={{query: { tab: "4" }}}>Rent Receipt</Link>
                                </li>
                                <li selected={isTabDriver} className={isTabDriver ? `${style.TryNowTabItem} ${style.Active}` : `${style.TryNowTabItem}`}>
                                    <Link className="font16 fw400 color393" href={{query: { tab: "5" }}}>Driver Salary</Link>
                                </li>
                                <li selected={isTabHelper} className={isTabHelper ? `${style.TryNowTabItem} ${style.Active}` : `${style.TryNowTabItem}`}>
                                    <Link className="font16 fw400 color393" href={{query: { tab: "6" }}}>Helper Bill</Link>
                                </li>
                                <li selected={isTabBook} className={isTabBook ? `${style.TryNowTabItem} ${style.Active}` : `${style.TryNowTabItem}`}>
                                    <Link className="font16 fw400 color393" href={{query: { tab: "7" }}}>Book Invoice</Link>
                                </li>
                                <li selected={isTabRestaurant} className={isTabRestaurant ? `${style.TryNowTabItem} ${style.Active}` : `${style.TryNowTabItem}`}>
                                    <Link className="font16 fw400 color393" href={{query: { tab: "8" }}}>Restaurant Bill</Link>
                                </li>
                                <li selected={isTabLta} className={isTabLta ? `${style.TryNowTabItem} ${style.Active}` : `${style.TryNowTabItem}`}>
                                    <Link className="font16 fw400 color393" href={{query: { tab: "9" }}}>LTA Receipt</Link>
                                </li>
                                <li selected={isTabEcom} className={isTabEcom ? `${style.TryNowTabItem} ${style.Active}` : `${style.TryNowTabItem}`}>
                                    <Link className="font16 fw400 color393" href={{query: { tab: "10" }}}>E-Com Invoice</Link>
                                </li>
                                <li selected={isTabGeneral} className={isTabGeneral ? `${style.TryNowTabItem} ${style.Active}` : `${style.TryNowTabItem}`}>
                                    <Link className="font16 fw400 color393" href={{query: { tab: "11" }}}>General Bill</Link>
                                </li>
                                <li selected={isTabMedical} className={isTabMedical ? `${style.TryNowTabItem} ${style.Active}` : `${style.TryNowTabItem}`}>
                                    <Link className="font16 fw400 color393" href={{query: { tab: "12" }}}>Medical Bill</Link>
                                </li>
                                <li selected={isTabStationary} className={isTabStationary ? `${style.TryNowTabItem} ${style.Active}` : `${style.TryNowTabItem}`}>
                                    <Link className="font16 fw400 color393" href={{query: { tab: "13" }}}>Stationary Bill</Link>
                                </li>
                                <li selected={isTabCab} className={isTabCab ? `${style.TryNowTabItem} ${style.Active}` : `${style.TryNowTabItem}`}>
                                    <Link className="font16 fw400 color393" href={{query: { tab: "14" }}}>Cab Bill</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={`${style.TryNowTabContant}`}>


                            {isTabFuel &&  <div className={`${style.TryNowTabPannel}`}>
                                <div className={`font20 fw600 color222`}>Generate Your Fuel Bill Instantly</div>
                                <div className={`font15 fw400 color393 mt-20`}>Say goodbye to the hassle of misplacing your fuel bill at the station with our Fuel Bill Generator. Our platform offers a seamless solution, simplifying the entire process for you. Choose from various vendors, payment methods, and vehicle types, including Petrol, Diesel, CNG, and Electric. All you need to do is provide the total amount paid at the fuel station and the rate per unit for the day. Our intelligent system handles the rest, automatically computing the quantity filled. It's swift, precise, and effective, ensuring you always have the necessary proof at hand. Generate your fuel bill effortlessly and receive your receipt instantly. With our platform, there's no need to fret about lost bills anymore. Experience the convenience and reliability of our Fuel Bill Generator today!</div>
                            </div>}
                            {isTabPhone &&  <div className={`${style.TryNowTabPannel}`}>
                                <div className={`font18 fw600 color222`}>Generate Your Fuel Bill Instantly</div>
                                <div className={`font14 fw400 color393 mt-10`}>Our Mobile Bill Generator simplifies creating detailed invoices for your mobile phone expenses. Input usage details, call records, data consumption, and plan charges, and our platform will generate a professional bill. Ensure accuracy, streamline billing for multiple lines, and eliminate manual calculations. Say goodbye to confusion over complex phone bills. Manage mobile expenses confidently, save time, and take charge of telecommunications finances with our user-friendly service.</div>
                            </div>}
                            {isTabInternet &&  <div className={`${style.TryNowTabPannel}`}>
                                <div className={`font18 fw600 color222`}>Simplify Internet Bill Invoicing with Our Tool</div>
                                <div  className={`font14 fw400 color393 mt-10`}>Our Internet/Broadband Bill Invoice Generator streamlines the creation of detailed invoices for Internet and broadband services. Input essential details such as service period, account details, charges, and taxes, and our platform will generate a professional and accurate invoice effortlessly. Say goodbye to manual calculations and billing errors. Manage your internet expenses confidently and save time with our user-friendly invoice generation service.</div>
                            </div>}
                            {isTabRent &&  <div className={`${style.TryNowTabPannel}`}>
                                <div className={`font18 fw600 color222`}>Simplify Rent Management with Our Rent Receipt Generator</div>
                                <div  className={`font14 fw400 color393 mt-10`}>Managing financial records for rental properties has always been challenging. Our Rent Receipt Generator simplifies the process, allowing you to generate rent receipts for tenants or landlords effortlessly. Input essential details such as property address, tenant information, rent amount, and payment date, and our platform will create a professional, legally compliant rent receipt for you. Whether you're a landlord maintaining records or a tenant needing proof of payment, our tool streamlines the process, ensuring accurate documentation. Start streamlining your rent management, saving time, and gaining financial confidence today with our Rent Receipt Generator. </div>
                            </div>}
                            {isTabDriver &&  <div className={`${style.TryNowTabPannel}`}>
                                <div className={`font18 fw600 color222`}>Streamline Driver Salary Management with Our Tool</div>
                                <div  className={`font14 fw400 color393 mt-10`}>Our Driver Salary Receipt Generator simplifies creating monthly salary receipts for drivers, ensuring legal compliance. Say goodbye to manual revenue stamp handling; our receipts include them automatically. Input driver details, payment amount, date, and deductions, and our platform will generate professional receipts. Ensure accuracy in payroll records, simplify tax reporting, and eliminate manual receipt complexities. Whether managing a fleet or a single driver, our user-friendly tool efficiently handles driver salary payments. Manage driver payroll confidently, save time, and enhance financial tracking with our Driver Salary Receipt Generator.</div>
                            </div>}
                            {isTabHelper &&  <div className={`${style.TryNowTabPannel}`}>
                                <div className={`font18 fw600 color222`}>Streamline Daily Helper Payment Records with Our Tool</div>
                                <div  className={`font14 fw400 color393 mt-10`}>Our Daily Helper Receipt Generator simplifies creating comprehensive receipts for daily helper salary payments or services. Whether employing domestic help or occasional service providers, our user-friendly tool makes your life easier. Input helper details, service description, payment amount, and date; our platform will automatically generate a professional receipt. Rest assured, our receipts comply with legal requirements. Ensure accuracy in financial records, simplify payment documentation, and eliminate manual receipt complexities. Manage daily helper expenses confidently, save time, and enhance financial tracking with our Daily Helper Receipt Generator.</div>
                            </div>}
                            {isTabBook &&  <div className={`${style.TryNowTabPannel}`}>
                                <div className={`font18 fw600 color222`}>Simplify Purchases with Our Books &amp; Stationery Bill Generator</div>
                                <div  className={`font14 fw400 color393 mt-10`}>Our Books &amp; Stationery Bill Generator simplifies creating detailed invoices for your purchases. Input item details, quantities, unit prices, and discounts; our platform will automatically generate a professional bill. Ensure precision in expense records, streamline reimbursement claims, and eliminate manual calculations. Whether for personal or business use, our user-friendly tool gives you control over educational or office expenses. Manage bills confidently, save time, and improve financial tracking with our Books &amp; Stationery Bill Generator.</div>
                            </div>}
                            {isTabRestaurant &&   <div className={`${style.TryNowTabPannel}`}>
                                <div className={`font18 fw600 color222`}>Streamline Restaurant Billing with Our Tool</div>
                                <div  className={`font14 fw400 color393 mt-10`}>Our Restaurant Bill Generator simplifies the creation of itemized restaurant bills for diners. Input order details and our platform automatically generates a professional bill, ensuring accuracy and enhancing customer satisfaction. Say goodbye to manual calculations and handwritten bills. Manage restaurant expenses confidently, save time, and provide a seamless billing experience with our user-friendly service.</div>
                            </div>}
                            {isTabLta &&   <div className={`${style.TryNowTabPannel}`}>
                                <div className={`font18 fw600 color222`}>Simplify LTA Expense Management with Our Tool</div>
                                <div  className={`font14 fw400 color393 mt-10`}>Our LTA Receipt Generator simplifies creating comprehensive receipts for Leave Travel Allowance (LTA) claims. Input travel details like destinations, dates, mode of travel, expenses, and allowances, and our platform will generate a professional receipt automatically. Ensure precision in expense records, simplify reimbursement claims, and eliminate manual calculations. Our user-friendly tool gives you control over LTA expenses, whether for personal or business use. Manage LTA receipts confidently, save time, and improve financial tracking with our LTA Receipt Generator.</div>
                            </div>}
                            {isTabEcom &&  <div className={`${style.TryNowTabPannel}`}>
                                <div className={`font18 fw600 color222`}>Simplify Your E-Commerce Invoicing with Our Generator</div>
                                <div  className={`font14 fw400 color393 mt-10`}>Our E-Commerce Invoice Generator simplifies creating detailed invoices for your online sales. Input transaction details like product descriptions, quantities, prices, taxes, and discounts, and our platform will automatically generate a professional invoice. Ensure accuracy in expense records, streamline reimbursement claims, and eliminate manual calculations. Our user-friendly tool gives you control over online sales expenses, whether for personal or business use. Manage e-commerce invoices confidently, save time, and improve financial tracking with our E-Commerce Invoice Generator. </div>
                            </div>}
                            {isTabGeneral &&  <div className={`${style.TryNowTabPannel}`}>
                                <div className={`font18 fw600 color222`}>Simplify Invoice Creation with Our General Bill Generator</div>
                                <div  className={`font14 fw400 color393 mt-10`}>Our General Bill Generator offers a versatile solution for creating detailed invoices for various expenses. Whether personal or business, our user-friendly tool simplifies the process. Input expense details like descriptions, quantities, prices, taxes, and discounts, and our platform will generate a tailored professional bill. Ensure precision in expense records, streamline reimbursement claims, and eliminate manual calculations. Whether tracking household expenses or business costs, our tool empowers you to manage financial records effortlessly. Create general bills confidently, save time, and enhance financial tracking with our General Bill Generator.</div>
                            </div>}
                            {isTabMedical &&  <div className={`${style.TryNowTabPannel}`}>
                                <div className={`font18 fw600 color222`}>Simplify Medical Billing with Our Tool</div>
                                <div  className={`font14 fw400 color393 mt-10`}>Our Medical Bill Generator simplifies bill creation for healthcare providers and patients. Input patient and treatment details, and our platform automatically generates itemized medical bills. Ensure accuracy, expedite insurance claims, and streamline financial records effortlessly. Say goodbye to manual calculations and errors. Manage medical expenses confidently, save time, and enhance financial transparency with our user-friendly service.</div>
                            </div>}
                            {isTabStationary &&  <div className={`${style.TryNowTabPannel}`}>
                                <div className={`font18 fw600 color222`}>Simplify Purchases with Our Books &amp; Stationery Bill Generator</div>
                                <div  className={`font14 fw400 color393 mt-10`}>Our Books &amp; Stationery Bill Generator simplifies creating detailed invoices for your purchases. Input item details, quantities, unit prices, and discounts; our platform will automatically generate a professional bill. Ensure precision in expense records, streamline reimbursement claims, and eliminate manual calculations. Whether for personal or business use, our user-friendly tool gives you control over educational or office expenses. Manage bills confidently, save time, and improve financial tracking with our Books &amp; Stationery Bill Generator.</div>
                            </div>}
                            {isTabCab &&  <div className={`${style.TryNowTabPannel}`}>
                                <div className={`font18 fw600 color222`}>Effortlessly Generate Your Taxi or Cab Bill</div>
                                <div  className={`font14 fw400 color393 mt-10`}>Introducing our Taxi Bill Generator – the ultimate solution for creating comprehensive invoices for your taxi rides. Whether you're a frequent passenger or a business tracking transportation expenses, our tool simplifies the process. Input ride details such as pick-up and drop-off locations, distance traveled, fare, and any additional charges, and watch as our platform automatically generates a professional taxi bill for you. Ensure precision in your expense records, simplify reimbursement claims, and bid farewell to the complexity of manual calculations. Our user-friendly tool puts you in control of your transportation finances. Whether for personal or business use, our Taxi Bill Generator streamlines your ride expense management, saving you time and improving your financial tracking. Start using our Taxi Bill Generator today and experience the ease and efficiency of simplified transportation expense management. </div>
                            </div>}


                            
                            {/* 
                            
                            
                            
                            
                            
                           
                           
                            
                            
                            
                            
                             */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withRouter(HomeTryNow);
