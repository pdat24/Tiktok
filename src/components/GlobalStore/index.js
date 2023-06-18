import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootSlide";
import uploadVideoSlice from "./uploadVideoSlice";

export default configureStore({
    reducer: {
        root: rootReducer,
        uploadVideos: uploadVideoSlice
    },
});
