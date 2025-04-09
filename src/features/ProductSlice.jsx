import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./FirebaseConfig";

export const getProduct = createAsyncThunk('product/getProduct', async () => {
    const result = await getDocs(collection(db, "Product"))
    return result.docs.map((val) => {
        return ({ ...val.data(), id: val.id })
    })
})

export const addProduct = createAsyncThunk('product/addProduct', async (data) => {
    const result = await addDoc(collection(db, "Product"), data)
    return { ...data, id: result.id }
})

const initialState = {
    product: []
}

const allproduct = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {

        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.product = action.payload
        })

        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.product = action.payload
        })
    }
})


export default allproduct.reducer