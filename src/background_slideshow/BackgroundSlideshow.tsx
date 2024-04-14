import { useState, useEffect } from "react"
import styles from "./BackgroundSlideshow.module.css"
import image1 from "../assets/background_1.jpg"
import image2 from "../assets/background_2.jpg"
import image3 from "../assets/background_3.jpg"
import image4 from "../assets/background_4.jpg"
import image5 from "../assets/background_5.jpg"
import image6 from "../assets/background_6.jpg"
import image7 from "../assets/background_7.jpg"
import image8 from "../assets/background_8.jpg"
const BackgroundSlideshow = () => {
    const imageArray : string[] = [image1, image2, image3, image4, image5, image6, image7, image8];
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