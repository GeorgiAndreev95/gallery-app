import classes from "./Header.module.css";
import logoImg from "../assets/camera-logo.svg";

function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.title}>
                <img src={logoImg} />
                <h1>Gallery</h1>
            </div>
        </header>
    );
}

export default Header;
