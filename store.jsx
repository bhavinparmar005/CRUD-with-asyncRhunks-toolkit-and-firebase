import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./src/features/ProductSlice"


export const store = configureStore({
    reducer: {
        all: productReducer
    }
})