import { useEffect } from "react";
import video from "../assets/background_video.mov";
import styles from "./BackgroundVideo.module.css";

interface BackgroundVideoProps {
    children: React.ReactNode;
}

const BackgroundVideo = ({children} : BackgroundVideoProps) => {
    useEffect(() => {
        (document.querySelector("#myVideo") as HTMLVideoElement).playbackRate = 0.5;    

        window.addEventListener("resize", () => {
            if(window.innerWidth <= 600) {
                (document.querySelector("#myVideo") as HTMLVideoElement).src = "";    
            }
            else {
                (document.querySelector("#myVideo") as HTMLVideoElement).src = video;    
            }
        });
        
        

    }, []);

    return (
        <div className={styles.videoWrapper}>
            <video className={styles.backgroundVideo} autoPlay muted loop id="myVideo">
                <source src={video} type="video/mp4" />
            </video>
            {children}
        </div>
    );
}

export default BackgroundVideo;