import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { getSinglePhoto } from "../services/galleryService";
import { setResultPhoto } from "../slices/photosSlice";
import SkeletonLoading from "../components/SkeletonLoading/SkeletonLoading";
import DetailedPhoto from "../components/PhotoDetails/DetailedPhoto";
import DetailedSkeleton from "../components/SkeletonLoading/DetailedSkeleton";

function PhotoDetails() {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const { id } = useParams();
    const photo = useSelector((state) => state.photos.resultPhoto);
    console.log(photo);

    useEffect(() => {
        const fetchPhoto = async () => {
            setIsLoading(true);
            try {
                const photo = await getSinglePhoto(id);
                dispatch(setResultPhoto(photo));
            } catch (error) {
                console.error("Error fetching photos:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPhoto();
    }, [id, dispatch]);

    return (
        <>
            {isLoading ? <DetailedSkeleton /> : <DetailedPhoto photo={photo} />}
        </>
    );
}

export default PhotoDetails;
