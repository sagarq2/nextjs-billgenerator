import React, { useState, useRef} from 'react';
import style from "./Internt.module.scss";
import {toJpeg } from 'html-to-image';


const DEFAULT_LOG_SELECTED = 'data:image/png;base64,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'

const DEFAULT_LOGS = {
    Hathway: DEFAULT_LOG_SELECTED,

    Snet: 'data:image/png;base64,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',
    
}

const Internt = () => {

    const [internetInsertForm, setInternetInsertForm] = useState({
        selectedLogo: 'Hathway',
        selectedLogoURL: DEFAULT_LOG_SELECTED,
        providerName: '',
        providerAddress: '',
        acountNumber: '',
        billingDate: '',
        billingFrom: '',
        billingTo: '',
        customerName: '',
        customerAddress: '',
        customerEmail: '',
        customerMobile: '',
        planSpeed: '',
        tarrifPlanPackage: '',
        tarrifPlan: '',
        paymentMethod: '',
        totalAmount: '',
        invoiceNo: '',

    });
    const handleInputChange = (event) => {
        const { value, name } = event?.target;
        setInternetInsertForm({
            ...internetInsertForm,
            [name]: value
        })
    };

    const handleRadioChange = (event) => {
        const { name } = event?.target;
        setInternetInsertForm({
            ...internetInsertForm,
            ['selectedLogo']: name,
            selectedLogoURL: DEFAULT_LOGS[name]

        });

    };


    const elementRef = useRef(null);
    const htmlToImageConvert = () => {
        toJpeg(elementRef.current, { cacheBust: false })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "internt.jpeg";
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
    };

    return (
        <section className={`${style.InterntPage}`}>
            <h1 className={`font26 fw700 color222`}>Internt Bill</h1>


            <div className={`${style.Contant}`}>
                <div className={`${style.FormDetails}`}>

                    <div className={`${style.Box} mt-20`}>
                        <div className={`font16 fw500 color222 mb-15`}>Internet Provider Details</div>
                        <div className={`${style.Row} ${style.RowGroup3} mt-10`}>
                            <label htmlFor="Hathway" className={`${style.AnimLabel}`}>
                                <input
                                    className={`${style.AnimRadio}`}
                                    name="Hathway"
                                    id="Hathway"
                                    type="radio"
                                    checked={internetInsertForm.selectedLogo === "Hathway"}
                                    onChange={handleRadioChange}
                                />
                                <span className={`${style.AnimIcon}`} />
                                Hathway
                            </label>
                            <label htmlFor="Snet" className={`${style.AnimLabel}`}>
                                <input
                                    className={`${style.AnimRadio}`}
                                    name="Snet"
                                    id="Snet"
                                    type="radio"
                                    checked={internetInsertForm.selectedLogo === "Snet"}
                                    onChange={handleRadioChange}
                                />
                                <span className={`${style.AnimIcon}`} />
                                Snet
                            </label>
                        </div>
                        <div className={`${style.Row}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="text"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={internetInsertForm.providerName}
                                    name="providerName"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Provider Name</legend>
                            </fieldset>
                        </div>
                        <div className={`${style.Row}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <textarea
                                    className={`${style.FormControl} ${style.Textarea} font16 fw500 color222`}
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={internetInsertForm.providerAddress}
                                    name="providerAddress"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Provider Address</legend>
                            </fieldset>
                        </div>
                        <div className={`${style.Row} ${style.RowGroup2}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="number"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={internetInsertForm.acountNumber}
                                    name="acountNumber"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Acount Number</legend>
                            </fieldset>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="date"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={internetInsertForm.billingDate}
                                    name="billingDate"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Billing Date</legend>
                            </fieldset>
                        </div>
                        <div className={`${style.Row} ${style.RowGroup2}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="date"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={internetInsertForm.billingFrom}
                                    name="billingFrom"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Billing From</legend>
                            </fieldset>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="date"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={internetInsertForm.billingTo}
                                    name="billingTo"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Billing To</legend>
                            </fieldset>
                        </div>
                    </div>

                    <div className={`${style.Box} mt-20`}>
                        <div className={`font16 fw500 color222 mb-15`}>Customer Details</div>
                        <div className={`${style.Row}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="text"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={internetInsertForm.customerName}
                                    name="customerName"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Customer Name</legend>
                            </fieldset>
                        </div>

                        <div className={`${style.Row}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="text"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={internetInsertForm.customerAddress}
                                    name="customerAddress"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Customer Address</legend>
                            </fieldset>
                        </div>
                        <div className={`${style.Row} ${style.RowGroup2}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="email"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={internetInsertForm.customerEmail}
                                    name="customerEmail"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Customer Email</legend>
                            </fieldset>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="number"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={internetInsertForm.customerMobile}
                                    name="customerMobile"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Customer Mobile Number</legend>
                            </fieldset>
                        </div>
                    </div>
                    <div className={`${style.Box} mt-20`}>
                        <div className={`font16 fw500 color222 mb-15`}>Provider Plan Details</div>
                        <div className={`${style.Row} ${style.RowGroup3}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <select
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={internetInsertForm.planSpeed}
                                    name="planSpeed"
                                >
                                    <option>Select one</option>
                                    <option value="10Mbps">10Mbps</option>
                                    <option value="20Mbps">20Mbps</option>
                                    <option value="40Mbps">40Mbps</option>
                                    <option value="50Mbps">50Mbps</option>
                                    <option value="100Mbps">100Mbps</option>
                                    <option value="150Mbps">150Mbps</option>
                                    <option value="200Mbps">200Mbps</option>
                                    <option value="500Mbps">500Mbps</option>
                                    <option value="1Gbps">1Gbps</option>
                                </select>
                                <legend tabIndex={-1} className={`${style.Legend}`}>Plan Speed</legend>
                            </fieldset>
                            <fieldset className={`${style.Fieldset}`}>
                                <select
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={internetInsertForm.tarrifPlanPackage}
                                    name="tarrifPlanPackage"
                                >
                                    <option>Select one</option>
                                    <option value="Limited">Limited</option>
                                    <option value="Unlimited">Unlimited</option>
                                    <option value="FUP">FUP</option>
                                </select>
                                <legend tabIndex={-1} className={`${style.Legend}`}>Tarrif Plan Package</legend>
                            </fieldset>
                            <fieldset className={`${style.Fieldset}`}>
                                <select
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={internetInsertForm.tarrifPlan}
                                    name="tarrifPlan"
                                >
                                    <option>Select one</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Quarterly">Quarterly</option>
                                    <option value="Half Year">Half Year</option>
                                    <option value="Annual">Annual</option>
                                </select>
                                <legend tabIndex={-1} className={`${style.Legend}`}>Tarrif Plan</legend>
                            </fieldset>
                        </div>
                    </div>
                    <div className={`${style.Box} mt-20`}>
                        <div className={`font16 fw500 color222 mb-15`}>Payment Details</div>
                        <div className={`${style.Row} ${style.RowGroup3}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <select
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={internetInsertForm.paymentMethod}
                                    name="paymentMethod"
                                >
                                    <option>Select one</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Online">Online</option>
                                    <option value="Check">Check</option>
                                </select>
                                <legend tabIndex={-1} className={`${style.Legend}`}>Payment Method</legend>
                            </fieldset>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="number"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={internetInsertForm.totalAmount}
                                    name="totalAmount"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Plan Amount</legend>
                            </fieldset>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="number"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={internetInsertForm.invoiceNo}
                                    name="invoiceNo"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Invoice No</legend>
                            </fieldset>
                        </div>
                    </div>
                    <div className={`mt-20`}>
                        <button className={`${style.Button} bluefill_animate font15 fw500 colorFFF`} onClick={htmlToImageConvert}> Generate</button>
                        <button className={`${style.Button} blue_whitefill_animate font15 fw500 color00A`}>Clear</button>
                    </div>
                </div>






                <div className={`${style.Preview} ${internetInsertForm.selectedLogo === "Hathway" ? style.Hathway : ""} ${internetInsertForm.selectedLogo === "Snet" ? style.Snet: ""}`}>
                    <div className={`${style.InternetPreview}`} ref={elementRef}>
                        {console.log(internetInsertForm)}
                        <div className={`${style.Row} ${style.RowGroup2}`}>
                            <div className={`${style.PreviewLogo}`}>
                                <img
                                    width={100}
                                    className={`${style.PreviewLogoImage}`}
                                    src={internetInsertForm.selectedLogoURL}
                                />
                                <div>
                                    <div className={`font11 fw700 color222 pl-30`}>{internetInsertForm.providerName}</div>
                                    <div className={`font11 fw700 color222 pl-30`}>{internetInsertForm.providerAddress}</div>
                                </div>
                            </div>
                            <div className={`pl-50`}>
                                <div className={`font10 fw400 text_right`} style={{color: '#ec262f'}}>Original Copy for Recipient - Tax Invoice </div>
                            </div>
                        </div>
                        <div className={`${style.Row} ${style.RowGroup2} mt-20`}>
                            <div className={`${style.WhiteBox}`}>
                                <div className={`${style.WhiteRow}`}>
                                    <span className={`${style.LabelItem} font11 fw500 color222`}>Account Number:</span>
                                    <span className={`${style.LabelText} font11 fw500 color222`}>: {internetInsertForm.acountNumber} </span>
                                </div>
                                <div className={`${style.WhiteRow}`}>
                                    <span className={`${style.LabelItem} font11 fw500 color222`}>Account Name:</span>
                                    <span className={`${style.LabelText} font11 fw500 color222`}>: {internetInsertForm.customerName} </span>
                                </div>
                                <div className={`${style.WhiteRow}`}>
                                    <span className={`${style.LabelItem} font11 fw500 color222`}>Account Address:</span>
                                    <span className={`${style.LabelText} font11 fw500 color222`}>: {internetInsertForm.customerAddress} </span>
                                </div>
                                <div className={`${style.WhiteRow}`}>
                                    <span className={`${style.LabelItem} font11 fw500 color222`}>Email Id:</span>
                                    <span className={`${style.LabelText} font11 fw500 color222`}>: {internetInsertForm.customerEmail}</span>
                                </div>
                                <div className={`${style.WhiteRow}`}>
                                    <span className={`${style.LabelItem} font11 fw500 color222`}>Mobile No:</span>
                                    <span className={`${style.LabelText} font11 fw500 color222`}>: {internetInsertForm.customerMobile} </span>
                                </div>
                                <div className={`${style.WhiteRow}`}>
                                    <span className={`${style.LabelItem} font11 fw500 color222`}>Broadband Plan:</span>
                                    <span className={`${style.LabelText} font11 fw500 color222`}>: {internetInsertForm.tarrifPlan}Family Plan</span>
                                </div>
                            </div>
                            <div className={`${style.WhiteBox}`}>
                                <div className={`${style.WhiteRow}`}>
                                    <span className={`${style.LabelItem} font11 fw500 color222`}>Invoice Number:</span>
                                    <span className={`${style.LabelText} font11 fw500 color222`}>: IN{internetInsertForm.invoiceNo}</span>
                                </div>
                                <div className={`${style.WhiteRow}`}>
                                    <span className={`${style.LabelItem} font11 fw500 color222`}>Invoice Cycle:</span>
                                    <span className={`${style.LabelText} font11 fw500 color222`}>: </span>
                                </div>
                                <div className={`${style.WhiteRow}`}>
                                    <span className={`${style.LabelItem} font11 fw500 color222`}>Invoice Period:</span>
                                    <span className={`${style.LabelText} font11 fw500 color222`}> : {internetInsertForm.billingFrom} to {internetInsertForm.billingTo}</span>
                                </div>
                                <div className={`${style.WhiteRow}`}>
                                    <span className={`${style.LabelItem} font11 fw500 color222`}>Invoice Date:</span>
                                    <span className={`${style.LabelText} font11 fw500 color222`}>: {internetInsertForm.billingDate}</span>
                                </div>
                                <div className={`${style.WhiteRow}`}>
                                    <span className={`${style.LabelItem} font11 fw500 color222`}>Payment Method:</span>
                                    <span className={`${style.LabelText} font11 fw500 color222`}>: {internetInsertForm.paymentMethod}</span>
                                </div>
                            </div>
                            </div>
                            <div className={`${style.Row} mt-20`}>
                            <div className>
                                <h6 className={`font14 fw600 color333 mb-10`}>Service Plan Summary</h6>
                            </div>
                            <div className={`${style.SquareList}`}>
                                <div className={`${style.SquareBox}`}>
                                    <label className={`${style.SquareLable} font11 fw500 colorFFF`}>Plan Speed</label>
                                    <div className={`font14 fw600 colorFFF`}>{internetInsertForm.planSpeed}</div>
                                </div>
                                <div className={`${style.SquareBox}`}>
                                    <label className={`${style.SquareLable} font11 fw500 colorFFF`}>Plan Package</label>
                                    <div className={`font14 fw600 colorFFF`}>{internetInsertForm.tarrifPlanPackage}</div>
                                </div>
                                <div className={`${style.SquareBox}`}>
                                    <label className={`${style.SquareLable} font11 fw500 colorFFF`}>Plan Validity</label>
                                    <div className={`font14 fw600 colorFFF`}>30 Days </div>
                                </div>
                                <div className={`${style.SquareBox}`}>
                                    <label className={`${style.SquareLable} font11 fw500 colorFFF`}>Plan Amount</label>
                                    <div className={`font14 fw600 colorFFF`}> <span className={`${style.RupIcon}`}>₹</span> {internetInsertForm.totalAmount}</div>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.Row} mt-20`}>
                            <div className>
                                <h6 className={`font14 fw600 color333 mb-10`}>Subscription Details </h6>
                            </div>
                            <div className={`${style.FixedTableContainer} ${style.TableContainer}`}>
                                <table className={`${style.FixedTable} ${style.Table}`}>
                                    <thead className={`${style.TableHead}`}>
                                        <tr>
                                        <th>Package</th>
                                        <th />
                                        <th />
                                        <th>Net Charges</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`${style.TableBody}`}>
                                        <tr>
                                        <td> <span id="printInternetSpeed" /> <span id="printInternetPackage" /> <small className={`font11 fw400 color777`}>Subscription Charges</small></td>
                                        <td> </td>
                                        <td> </td>
                                        <td><span className={`${style.RupIcon}`}>₹</span> <span id="printInternetNetCharges" /></td>
                                        </tr>
                                        <tr>
                                        <td>CGST(9%) </td>
                                        <td />
                                        <td />
                                        <td> <span className={`${style.RupIcon}`}>₹</span> <span id="printInternetCGST" /> </td>
                                        </tr>
                                        <tr>
                                        <td>SGST(9%) </td>
                                        <td />
                                        <td />
                                        <td> <span className={`${style.RupIcon}`}>₹</span> <span id="printInternetSGST" /> </td>
                                        </tr>
                                        <tr>
                                        <td><span className={`fw700`}>Total</span></td>
                                        <td />
                                        <td />
                                        <td> <span className={`fw700`}><span className={`${style.RupIcon}`}>₹</span> <span id="printInternetTotal" /></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={`${style.Row} mt-20`}>
                            <h6 className={`font14 fw600 color333 mb-10`}>Terms and Conditions</h6>
                            <div className={`font10 fw400 color777`}>♣ &nbsp; All payments to be made in favour of <span id="printInternetProvider">SNET Networks Pvt. Ltd.</span> </div>
                            <div className={`font10 fw400 color777`}>♣ &nbsp; In case of cheque bounce, ₹ 100/- penalty will be applicable.</div>
                            <div className={`font10 fw400 color777`}>♣ &nbsp; SNET Networks Pvt. Ltd. Shall levy late fee charge in case the bill is paid after the due date </div>
                            <div className={`font10 fw400 color777`}>♣ &nbsp; In case of overdue, the right to deactivate your services, is reserved.</div>
                            <div className={`font10 fw400 color777 mt-20 text_uppercase`}>This is a computer generated invoice and does not require any signature.</div>
                        </div>
                    </div>
                </div>
            </div >








        </section >
    );
};

export default Internt;
