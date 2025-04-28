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
