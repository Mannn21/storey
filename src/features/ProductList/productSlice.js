import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	categories: [],
};

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addAllProducts: (state, action) => {
			const allProducts = action.payload;
			state.items = allProducts;
		},
		addAllCategories: (state, action) => {
			const allCategories = action.payload;
			state.categories = allCategories;
		},
	},
});

export const { addAllProducts, addAllCategories } = productsSlice.actions;

export default productsSlice;

export const selectAllProducts = state => state.products.items;
export const selectAllCategories = state => state.products.categories;
