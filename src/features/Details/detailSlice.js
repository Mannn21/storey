import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	product: null,
};

export const detailSlice = createSlice({
	name: "detail",
	initialState,
	reducers: {
		getProduct: (state, action) => {
			const item = action.payload;
			state.product = item;
		},
		removeProduct: (state, action) => {
			state.product = null;
		},
	},
});

export const { getProduct, removeProduct } = detailSlice.actions;

export default detailSlice;

export const selectProduct = state => state.detail.product;
