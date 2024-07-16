import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../actions/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
