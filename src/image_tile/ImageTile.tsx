import styles from "./ImageTile.module.css";

interface ImageTileProps {
    src: string;
    text: string;
}

const ImageTile = ({src, text} : ImageTileProps) => {
    return (
        <div className={styles.imageTile}>
            <div className={styles.image} style={{backgroundImage: `url(${src})`}}></div>
            <div className={styles.imageText}>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default ImageTile;