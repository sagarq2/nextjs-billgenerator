import React, { useState } from "react";
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link';
import style from "./Header.module.scss";

const Header = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [showLogin, setShowLogin] = useState(false)

    return (
        <>
            <header className={`${style.Header}`}>
                <div className={`${style.Left}`}>
                    <div className={`${style.Logo}`} >
                            <img
                            src="/vercel.svg"
                            height={50}
                            width={225}
                            alt={'logo'}
                            onClick={() => router.push('/')}
                            className="pointer"
                            />
                    </div>
                </div>
                <div className={`${style.Right}`}>

                    <nav className={`${style.Navigation}`} aria-label="navbar">
                        <ul className={`${style.NavList}`} >
                            <li className={`${style.NavItem}`} >
                                <Link className={`${style.NavItemAnchor} whitefill_animate ${pathname === '/' ? `${style.NavItemActive}` : ''}`}  href={'/'} >
                                    <span className={`${style.NavIcon} icon color222 material-symbols-outlined mr-4 `}>home</span>
                                    <span className={`font14 fw400 color222`}>Home</span>
                                </Link>
                            </li>
                            {/* <li className={`${style.NavItem}`} >
                                <Link href={`/`} className={`${style.NavItemAnchor} whitefill_animate`} >
                                    <span className={`${style.NavIcon} icon color222 material-symbols-outlined mr-4`}>perm_contact_calendar</span>
                                    <span className={`font14 fw400 color222`}>About</span>
                                </Link>
                            </li> */}
                            <li className={`${style.NavItem}`} >
                                <Link className={`${style.NavItemAnchor} whitefill_animate ${pathname === '/bills' ? `${style.NavItemActive}` : ''}`} href={`/bills`}  >
                                    <span className={`${style.NavIcon} icon color222 material-symbols-outlined mr-4`}>local_atm</span>
                                    <span className={`font14 fw400 color222`}>Bills</span>
                                </Link>
                                <div className={`${style.NavDropDown}`}>
                                    <ul className={`${style.NavDropList}`}>
                                        <li className={`${style.NavDropItem}`}>
                                            <a className={`${style.NavDropItemAnchor} whitefill_animate`}>
                                                <span className={`${style.NavDropIcon} icon color222 material-symbols-outlined mr-4`}>local_gas_station</span>
                                                <span className={`font14 fw400 color222`}>Fuel Bill</span>
                                            </a>
                                        </li>
                                        <li className={`${style.NavDropItem}`}>
                                            <a className={`${style.NavDropItemAnchor} whitefill_animate`}>
                                                <span className={`${style.NavDropIcon} icon color222 material-symbols-outlined mr-4`}>payments</span>
                                                <span className={`font14 fw400 color222`}>Driver Salary</span>
                                            </a>
                                        </li>
                                        <li className={`${style.NavDropItem}`}>
                                            <a className={`${style.NavDropItemAnchor} whitefill_animate`}>
                                                <span className={`${style.NavDropIcon} icon color222 material-symbols-outlined mr-4`}>help_clinic</span>
                                                <span className={`font14 fw400 color222`}>Helper Bill</span>
                                            </a>
                                        </li>
                                        <li className={`${style.NavDropItem}`}>
                                            <a className={`${style.NavDropItemAnchor} whitefill_animate`}>
                                                <span className={`${style.NavDropIcon} icon color222 material-symbols-outlined mr-4`}>receipt</span>
                                                <span className={`font14 fw400 color222`}>Rent Receipt</span>
                                            </a>
                                        </li>
                                        <li className={`${style.NavDropItem}`}>
                                            <a className={`${style.NavDropItemAnchor} whitefill_animate`}>
                                                <span className={`${style.NavDropIcon} icon color222 material-symbols-outlined mr-4`}>library_books</span>
                                                <span className={`font14 fw400 color222`}>Book Invoice</span>
                                            </a>
                                        </li>
                                        <li className={`${style.NavDropItem}`}>
                                            <a className={`${style.NavDropItemAnchor} whitefill_animate`}>
                                                <span className={`${style.NavDropIcon} icon color222 material-symbols-outlined mr-4`}>wifi</span>
                                                <span className={`font14 fw400 color222`}>Internet Invoice</span>
                                            </a>
                                        </li>
                                        <li className={`${style.NavDropItem}`}>
                                            <a className={`${style.NavDropItemAnchor} whitefill_animate`}>
                                                <span className={`${style.NavDropIcon} icon color222 material-symbols-outlined mr-4`}>restaurant</span>
                                                <span className={`font14 fw400 color222`}>Restaurant Bill</span>
                                            </a>
                                        </li>
                                        <li className={`${style.NavDropItem}`}>
                                            <a className={`${style.NavDropItemAnchor} whitefill_animate`}>
                                                <span className={`${style.NavDropIcon} icon color222 material-symbols-outlined mr-4`}>directions_bus</span>
                                                <span className={`font14 fw400 color222`}>LTA Receipt</span>
                                            </a>
                                        </li>
                                        <li className={`${style.NavDropItem}`}>
                                            <a className={`${style.NavDropItemAnchor} whitefill_animate`}>
                                                <span className={`${style.NavDropIcon} icon color222 material-symbols-outlined mr-4`}>web</span>
                                                <span className={`font14 fw400 color222`}>E-Com Invoice</span>
                                            </a>
                                        </li>
                                        <li className={`${style.NavDropItem}`}>
                                            <a className={`${style.NavDropItemAnchor} whitefill_animate`}>
                                                <span className={`${style.NavDropIcon} icon color222 material-symbols-outlined mr-4`}>order_play</span>
                                                <span className={`font14 fw400 color222`}>General Bill</span>
                                            </a>
                                        </li>
                                        <li className={`${style.NavDropItem}`}>
                                            <a className={`${style.NavDropItemAnchor} whitefill_animate`}>
                                                <span className={`${style.NavDropIcon} icon color222 material-symbols-outlined mr-4`}>mobile_friendly</span>
                                                <span className={`font14 fw400 color222`}>Recharge </span>
                                            </a>
                                        </li>
                                        <li className={`${style.NavDropItem}`}>
                                            <a className={`${style.NavDropItemAnchor} whitefill_animate`}>
                                                <span className={`${style.NavDropIcon} icon color222 material-symbols-outlined mr-4`}>monitor_heart</span>
                                                <span className={`font14 fw400 color222`}>Medical Bill</span>
                                            </a>
                                        </li>
                                        <li className={`${style.NavDropItem}`}>
                                            <a className={`${style.NavDropItemAnchor} whitefill_animate`}>
                                                <span className={`${style.NavDropIcon} icon color222 material-symbols-outlined mr-4`}>contract_edit</span>
                                                <span className={`font14 fw400 color222`}>Stationary Bill</span>
                                            </a>
                                        </li>
                                        <li className={`${style.NavDropItem}`}>
                                            <a className={`${style.NavDropItemAnchor} whitefill_animate`}>
                                                <span className={`${style.NavDropIcon} icon color222 material-symbols-outlined mr-4`}>local_taxi</span>
                                                <span className={`font14 fw400 color222`}>Cab Bill</span>
                                            </a>
                                        </li>
                                        <li className={`${style.NavDropItem}`}>
                                            <a className={`${style.NavDropItemAnchor} whitefill_animate`}>
                                                <span className={`${style.NavDropIcon} icon color222 material-symbols-outlined mr-4`}>receipt_long</span>
                                                <span className={`font14 fw400 color222`}>Mart Bill</span>
                                            </a>
                                        </li>
                                        <li className={`${style.NavDropItem}`}>
                                            <a className={`${style.NavDropItemAnchor} whitefill_animate`}>
                                                <span className={`${style.NavDropIcon} icon color222 material-symbols-outlined mr-4`}>health_metrics</span>
                                                <span className={`font14 fw400 color222`}>Gym Bill</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <li className={`${style.NavItem}`} >
                                <a className={`${style.NavItemAnchor} whitefill_animate`} >
                                    <span className={`${style.NavIcon} icon color222 material-symbols-outlined mr-4`}>contact_page</span>
                                    <span className={`font14 fw400 color222`}>Contact</span>
                                </a>
                            </li> */}
                            <li className={`${style.NavItem}`} >
                                <a className={`${style.NavItemAnchor} whitefill_animate`} >
                                    <span className={`${style.NavIcon} icon color222 material-symbols-outlined mr-4`}>login</span>
                                    <span className={`font14 fw400 color222`}>Login</span>
                                </a>
                            </li>
                        </ul>
                    </nav>



                    <div className={`${style.Userbox} ml-20 `}>
                        <div className={`${style.Userbox__Button}`} onClick={() => setShowLogin(!showLogin)}>
                            <img className={`${style.Userbox__Image}`} src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/cssupport/user_circle.svg" />
                        </div>
                        {showLogin ?
                            <div className={`${style.Userbox_Dropdown}`}>
                                <div className={`${style.Userbox__Details} whitefill_animate`}>
                                    <div className={`${style.Userbox__Text} font16 fw500 color222`}>Suraj Malusare</div>
                                    <div className={`${style.Userbox__Text} mt-2 font13 fw400 color777`}>Manager</div>
                                    <div className={`${style.Userbox__Text} mt-2 font13 fw400 color222`}>anushka.sharma@justdial.com</div>
                                </div>
                                <div className={`${style.Userbox__Actions}`}>
                                    <div className={`${style.Userbox__Row} whitefill_animate pointer pl-10`}>
                                        <span className={`${style.UserBoxIcon} icon color222 material-symbols-outlined mr-4`}>account_box</span>
                                        <span className="font16 fw400 color222">Edit Profile</span>
                                    </div>
                                    <div className={`${style.Userbox__Row} whitefill_animate pointer font16 fw400 color222 pl-10`}>
                                        <span className={`${style.UserBoxIcon} icon color222 material-symbols-outlined mr-4`}>logout</span>
                                        <span className="font16 fw400 color222">Log Out</span>
                                    </div>
                                </div>
                            </div>
                            : null}
                    </div>


                </div>
            </header>

        </>
    );
};

export default Header;
