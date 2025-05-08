import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import classes from "./Header.module.css";
import logoImg from "../../assets/camera-logo.svg";
import {
    setSearchValue,
    setResultPhotos,
    setCurrentPage,
} from "../../slices/photosSlice";

function Header({ isVisible }) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const inputRef = useRef();
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        const searchValue = inputRef.current.value;

        if (searchValue.length === 0) {
            return;
        }

        navigate("/");
        dispatch(setSearchValue(searchValue));
        dispatch(setCurrentPage(1));
    };

    const clickHandler = () => {
        navigate("/");
        dispatch(setResultPhotos([]));
        dispatch(setSearchValue(""));
        inputRef.current.value = "";
    };

    return (
        <header
            className={`${classes.header} ${!isVisible ? classes.hidden : ""}`}
        >
            <div className={classes.title} onClick={clickHandler}>
                <img src={logoImg} />
                <h1>Gallery</h1>
            </div>
            <form className={classes.searchForm} onSubmit={submitHandler}>
                <div className={classes.icon} onClick={submitHandler}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                        />
                    </svg>
                </div>

                <input
                    type="text"
                    name="search"
                    placeholder={t("inputPlaceholder")}
                    className={classes.searchBox}
                    autoComplete="off"
                    required
                    ref={inputRef}
                />
            </form>

            <button className={classes.optionsButton}>
                <svg
                    className="btAs3"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    version="1.1"
                    aria-hidden="false"
                >
                    <desc lang="en-US">navigation menu</desc>
                    <path d="M3 16h18v2H3v-2ZM3 6v2h18V6H3Zm0 7h18v-2H3v2Z"></path>
                </svg>
            </button>
        </header>
    );
}

export default Header;
