import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  fileStatus: false,
  fileName: null, //server
  fileNameUser: null, //user
  messages: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fileStatusUpdate: (state, action) => {
      console.log("STORE PAYLOAD : ",action.payload);
      state.fileStatus = true;
      state.fileName = action.payload.fileName;
      state.fileNameUser = action.payload.fileNameUser;
      state.messages = [];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    addQuestion: (state, action) => {
      state.messages.push(action.payload.question);
    },
    addAnswer: (state, action) => {
      state.messages.push(action.payload.answer);
    },
    removeQuestion: (state, action) => {
      state.messages.pop();
    }
  },
});


export const {
  fileStatusUpdate,
  setLoading,
  addQuestion,
  addAnswer,
  removeQuestion,
  clearConverstion
} = dataSlice.actions;

export default dataSlice.reducer;
