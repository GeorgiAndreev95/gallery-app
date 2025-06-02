import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router";

import classes from "./Header.module.css";
import logoImg from "../../assets/camera-logo.svg";
import {
    setResultPhotos,
    setCurrentPage,
    setTotalPages,
} from "../../slices/photosSlice";

function Header({ isVisible }) {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    const submitHandler = (event) => {
        event.preventDefault();
        const searchValue = inputRef.current.value;

        if (searchValue.length === 0) {
            return;
        }

        navigate(`/photos/${searchValue}`);
        dispatch(setCurrentPage(1));
        localStorage.setItem("page", 1);
    };

    const clickHandler = () => {
        navigate("/");
        dispatch(setResultPhotos([]));
        dispatch(setCurrentPage(1));
        localStorage.setItem("page", 1);
        dispatch(setTotalPages(500));
        inputRef.current.value = "";
    };

    useEffect(() => {
        const isPhotosRoute = location.pathname.startsWith("/photos");

        if (!isPhotosRoute && inputRef.current) {
            inputRef.current.value = "";
        }
    }, [location]);

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
                    placeholder="Search images"
                    className={classes.searchBox}
                    autoComplete="off"
                    required
                    ref={inputRef}
                />
            </form>
        </header>
    );
}

export default Header;
