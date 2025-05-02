import axiosInstance from "../axiosInstance";

export const getListPhotos = async (page) => {
    try {
        const { data } = await axiosInstance.get(`/photos?page=${page}`);

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getSearchPhotos = async (query, page) => {
    try {
        const { data } = await axiosInstance.get(
            `/search/photos?page=${page}&per_page=20&query=${query}`
        );

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
