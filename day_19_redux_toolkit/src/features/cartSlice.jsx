import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartItems: 20,
	},
	reducers: {
		addToCart: (state, action) => {
			state.cartItems = action.payload;
		},
	},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
