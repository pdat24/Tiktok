import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    video: null,
    channel: {
        avatar: null,
        userName: null,
        nickName: null,
        desc: null,
    },
    time: null,
    tags: null,
    footerNote: null,
    like: 0,
    comment: 0,
    bookmark: 0,
};

const activeVideoSlice = createSlice({
    name: "activeVideo",
    initialState,
    reducers: {
        setActiveVideo(state, action) {
            state.video = action.payload.video;
            state.channel = action.payload.channel;
            state.time = action.payload.time;
            state.tags = action.payload.tags;
            state.footerNote = action.payload.footerNote;
            state.like = action.payload.like;
            state.bookmark = action.payload.bookmark;
            state.comment = action.payload.comment;
        },
    },
});

export const { setActiveVideo } = activeVideoSlice.actions;
export default activeVideoSlice.reducer;
