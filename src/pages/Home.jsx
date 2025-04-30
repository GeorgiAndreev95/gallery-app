import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getListPhotos, getSearchPhotos } from "../services/galleryService";
import { setListPhotos, setResultPhotos } from "../slices/photosSlice";
import Photo from "../components/PhotoComponent/Photo";

function Home() {
    const dispatch = useDispatch();

    const photos = useSelector((state) => state.photos.listPhotos);
    const resultPhotos = useSelector((state) => state.photos.resultPhotos);
    const searchValue = useSelector((state) => state.photos.searchValue);

    useEffect(() => {
        if (searchValue.length === 0) {
            const getListPhoto = async () => {
                const listPhotos = await getListPhotos();
                dispatch(setListPhotos(listPhotos));
            };

            getListPhoto();
        } else {
            const getSearchPhoto = async () => {
                const searchPhotos = await getSearchPhotos(searchValue);
                dispatch(setResultPhotos(searchPhotos.results));
            };

            getSearchPhoto();
        }
    }, [dispatch, searchValue]);

    // console.log(photos);
    console.log(resultPhotos);

    return (
        <>
            <Photo photos={searchValue ? resultPhotos : photos} />
        </>
    );
}

export default Home;
