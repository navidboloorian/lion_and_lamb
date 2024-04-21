import { useState, useEffect } from "react"
import styles from "./BackgroundSlideshow.module.css"
import image5 from "../assets/background_5.jpg"
import image6 from "../assets/background_6.jpg"
import image7 from "../assets/background_7.jpg"
import image8 from "../assets/background_8.jpg"
const BackgroundSlideshow = () => {
    const imageArray : string[] = [image5, image6, image7, image8];
    const [currIndex, setCurrIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(currIndex);
            setCurrIndex(currIndex => (currIndex + 1) % imageArray.length);    
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.backgroundSlideshow} style={{backgroundImage: `url(${imageArray[currIndex]})`}}></div>
    );
}

export default BackgroundSlideshow;