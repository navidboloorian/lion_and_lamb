import video from "../assets/background_video.mov";
import styles from "./BackgroundVideo.module.css";

interface BackgroundVideoProps {
    children: React.ReactNode;
}

const BackgroundVideo = ({children} : BackgroundVideoProps) => {
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