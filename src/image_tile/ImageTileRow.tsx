import ImageTile from "./ImageTile";
import image1 from "../assets/background_1.jpg";
import image2 from "../assets/background_2.jpg";
import image3 from "../assets/background_3.jpg";
import image4 from "../assets/background_4.jpg";
import styles from "./ImageTileRow.module.css";

const ImageTileRow = () => {
    return(
        <div className={styles.imageTileRow}>
            <ImageTile src={image1} text="testing" />
            <ImageTile src={image2} text="longer testing" />
            <ImageTile src={image3} text="longer than longer testing" />
            <ImageTile src={image4} text="longest testing longest testing longest testing longest testing longest testing longest testing" />
        </div>
    );
}

export default ImageTileRow;