import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
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

export const editProduct = createAsyncThunk('product/editProduct', async (data) => {

    // console.log(data);
    const docRef = doc(db, "Product", data.id);
    await updateDoc(docRef, data.data)

})

export const deleteProduct = createAsyncThunk('product/deleteProduct', async (id) => {
    await deleteDoc(doc(db, "Product", id))
    console.log(id);
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

        builder.addCase(editProduct.fulfilled, (state, action) => {
            state.product = action.payload
        })

        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.product = action.payload
        })
    }
})


export default allproduct.reducer