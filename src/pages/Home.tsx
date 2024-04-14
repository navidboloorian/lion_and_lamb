import BackgroundSlideshow from "../background_slideshow/BackgroundSlideshow"
import ImageTileRow from "../image_tile/ImageTileRow";
import styles from "./Home.module.css";
import textLogo from "../assets/text_logo.png";

const Home = () => {
    return (
        <>
            <BackgroundSlideshow />
            <div className={styles.logoHeader}>
                <img src={textLogo} alt="Lion & Lamb Logo" />
                <h1>Art Elevated</h1>
            </div>
            <ImageTileRow />
        </>
    );
}

export default Home;

