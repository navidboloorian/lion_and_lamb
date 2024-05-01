import styles from "./Footer.module.css";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={`content ${styles.footerContent}`}>
                <p>
                    (442)245-4945<br />
                    info@lionandlamb.art
                </p>
                <div className={styles.socialMediaIcons}>
                    <a href="https://www.instagram.com/rachaelleesays/" target="_blank"><img src={instagram} /></a>
                    <a href="https://www.linkedin.com/in/rachaellambert" target="_blank"><img src={linkedin} /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;