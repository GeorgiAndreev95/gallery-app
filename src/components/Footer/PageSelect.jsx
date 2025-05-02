import { useDispatch, useSelector } from "react-redux";

import classes from "./PageSelect.module.css";
import { setCurrentPage } from "../../slices/photosSlice";
import prevBtn from "../../assets/previous.svg";
import nextBtn from "../../assets/next.svg";

function PageSelect() {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.photos.currentPage);

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
        <div className={classes.pageSelect}>
            <button className={classes.prev}>
                <img
                    src={prevBtn}
                    alt="Previous"
                    onClick={clickPreviousHandler}
                />
            </button>
            <p>{currentPage}</p>
            <button className={classes.next}>
                <img src={nextBtn} alt="Next" onClick={clickNextHandler} />
            </button>
        </div>
    );
}

export default PageSelect;
