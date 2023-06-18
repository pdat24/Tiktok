import { createSlice } from "@reduxjs/toolkit"

const uploadVideoSlice = createSlice({
    name: "uploadVideos",
    initialState: [],
    reducers: {
        setUploadVideo(state, action) {
            state.unshift(action.payload)
        }
    }
})

export const { setUploadVideo } = uploadVideoSlice.actions
export default uploadVideoSlice.reducer
