import React, { useState, useRef} from 'react';
import style from "./Rent.module.scss";
import {toJpeg } from 'html-to-image';


const Rent = () => {
    const converter = require('number-to-words');
    const [rentInsertForm, setRentInsertForm] = useState({
        employeeName: '',
        rentHouseAddress: '',
        landlordName: '',
        landlordPancard: '',
        recipetDate: '',
        rentAmount: '',
        fromMonth: '',
        toMonth: '',
        signatureImage: ''

    });

    const handleClear = () => {
        setRentInsertForm({
            employeeName: '',
            rentHouseAddress: '',
            landlordName: '',
            landlordPancard: '',
            recipetDate: '',
            rentAmount: '',
            fromMonth: '',
            toMonth: '',
            signatureImage:''

        });
    }
    const handleInputChange = (event) => {
        const { value, name } = event?.target;
        setRentInsertForm({
            ...rentInsertForm,
            [name]: value
        })
    };
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const elementRef = useRef(null);
    const htmlToImageConvert = () => {
        toJpeg(elementRef.current, { cacheBust: false })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "rent.jpeg";
            link.href = dataUrl;
            link.click();
          })
          .catch((err) => {
            console.log(err);
          });
    };

    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(rentInsertForm);
        setErrors(newErrors);
        
        if(Object.keys(newErrors).length === 0) {
            console.log('Form submitted successfully!');
            htmlToImageConvert();
        } else {
            console.log("Form submission failed due to validation errors.")
        }

    }

   
    const validateForm = (data) => {
        const errors = {};

        if(!data.employeeName.trim()) {
            errors.employeeName = 'Employee name is required';
        }
        if(!data.rentHouseAddress.trim()) {
            errors.rentHouseAddress = 'Rent house address is required';
        }
        if(!data.landlordName.trim()) {
            errors.landlordName = 'Landlord name is required';
        }
        if(!data.landlordPancard.trim()) {
            errors.landlordPancard = 'Landlord pancard is required';
        }
        if(!data.recipetDate.trim()) {
            errors.recipetDate = 'Recipet date is required';
        }
        if(!data.rentAmount.trim()) {
            errors.rentAmount = 'Rent amount is required';
        }
        if(!data.fromMonth.trim()) {
            errors.fromMonth = 'From month is required';
        }
        if(!data.toMonth.trim()) {
            errors.toMonth = 'To month is required';
        }


        
        return errors;
    }

    return (
        <section className={`${style.RentPage}`}>
            <h1 className={`font26 fw700 color222`}>Rent Bill</h1>


            <div className={`${style.Contant}`}>
                <div className={`${style.FormDetails}`}>

                    <div className={`${style.Box} mt-20`}>
                        <div className={`font16 fw500 color222 mb-15`}>Employee Details</div>
                        
                        <div className={`${style.Row}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="text"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={rentInsertForm.employeeName}
                                    name="employeeName"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Employee Name</legend>
                            </fieldset>
                        </div>
                        <div className={`${style.Row}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <textarea
                                    className={`${style.FormControl} ${style.Textarea} font16 fw500 color222`}
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={rentInsertForm.rentHouseAddress}
                                    name="rentHouseAddress"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Rent House Address</legend>
                            </fieldset>
                        </div>
                    </div>

                    <div className={`${style.Box} mt-20`}>
                        <div className={`font16 fw500 color222 mb-15`}>Landlord Details</div>
                        <div className={`${style.Row} `}>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="text"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={rentInsertForm.landlordName}
                                    name="landlordName"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Landlord Name</legend>

                            </fieldset>
                        </div>
                        <div className={`${style.Row} ${style.RowGroup2}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="text"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={rentInsertForm.landlordPancard}
                                    name="landlordPancard"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Landlord Pancard</legend>
                            </fieldset>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="date"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={rentInsertForm.recipetDate}
                                    name="recipetDate"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Recipet Date</legend>
                            </fieldset>
                        </div>
                    </div>
                    <div className={`${style.Box} mt-20`}>
                        <div className={`font16 fw500 color222 mb-5`}>Rent Details</div>
                        <div className={`font12 fw400 mb-15`} style={{color:'#D0342B'}}>Select quarterly base months(e.g Jan 2024 to March 2024)</div>
                        <div className={`${style.Row} ${style.RowGroup2}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="number"
                                    aria-required="true"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={rentInsertForm.rentAmount}
                                    name="rentAmount"

                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Rent Amount</legend>
                            </fieldset>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="file"
                                    aria-required="true"
                                    required
                                    onChange={handleChange}
                                    value={rentInsertForm.signatureImage}
                                    name="signatureImage"

                                />
                                 
                                <legend tabIndex={-1} className={`${style.Legend}`}>Signature Image</legend>
                            </fieldset>
                        </div>
                        <div className={`${style.Row} ${style.RowGroup2}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <select
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={rentInsertForm.fromMonth}
                                    name="fromMonth"
                                >
                                    <option>Select one</option>
                                    <option value="January 2025">January 2025</option>
                                    <option value="February 2025">February 2025</option>
                                    <option value="March 2025">March 2025</option>
                                    <option value="April 2024">April 2024</option>
                                    <option value="May 2024">May 2024</option>
                                    <option value="June 2024">June 2024</option>
                                    <option value="July 2024">July 2024</option>
                                    <option value="August 2024">August 2024</option>
                                    <option value="September 2024">September 2024</option>
                                    <option value="October 2024">October 2024</option>
                                    <option value="November 2024">November 2024</option>
                                    <option value="December 2024">December 2024</option>
                                </select>
                                <legend tabIndex={-1} className={`${style.Legend}`}>From Month</legend>
                            </fieldset>
                            <fieldset className={`${style.Fieldset}`}>
                                <select
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={rentInsertForm.toMonth}
                                    name="toMonth"
                                >
                                    <option>Select one</option>
                                    <option value="January 2025">January 2025</option>
                                    <option value="February 2025">February 2025</option>
                                    <option value="March 2025">March 2025</option>
                                    <option value="April 2024">April 2024</option>
                                    <option value="May 2024">May 2024</option>
                                    <option value="June 2024">June 2024</option>
                                    <option value="July 2024">July 2024</option>
                                    <option value="August 2024">August 2024</option>
                                    <option value="September 2024">September 2024</option>
                                    <option value="October 2024">October 2024</option>
                                    <option value="November 2024">November 2024</option>
                                    <option value="December 2024">December 2024</option>
                                </select>
                                <legend tabIndex={-1} className={`${style.Legend}`}>To Month</legend>
                            </fieldset>
                        </div>
                    </div>
                    <div className={`mt-20`}>
                        <button className={`${style.Button} bluefill_animate font15 fw500 colorFFF`} 
                            disabled={
                                !(
                                rentInsertForm.employeeName &&
                                rentInsertForm.rentHouseAddress &&
                                rentInsertForm.landlordName &&
                                rentInsertForm.landlordPancard &&
                                rentInsertForm.recipetDate && 
                                rentInsertForm.rentAmount && 
                                rentInsertForm.fromMonth && 
                                // rentInsertForm.signatureImage && 
                                rentInsertForm.toMonth 
                            )
                        }
                            onClick={handleSubmit}
                        > Generate</button>
                        <button className={`${style.Button} blue_whitefill_animate font15 fw500 color00A`} onClick={handleClear}>Clear</button>
                    </div>
                </div>





                <div className={`${style.Preview}`} >
                    <div className={`${style.RentPreview}`} ref={elementRef}>
                        <div className={`pl-40 pr-40 row text_center mt-20 `}>
                            <div className={`font25 fw700 color222`}>Receipt of House Rent</div>
                            <div className={`font14 fw400 color555`}>Under Section 1 (13-A) of Income Tax Act</div>
                        </div>
                        <div className={`pl-40 pr-40 row mt-50`}>
                            <div className={`${style.RentText} font16 fw400 color333 mb-30`}>Recived a sum of Rs. <span className={`font18 fw700 color222 pl-20 pr-20`}> {(rentInsertForm.rentAmount) * 3 } /-</span></div>
                            <div className={`${style.RentText} font18 fw700 color222 mb-30`}> {(converter.toWords(+rentInsertForm.rentAmount))} rupees only</div>
                            <div className={`${style.RentText} font16 fw400 color333 mb-30`}>from <span className={`font18 fw700 color222 pl-20 pr-20`}>{rentInsertForm.employeeName}</span> towords the rent Rs. <span className={`font18 fw700 color222 pl-10 pr-10`} > {rentInsertForm.rentAmount} /-</span> 
                            </div>
                            <div className={`${style.RentText} font16 fw400 color333 mb-30`}>
                                
                                per month from <span className={`font18 fw700 color222 pl-10 pr-10`} >{rentInsertForm.fromMonth} </span> to <span className={`font18 fw700 color222 pl-10 pr-10`} >{rentInsertForm.toMonth}</span> in respect of House No. 
                            </div>
                            <div className={`${style.RentText} font18 fw700 color222 mb-30`} >{rentInsertForm.rentHouseAddress}</div>
                            <div className={`${style.RentText} font16 fw400 color333 mb-30`}>I further declare that what is stated above is correct and true.</div>
                        </div>
                        <div className={`${style.RowGroup2} ${style.Row} pl-40 pr-40 mt-30`}>
                            <div className={`font16 fw400 color333`}> 
                                Date : <span className={`fw700 color222`}>{rentInsertForm.recipetDate}</span>
                            </div>
                            <div className={`font16 fw400 color333 text_right`}>
                                <div className={`${style.SignatureBox}`}>
                                    <img
                                        src="/Revenu.jpg"
                                        height={75}
                                        width={75}
                                        alt={'Revenu'}
                                    />
                                    <img className={`${style.Signature}`} src={file} height={55} />
                                    <img className={`${style.Signature}`} src={file} height={55} />
                                    <img className={`${style.Signature}`} src={file} height={55} />
                                    <img className={`${style.Signature}`} src={file} height={55} />
                                </div>
                                
                                <div className={`mt-15`}> Signature of House Owner</div>
                            </div>
                        </div>
                        <div className={`${style.RowGroup2} ${style.Row} pl-40 pr-0 mt-50`}>
                            <div />
                            <div className={`text_right`}>
                                <div className={`${style.WhiteRow} mb-10`}>
                                    <span className={`${style.LabelItem} font16 fw400 color333`}>Name:</span>
                                    <span className={`${style.LabelText} font16 fw600 color222`} >{rentInsertForm.landlordName}</span>
                                </div>
                                <div className={`${style.WhiteRow} mb-10`}>
                                    <span className={`${style.LabelItem} font16 fw400 color333`}>Addres:</span>
                                    <span className={`${style.LabelText} font16 fw600 color222`}>{rentInsertForm.rentHouseAddress}</span>
                                </div>
                                <div className={`${style.WhiteRow} mb-10`}>
                                    <span className={`${style.LabelItem} font16 fw400 color333`}>Pan No:</span>
                                    <span className={`${style.LabelText} font16 fw600 color222`}>{rentInsertForm.landlordPancard}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div >








        </section >
    );
};

export default Rent;
