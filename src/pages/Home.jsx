import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getListPhotos } from "../services/galleryService";
import { setListPhotos } from "../slices/photosSlice";
import Photo from "../components/Photo";

function Home() {
    const dispatch = useDispatch();
    const photos = useSelector((state) => state.photos.listPhotos);

    useEffect(() => {
        const getListPhoto = async () => {
            const listPhotos = await getListPhotos();
            dispatch(setListPhotos(listPhotos));
        };

        getListPhoto();
    }, [dispatch]);

    console.log(photos);

    return (
        <>
            <Photo photos={photos} />
        </>
    );
}

export default Home;
