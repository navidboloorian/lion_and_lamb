import ImageTile from "./ImageTile";
import image1 from "../assets/background_1.jpg";
import image2 from "../assets/background_2.jpg";
import image3 from "../assets/background_3.jpg";
import image4 from "../assets/background_4.jpg";
import styles from "./ImageTileRow.module.css";

const ImageTileRow = () => {
    return(
        <div className={styles.imageTileRow}>
            <ImageTile src={image1} text="Project Management" />
            <ImageTile src={image2} text="Art Fairs & Exhibitions" />
            <ImageTile src={image3} text="Acquisition" />
            <ImageTile src={image4} text="Studio Assistance" />
        </div>
    );
}

export default ImageTileRow;