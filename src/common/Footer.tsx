import styles from "./Footer.module.css";
import socialMediaIcons from "../assets/social_media_icons.png";

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={`content ${styles.footerContent}`}>
                <p>
                    59 N 3rd St<br />   
                    Philadelphia, PA 19106<br />
                    (442)245-4945<br />
                    info@lambandlion.art
                </p>
                <img src={socialMediaIcons} />
            </div>
        </footer>
    );
}

export default Footer;