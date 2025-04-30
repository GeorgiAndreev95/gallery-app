import axiosInstance from "../axiosInstance";

export const getListPhotos = async () => {
    try {
        const { data } = await axiosInstance.get("/photos");

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getSearchPhotos = async (query) => {
    try {
        const { data } = await axiosInstance.get(
            `/search/photos?page=1&per_page=21&query=${query}`
        );

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
