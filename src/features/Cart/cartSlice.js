import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
};

export const cartSlice = createSlice({
	name: "carts",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			const product = action.payload;
			const findIndexProduct = state.items.findIndex(
				data => data.id === product.id
			);
			if (findIndexProduct !== -1) {
				state.items[findIndexProduct].quantity += 1;
				state.items[findIndexProduct].totalPrice =
					state.items[findIndexProduct].quantity * product.price;
			} else {
				state.items.push({
					...product,
					quantity: 1,
					totalPrice: product.price,
				});
			}
		},
		removeProduct: (state, action) => {
			const product = action.payload;
			const findIndexProduct = state.items.findIndex(
				data => data.id === product.id
			);
			if (state.items[findIndexProduct].quantity >= 1) {
				state.items[findIndexProduct].quantity -= 1;
				state.items[findIndexProduct].totalPrice =
					state.items[findIndexProduct].quantity * product.price;
			}
			if (state.items[findIndexProduct].quantity < 1) {
				state.items.splice(findIndexProduct, 1);
			}
		},
		deleteProduct: (state, action) => {
			const product = action.payload;
			const findIndexProduct = state.items.findIndex(
				data => data.id === product.id
			);
			state.items.splice(findIndexProduct, 1);
		},
	},
});

export const { addProduct, removeProduct, deleteProduct } = cartSlice.actions;

export default cartSlice;

export const selectAllCartDatas = state => state.carts.items;
export const selectTotalPrice = state =>
	state.carts.items
		.map(data => data.totalPrice)
		.reduce((acc, currentValue) => acc + currentValue, 0);
export const selectTotalQuantity = state =>
	state.carts.items
		.map(data => data.quantity)
		.reduce((acc, currentValue) => acc + currentValue, 0);
