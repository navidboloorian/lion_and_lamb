import BackgroundSlideshow from "../background_slideshow/BackgroundSlideshow"
import ImageTileRow from "../image_tile/ImageTileRow";
import styles from "./Home.module.css";
import textLogo from "../assets/text_logo.png";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        const contents : NodeListOf<HTMLDivElement> = document.querySelectorAll(`.content`);

        for(const content of contents) {
            content.style.maxWidth = "100vw";
        }

    }, []);

    return (
        <>
            <BackgroundSlideshow />
            <div className={styles.logoHeader}>
                <img src={textLogo} alt="Lion & Lamb Logo" />
                <div className={styles.logoText}>
                    <h1>Art Elevated</h1>
                    <h2>art and business</h2>
                </div>
            </div>
            <ImageTileRow />
        </>
    );
}

export default Home;

