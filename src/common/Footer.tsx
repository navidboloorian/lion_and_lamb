import styles from "./Footer.module.css";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={`content ${styles.footerContent}`}>
                <p>
                    (442)245-4945<br />
                    info@lambandlion.art
                </p>
                <div className={styles.socialMediaIcons}>
                    <img src={linkedin} />
                    <img src={instagram} />
                </div>
            </div>
        </footer>
    );
}

export default Footer;