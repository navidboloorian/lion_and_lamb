import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={`${styles.navbarContent} content`}>
                <Link to={"/"}><img src={logo} /></Link>
                <ul>
                    <li><Link to={"/work"}>Work</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;