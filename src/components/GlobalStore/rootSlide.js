import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: false,
    language: "Tiếng Việt",
    title: "TikTok | Make Your Day",
};

const rootSlide = createSlice({
    name: "root",
    initialState,
    reducers: {
        setTheme(state) {
            const prevTheme = state.theme;
            state.theme = !prevTheme;
        },
        setLanguage(state, action) {
            state.language = action.payload;
        },
        setTitle(state, action) {
            state.title = action.payload;
        },
    },
});

export const { setLanguage, setTheme, setTitle } = rootSlide.actions;
export default rootSlide.reducer;
