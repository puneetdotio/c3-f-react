import { createSlice } from "@reduxjs/toolkit";
import { CounterState } from "./../types";

const initialState: CounterState = {
	count: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state) => {
            console.log("increment")
            state.count++;
         },
        decrement: (state) => {
            console.log("decrement")
            state.count--;
        }
    }
})

export const {increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;