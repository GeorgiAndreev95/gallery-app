import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { setCurrentPage } from "../../slices/photosSlice";
import classes from "./PageSelect.module.css";

function PageSelect() {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.photos.currentPage);
    const totalPages = useSelector((state) => state.photos.totalPages);
    const location = useLocation();

    const isSearchRoute = location.pathname.startsWith("/photos/");
    const showPagination =
        (!isSearchRoute || totalPages > 1) && currentPage > 0;

    const clickNextHandler = () => {
        dispatch(setCurrentPage(currentPage + 1));
        window.scrollTo({
            top: 0,
        });
    };

    const clickPreviousHandler = () => {
        dispatch(setCurrentPage(currentPage - 1));
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <>
            {showPagination && (
                <div className={classes.pageSelect}>
                    <button
                        className={classes.prev}
                        disabled={currentPage <= 1}
                    >
                        <svg
                            onClick={clickPreviousHandler}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <polyline
                                    fill="none"
                                    strokeWidth="2"
                                    points="9 6 15 12 9 18"
                                    transform="matrix(-1 0 0 1 24 0)"
                                ></polyline>{" "}
                            </g>
                        </svg>
                    </button>
                    <p>{currentPage}</p>
                    <button
                        className={classes.next}
                        disabled={currentPage >= totalPages}
                    >
                        <svg
                            onClick={clickNextHandler}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <polyline
                                    fill="none"
                                    strokeWidth="2"
                                    points="9 6 15 12 9 18"
                                ></polyline>{" "}
                            </g>
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
}

export default PageSelect;
