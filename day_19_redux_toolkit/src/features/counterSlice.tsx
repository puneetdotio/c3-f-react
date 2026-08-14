import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter",
	initialState: {
		count: 0,
	},
	reducers: {
		increment: (state) => {
			state.count++;
		},

		decrement: (state) => {
			state.count--;
		},
	},
});

console.log("counter slice ", counterSlice)

export const { increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;