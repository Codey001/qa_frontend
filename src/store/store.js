import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import { loadState, saveState } from "../utils/localStorage";

// Load initial state from localStorage
const preloadedState = loadState();

const store = configureStore({
  reducer: {
    data: dataSlice,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState({
    data: store.getState().data,
  });
});

export default store;
