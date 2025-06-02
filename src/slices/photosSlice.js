import { createSlice } from "@reduxjs/toolkit";

const navigationEntries = performance.getEntriesByType("navigation");
const isRestored =
    navigationEntries.length > 0 &&
    (navigationEntries[0].type === "reload" ||
        navigationEntries[0].type === "back_forward");

const page = isRestored ? parseInt(localStorage.getItem("page") || "1", 10) : 1;

const initialState = {
    listPhotos: [],
    resultPhotos: [],
    resultPhoto: {},
    currentPage: page,
    totalPages: 500,
    selected: "User Photos",
};

export const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
        setListPhotos: (state, action) => {
            state.listPhotos = action.payload;
        },
        setResultPhotos: (state, action) => {
            state.resultPhotos = action.payload;
        },
        setResultPhoto: (state, action) => {
            state.resultPhoto = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        },
        setSelected: (state, action) => {
            state.selected = action.payload;
        },
    },
});

export const {
    setListPhotos,
    setResultPhotos,
    setResultPhoto,
    setCurrentPage,
    setTotalPages,
    setSelected,
} = photosSlice.actions;

export default photosSlice.reducer;
