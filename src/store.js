import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "./slices/photosSlice";

const store = configureStore({
    reducer: {
        photos: photosReducer,
    },
});

export default store;
