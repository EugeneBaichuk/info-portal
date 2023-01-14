import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "./getDataSlice";


export const store = configureStore({
    reducer: {
        getData: getDataReducer,
    }
});