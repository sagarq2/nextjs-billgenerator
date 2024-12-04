import React, { useState, useRef, useEffect} from 'react';
import style from "./Fuel.module.scss";
import {toJpeg } from 'html-to-image';


const DEFAULT_LOG_SELECTED = 'data:image/webp;base64,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'

const DEFAULT_LOGS = {
    BharatPetroleum: DEFAULT_LOG_SELECTED,

    IndianOil: 'data:image/webp;base64,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',
    HpOil:'data:image/webp;base64,UklGRqwIAABXRUJQVlA4WAoAAAAQAAAAbQAAgwAAQUxQSBMAAAABD9D/iAgISBL7vz+I6H/mkwEAAFZQOCByCAAA0CYAnQEqbgCEAD6RQpxMJaMioiIUCrCwEglpABXsvY5/hei490ZreaOtV90f3Hl13x/ED+79Qj8g/mv+e3k8AH59/TP+P/cvG71GvAHsAcD76D7Af5+9A/PM9Q/tD8CH67f9b1mPY36SCmoGyUpePSOz3xGFFI6Bjuz7U26Dfxy44DYFoUaPnu9L+rQfxK8O6NaYJIXHaFIVg37cYz/V+yM4xGO0d199zhB3Uxbq9S+yZ4BwAyWnZDAHyF1BCbs5vLB/8clXoVwNbElPYnWLfuXe9WqTnX6bNCPfa7BHjxiWNe0fPs3A4Wfo664/pJIQoYRTs9eBBJtKY4iyBOVKm168uTK/CKPRUo0vzF5wMht6k2lI/vS2hg29qYU4WqcO8og4CjypSFibxO0X0CB73ftfppVDKG+ZAF+9R3nqAAD9VU1B/9ZTFlvHYXILU9PKh6jzCQ4/i9YZvM+KPtugq3ogj6vY70F/Nsx2Cdq8+C6dAXmKWVyd2xmkz5mLgzIKA/ZBDcUYUlOXRHhhApn8v52rI0AIj0LRLmuf+fc8/zaXPaJ4uNGB5y/bNkU23T8cZKTfDxnbOMDWbeSQHGyK/3WPrYJcG5/TYLLUPNHtJNaPRXNz6XLus9VGffSUewgDevX4kH804fKgjT3Y5lbyFwQ1QYhdUdOHW5fHIxuTFiAvNaGRA0WQVSS9UPO/M7c//cb+eS/Nki7SlPny5y/VktOoS26hlWRMtmeDM76PWBqan5/TBTyQX/24ZnLVZHGJ2U/h1XJQWYwheiayuMiNvptdX5MXFSPnljgyAlV4ntRgq/Xx2um6XrWFszExSbXEVQ+B5YGUGfoRHGrNwOD4ZHfq2Gsh4iQGFt/x6Na91J8b7tizFav8FBfBlp1WwwmqH/AgcP9BT+5h4JllPR82wDxro864QfX6a+IyciLzgkmkBq1Q3POBAM3NdLrjcjKdX/+rDbsYIXwUdM7Y2AHMRK3SF4GbW3MsN8txY61qmMxx6KOPAHpvvVZ9f0nRTyC2krIHrmLYAm6dVkEoAMVcFF8iQQpCvg+DMpDZbyEKlAL4+u+UtIlGUAuCTpHk1z+IpLIQX8G8mHti2JI9xAK0woGplj7hwKnKifrS083stnmiEhw4ch5X+Jq27EWFiJDGnQ0Od1ezgwqt3eoG88H2bjNwDEGM1jMEfx6bErbd5bLBKDMBLw3Ifd0dXfHD2d1x+MDUmW7aT0lRPv2E58HEWlrs/7pI/3P8kac41bKKv/Gmty2kh6mAuKh0ajV14W7MA9N/GNkQJUpwyWwd/GItdBP/YGpJDFkVvyMQYP/FtqihTosYmYcAW3W/nFEC0IUFY6gM6XpxhQ0R49uakwQPPrdQO+qWpKvnqKD42AeKJtBTBXmWz9BO7BX3+/PboST0fHd58IejYGrobOC1my7u3l2dA2OBmIPdEoPJ/XkKHwlE7A3Q9fM+mxeU7tWQ2i96Sb5ujodGPJXti2JXFYH1VUGT1EV4Mabw5s//w4SkcXwnrFrzfIKXL2D6iVOkhfuuTUzrcV59H8P7ocAVBzaFWETwKyGRxqGEaz/29oo6MMKH/mKaxAKrLqQ+J1GbXvYxjKNDoQNYj7T/CTjOhRsXS8B6CiwIAGOhyo8E8P2DL8eksqsvubpNdL2a924wUOWpNIirdvM/OdznONp20ygU8xazyalF1aCjwRQXZa7BHx5I8BAg1tyw9twZl/u56ZZYqkGS9xZVbQggDxb/OEW4SSMEoG89I3xul/XDe4330MZyKdyylQrFtLxGr329U8lPxCPLdBGAWKt/w5qx8Tbju3vpaM2Frs8Y5njRFncGc9I/ksSFc6pfrBPvy8cSEWihDQephWWVzbUbERlBIom2PDK4/dDGQR5aHTX3SCpV/9Exg4O8iHA7o4WwY7pDy+3GbI0qcHau5qj01ZFCB/1c9g+wbdTiq1Q1jgTL6thfeqTFm+i4Ti0HYTygYfEfrLy/qJreo61619qx5/qdSHyUyXfQqsrKXstVVU36ZTNzxkhIAo4yJp0c8c/2EgWTk16G2ek4i7jl8R75M2yjLX4ycZqGrFsMwbS9aLGrNY7vXt7R/W2ssdyOFrZyZRjKriEEx5OV8UJgDZrcf7fnPydeyjwc1ltrnyrGrr5wyr1ZBsS6nO442Ye7lrGw/Kej8XiQUS2oXDlECV8mCBd2T/wdjtbDCa7ROccXRLK7Io3R2tpKqvmFc5fezkuo6CvKeeev/34Pst168bS9W+//5/io5cSNopHs3oEcMapPvkENQEAZga0Vv9EP3uhM2ZUPRMk1spCWU1WxLbbkKiEjbf5PFr75DW2vvgXECeHXBla11zDLh3ioVf2BNzzvmjXOmOCAovs/63RI41Irk9msAQtCMte/rtblcPjE71mf9v1S32Gpf/LL6Xpi+eqqEQYrcFKuJ0bGr+QM/3kkR+b34A6H2JGyC9eSBD9Vv4aD/XzgupHl3QoxmksIwC6ypTbzx4VkAGt1rXWGz3HWOQWT1Cgt+uV2tQ8MMvr6EfwOgWAyv5BTQ9uIStj5ECIQ6NUmRh/iv3ra6jmB8kigR8S9UydQB1zUGPm1P1/MAb2GG9HzkZ8cJ4JO1zHheXQP7n7b9Bj0jw4uFBIf3neYhXiFBd78no+xXtzZRrjiTqMHOd/eIb8NiWFjtc/GR3asIA3HEAVgtdbYBGKtZeSL99YzfpHso4pBWHR4GUNmNi/8qpOWWx7ON1LTPpnbwdfVY0GR2lPyMbz9rHXl8r7pU3yJ7oZKVzUD16O/UeEzjHUvPyXgOD63Lmd6BnTG8bcW0CfD43MwasFb40b1xW3hWLLuiwr0gyNfGIL/j7s06+l3pnYRDUYQtUnanXgH5XjfAOi+R2AAAAA='
}

const Fuel = () => {
    "use client"
    const [fuelInsertForm, setFuelInsertForm] = useState({
        selectedLogo: 'BharatPetroleum',
        selectedLogoURL: DEFAULT_LOG_SELECTED,
        fuelStationName: '',
        fuelStationAddress: '',
        fuelRate: '',
        fuelTotalAmount: '',
        fuelBillDate: '',
        fuelBillTime: '',
        customerName: '',
        vehicleNumber: '',
        vehicleType: '',
        paymentMethod: '',
        invoiceNumber: ''
    });

    useEffect(() => {
        setFuelInsertForm({
            ...fuelInsertForm,
            invoiceNumber: Math.floor(Math.random() * 100000) + 1
        })
    }, [])

    const handleInputChange = (event) => {
        const { value, name } = event?.target;
        setFuelInsertForm({
            ...fuelInsertForm,
            [name]: value
        })
    };

    const handleClear = () => {
        setFuelInsertForm({
            selectedLogo: '',
            selectedLogoURL: "",
            fuelStationName: '',
            fuelStationAddress: '',
            fuelRate: '',
            fuelTotalAmount: '',
            fuelBillDate: '',
            fuelBillTime: '',
            customerName: '',
            vehicleNumber: '',
            vehicleType: '',
            paymentMethod: '',
            invoiceNumber: Math.floor(Math.random() * 100000) + 1

        });
    }

    
    const handleRadioChange = (event) => {
        const { name } = event?.target;
        setFuelInsertForm({
            ...fuelInsertForm,
            ['selectedLogo']: name,
            selectedLogoURL: DEFAULT_LOGS[name]

        });

    };

    const elementRef = useRef(null);
    const htmlToImageConvert = () => {
        toJpeg(elementRef.current, { cacheBust: false })
          .then((dataUrl) => {
            const link = document.createElement("a");
            link.download = "fuel.jpeg";
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
        const newErrors = validateForm(fuelInsertForm);
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

        if(!data.fuelStationName.trim()) {
            errors.fuelStationName = 'Fuel station name is required';
        }
        if(!data.fuelStationAddress.trim()) {
            errors.fuelStationAddress = 'Fuel station address is required';
        }
        if(!data.fuelRate.trim()) {
            errors.fuelRate = 'Fuel rate is required';
        }
        if(!data.fuelTotalAmount.trim()) {
            errors.fuelTotalAmount = 'Fuel Total Amount is required';
        }
        if(!data.fuelBillDate.trim()) {
            errors.fuelBillDate = 'Fuel bill date is required';
        }
        if(!data.fuelBillTime.trim()) {
            errors.fuelBillTime = 'Fuel bill time is required';
        }
        if(!data.customerName.trim()) {
            errors.customerName = 'customer name is required';
        }
        if(!data.vehicleNumber.trim()) {
            errors.vehicleNumber = 'vehicle number is required';
        }
        if(!data.vehicleType.trim()) {
            errors.vehicleType = 'vehicle type is required';
        }
        if(!data.paymentMethod.trim()) {
            errors.paymentMethod = 'payment method is required';
        }
        // if(!data.invoiceNumber.trim()) {
        //     errors.invoiceNumber = 'invoice number is required';
        // }
        return errors;
    }

    // let volumeNumber = (fuelTotalAmount) / (fuelRate)
    // let volumeNumberFixed = volumeNumber.toFixed(2).toLowerCase();


    return (
        <section className={`${style.FuelPage}`}>
            <h1 className={`font26 fw700 color222`}>Fuel Bill</h1>


            <div className={`${style.Contant}`}>
                <div className={`${style.FormDetails}`} onSubmit={handleSubmit}>

                    <div className={`${style.Box} mt-20`}>
                        <div className={`font16 fw500 color222 mb-15`}>Fuel Station</div>
                        <div className={`${style.Row} ${style.RowGroup3} mt-10`}>
                            <label htmlFor="BharatPetroleum" className={`${style.AnimLabel}`}>
                                <input
                                    className={`${style.AnimRadio}`}
                                    name="BharatPetroleum"
                                    id="BharatPetroleum"
                                    type="radio"
                                    checked={fuelInsertForm.selectedLogo === "BharatPetroleum"}
                                    onChange={handleRadioChange}
                                />
                                <span className={`${style.AnimIcon}`} />
                                Bharat Petroleum
                            </label>
                            <label htmlFor="IndianOil" className={`${style.AnimLabel}`}>
                                <input
                                    className={`${style.AnimRadio}`}
                                    name="IndianOil"
                                    id="IndianOil"
                                    type="radio"
                                    checked={fuelInsertForm.selectedLogo === "IndianOil"}
                                    onChange={handleRadioChange}
                                />
                                <span className={`${style.AnimIcon}`} />
                                Indian Oil
                            </label>
                            <label htmlFor="HpOil" className={`${style.AnimLabel}`}>
                                <input
                                    className={`${style.AnimRadio}`}
                                    name="HpOil"
                                    id="HpOil"
                                    type="radio"
                                    checked={fuelInsertForm.selectedLogo === "HpOil"}
                                    onChange={handleRadioChange}
                                />
                                <span className={`${style.AnimIcon}`} />
                                HP Oil
                            </label>
                        </div>
                        <div className={`${style.Row}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="text"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={fuelInsertForm.fuelStationName}
                                    name="fuelStationName"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Fuel Station Name</legend>
                                {errors.fuelStationName && (<div className={`${style.Error} font14 fw400`} >{errors.fuelStationName}</div>)}
                            </fieldset>
                        </div>
                        <div className={`${style.Row}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <textarea
                                    className={`${style.FormControl} ${style.Textarea} font16 fw500 color222`}
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={fuelInsertForm.fuelStationAddress}
                                    name="fuelStationAddress"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Fuel Station Address</legend>
                                {errors.fuelStationAddress && (<div className={`${style.Error} font14 fw400`} >{errors.fuelStationAddress}</div>)}
                            </fieldset>
                        </div>
                    </div>

                    <div className={`${style.Box} mt-20`}>
                        <div className={`font16 fw500 color222 mb-15`}>Fuel Details</div>
                        <div className={`${style.Row} ${style.RowGroup2}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="number"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={fuelInsertForm.fuelRate}
                                    name="fuelRate"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Fuel Rate</legend>
                                {errors.fuelRate && (<div className={`${style.Error} font14 fw400`} >{errors.fuelRate}</div>)}
                            </fieldset>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="number"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={fuelInsertForm.fuelTotalAmount}
                                    name="fuelTotalAmount"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Total Amount</legend>
                                {errors.fuelTotalAmount && (<div className={`${style.Error} font14 fw400`} >{errors.fuelTotalAmount}</div>)}
                            </fieldset>
                        </div>
                        <div className={`${style.Row} ${style.RowGroup2}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="date"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={fuelInsertForm.fuelBillDate}
                                    name="fuelBillDate"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Fuel Bill Date</legend>
                                {errors.fuelBillDate && (<div className={`${style.Error} font14 fw400`} >{errors.fuelBillDate}</div>)}
                            </fieldset>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="time"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={fuelInsertForm.fuelBillTime}
                                    name="fuelBillTime"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Fuel Bill Time</legend>
                                 {errors.fuelBillTime && (<div className={`${style.Error} font14 fw400`} >{errors.fuelBillTime}</div>)}
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
                                    aria-required="true"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={fuelInsertForm.customerName}
                                    name="customerName"

                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Customer Name</legend>
                                 {errors.customerName && (<div className={`${style.Error} font14 fw400`} >{errors.customerName}</div>)}
                            </fieldset>
                        </div>
                        <div className={`${style.Row} ${style.RowGroup2}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="text"
                                    aria-required="true"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={fuelInsertForm.vehicleNumber}
                                    name="vehicleNumber"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Vehicle Number</legend>
                                {errors.vehicleNumber && (<div className={`${style.Error} font14 fw400`} >{errors.vehicleNumber}</div>)}

                            </fieldset>
                            <fieldset className={`${style.Fieldset}`}>
                                <select
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={fuelInsertForm.vehicleType}
                                    name="vehicleType"
                                >
                                    <option>Select one</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Petrol">Petrol</option>
                                    <option value="CNG">CNG</option>
                                    <option value="Electric">Electric</option>
                                </select>
                                <legend tabIndex={-1} className={`${style.Legend}`}>Vehicle Type</legend>
                                {errors.vehicleType && (<div className={`${style.Error} font14 fw400`} >{errors.vehicleType}</div>)}
                            </fieldset>
                        </div>
                        <div className={`${style.Row} ${style.RowGroup2}`}>
                            <fieldset className={`${style.Fieldset}`}>
                                <select
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={fuelInsertForm.paymentMethod}
                                    name="paymentMethod"
                                >
                                    <option>Select one</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Online">Online</option>
                                    <option value="Card">Card</option>
                                </select>
                                <legend tabIndex={-1} className={`${style.Legend}`}>Payment Method</legend>
                                {errors.paymentMethod && (<div className={`${style.Error} font14 fw400`} >{errors.paymentMethod}</div>)}
                            </fieldset>
                            <fieldset className={`${style.Fieldset}`}>
                                <input
                                    className={`${style.FormControl} font16 fw500 color222`}
                                    type="text"
                                    aria-required="true"
                                    required
                                    onChange={(e) => handleInputChange(e)}
                                    value={fuelInsertForm.invoiceNumber}
                                    name="invoiceNumber"
                                />
                                <legend tabIndex={-1} className={`${style.Legend}`}>Invoice Number</legend>
                                {errors.invoiceNumber && (<div className={`${style.Error} font14 fw400`} >{errors.invoiceNumber}</div>)}
                            </fieldset>
                        </div>
                    </div>
                    <div className={`mt-20`}>
                        <button className={`${style.Button} bluefill_animate font15 fw500 colorFFF`} 
                            disabled={
                                !(
                                fuelInsertForm.fuelStationName &&
                                fuelInsertForm.fuelStationAddress &&
                                fuelInsertForm.fuelRate &&
                                fuelInsertForm.fuelTotalAmount &&
                                fuelInsertForm.fuelBillDate && 
                                fuelInsertForm.fuelBillTime && 
                                fuelInsertForm.customerName && 
                                fuelInsertForm.vehicleNumber && 
                                fuelInsertForm.vehicleType && 
                                fuelInsertForm.paymentMethod && 
                                fuelInsertForm.invoiceNumber
                            )
                        }
                            onClick={handleSubmit}
                            > Generate
                        </button>
                        <button className={`${style.Button} blue_whitefill_animate font15 fw500 color00A`}  onClick={handleClear}>Clear</button>
                    </div>
                </div>




                <div className={`${style.Preview}`}>
                    <div className={`${style.FuelPreview}`} ref={elementRef}>
                        <div className={`${style.PreviewStrip}`} />
                        <div className={`${style.PreviewLogo}`} >
                            <img
                                width={80}
                                height={80}
                                src={fuelInsertForm.selectedLogoURL}
                            />
                        </div>
                        <div className={`${style.PreviewAddress}`} >
                            <div >Welcome !!!</div>
                            {fuelInsertForm.fuelStationName}
                            {fuelInsertForm.fuelStationAddress}
                        </div>
                        <div className={`${style.PreviewReceipt}`} >
                            <div className={`${style.ReceiptRow}`} >
                                Receipt Number : 
                                {fuelInsertForm.invoiceNumber}

                            </div>
                        </div>
                        <div className={`${style.PreviewReceipt}`} >
                            <div className={`${style.ReceiptRow}`} >
                                Product : {fuelInsertForm.vehicleType}
                            </div>
                            <div className={`${style.ReceiptRow}`} >
                                Rate/LTR : <span className={`${style.ReceiptIcon} font13 fw600`} >₹ </span>{" "}
                                {fuelInsertForm.fuelRate}
                            </div>
                            <div className={`${style.ReceiptRow}`} >
                                Amount : <span className={`${style.ReceiptIcon} font13 fw600`} >₹ </span>{" "}
                                {fuelInsertForm.fuelTotalAmount}
                            </div>
                            <div className={`${style.ReceiptRow}`} >
                                Volume : {(fuelInsertForm.fuelTotalAmount / fuelInsertForm.fuelRate).toFixed(2).toLowerCase()} LTR
                            </div>
                        </div>
                        <div className={`${style.PreviewReceipt}`} >
                            <div className={`${style.ReceiptRow}`} >
                                Vehicle Type : {fuelInsertForm.vehicleType}
                            </div>
                            <div className={`${style.ReceiptRow}`} >
                                Vehicle No. : {fuelInsertForm.vehicleNumber}
                            </div>
                            <div className={`${style.ReceiptRow}`} >
                                Customer Name : {fuelInsertForm.customerName}
                            </div>
                        </div>
                        <div className={`${style.PreviewReceipt}`} >
                            <div className={`${style.ReceiptRow}`} >
                                Date : {fuelInsertForm.fuelBillDate}
                            </div>
                            <div className={`${style.ReceiptRow}`} >
                                Time : {fuelInsertForm.fuelBillTime}
                            </div>
                            <div className={`${style.ReceiptRow}`} >
                                Mode : {fuelInsertForm.paymentMethod}
                            </div>
                        </div>
                        <div className={`${style.PreviewTextarea}`} >
                            <div>Thank you! Visit again</div>
                            <div>Save fuel, save money !!</div>
                            <div>Thanks for fueling with us.</div>
                            <div>You can now call us on 492884 (toll-free) for queries/complaints.</div>
                        </div>
                    </div>
                </div>
            </div>


        </section >
    );
};

export default Fuel;
