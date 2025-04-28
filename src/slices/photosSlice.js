import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listPhotos: [],
};

export const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
        setListPhotos: (state, action) => {
            state.listPhotos = action.payload;
        },
    },
});

export const { setListPhotos } = photosSlice.actions;

export default photosSlice.reducer;
