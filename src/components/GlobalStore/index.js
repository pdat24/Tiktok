import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootSlide";
import uploadVideoSlice from "./uploadVideoSlice";
import activeVideo from "./activeVideoSlice";

export default configureStore({
    reducer: {
        root: rootReducer,
        uploadVideos: uploadVideoSlice,
        activeVideo
    },
});
