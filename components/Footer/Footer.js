
import style from "./Footer.module.scss";

const Footer = (props) => {
    return (
        <footer className={`${style.Footer}`}>
            <div className={`font14 fw400 color777`}>Copyrights 2024.All Rights Reserved.</div>
        </footer>
    );
};

export default Footer;
