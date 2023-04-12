import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slices/todoSlice";

export const Store = configureStore({
    reducer: {
        todo: todoSlice,
    },
});