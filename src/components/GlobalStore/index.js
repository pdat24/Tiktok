import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootSlide";

export default configureStore({
    reducer: {
        root: rootReducer,
    },
});
