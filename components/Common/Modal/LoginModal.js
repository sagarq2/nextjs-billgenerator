import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import style from "./LoginModal.module.scss"


const LoginModal = (props) => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    // useEffect(() => {
    //     validateForm();
    // }, [name, email, password]);
    const validateForm = () => {
        let errors = {};

        if (!name) {
            errors.name = 'Name is required.';
        }

        if (!email) {
            errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid.';
        }

        if (!password) {
            errors.password = 'Password is required.';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters.';
        }
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };
    const handleSubmit = () => {
        validateForm();
        if (isFormValid) {
            console.log('Form submitted successfully!');
        } else {
            console.log('Form has errors. Please correct them.');
        }
    };





  const modalContent = (
        <section className={`modal  ${style.Modal} `}>
            <div className={`${style.Content} modal_content fadeInUpTop `}>
                <div className={`${style.ModalBody} modal_body`}>
                    <div onClick={() => props.setShowLoginModal(!props.showLoginModal)} role="button" aria-label='Modal Close Icon' tabIndex={"0"} className={`${style.HeadClose} modal_close icon`}></div>
                    <div className={`${style.Form}`}>
                        <div className={`${style.FormLeft}`}>
                            <div className={`${style.FormImage}`} />
                            <div className={`${style.FormText}`}>
                                <div className={`font22 fw700 color222`}>Welcome to Login</div>
                                <div className={`font16 fw400 color222 mt-5`}>Don't have an account?</div>
                                <button className={`${style.Button} font18 fw500 mt-15 mb-40`}> Sign Up</button>
                            </div>
                        </div>
                        <div className={`${style.FormRight} `}>
                            <div className={`font22 fw700 color222 pt-20`}>Sign Up</div>
                            <input
                                className={`${style.Input} font16 fw400 color222 mt-20`}
                                placeholder="Name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                            {errors.name ? <div className={`${style.Error} font14 fw400`} >{errors.name}</div> : null}
                            <input
                                className={`${style.Input} font16 fw400 color222 mt-20`}
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email ? <div className={`${style.Error} font14 fw400`} >{errors.email}</div> : null}
                            <input
                                className={`${style.Input} font16 fw400 color222 mt-20`}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => {
                                    setErrors({...errors, password: ''});
                                    setPassword(e.target.value || '')
                                }}
                                type="password"
                            />
                            {errors.password ? <div className={`${style.Error} font14 fw400`} >{errors.password}</div> : null}
                            <button
                                className={`${style.Button} font18 fw500 colorFFF mt-20 mb-25`}
                                disabled={!(email && password && name)}
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        
        </section> 
  )
  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
    )
}


   


export default LoginModal;