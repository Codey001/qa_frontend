import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading : false,
    fileStatus: false,
    fileName : null,
    messages : []
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        fileStatusUpdate: (state, action) => {
            state.fileStatus = true;
            state.fileName = action.payload.fileName;
        },
        updateChat: (state, action) => {
            state.messages.push(action.payload)
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const {fileStatusUpdate, updateChat, setLoading} = dataSlice.actions;
export default dataSlice.reducer

