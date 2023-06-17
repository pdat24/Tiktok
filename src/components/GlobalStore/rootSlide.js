import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: false,
    language: "Tiếng Việt",
    title: "TikTok | Make Your Day",
    accountName: {name: "@user_tiktok", default: true},
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
        setAccountName(state, action) {
            state.accountName.name = action.payload.name;
            state.accountName.default = action.payload.default;
        },
    },
});

export const { setLanguage, setTheme, setTitle, setAccountName } = rootSlide.actions;
export default rootSlide.reducer;
