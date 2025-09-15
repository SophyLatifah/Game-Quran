import { configureStore } from "@reduxjs/toolkit";
import soalReducer from "./soalSlice";
import userReducer from "./userSlice";


// Store = otak pusat redux
export const store = configureStore({
  reducer: {
    soal: soalReducer,
    user: userReducer,
  },
});
