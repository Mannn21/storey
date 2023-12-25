import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	search: "",
	sort: null,
	filter: [],
};

export const inputSlice = createSlice({
	name: "inputUser",
	initialState,
	reducers: {
		getInputSearchProducts: (state, action) => {
			const inputData = action.payload;
			state.search = inputData;
		},
		getFilterProducts: (state, action) => {
			const filterDatas = action.payload;
			state.filter = filterDatas;
		},
		getSortProducts: (state, action) => {
			const sortData = action.payload;
			state.sort = sortData;
		},
	},
});

export const { getInputSearchProducts, getFilterProducts, getSortProducts } = inputSlice.actions;

export default inputSlice;

export const userInputData = state => state.inputUser.search;
export const userFilterData = state => state.inputUser.filter;
export const userSortData = state => state.inputUser.sort;
