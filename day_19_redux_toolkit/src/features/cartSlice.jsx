import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: null
    },

    reducers: {
        addToCart: (state, action) => {
            state.cartItems = action.payload;
        } 
    }
})

console.log("cart slice -> ", cartSlice)

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;