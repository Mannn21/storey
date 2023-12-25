import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	product: null,
};

export const buyNowSlice = createSlice({
	name: "buyNow",
	initialState,
	reducers: {
		buyProduct: (state, action) => {
			const product = action.payload;
            if(state.product === null) {
                state.product = {
                    ...product,
                    quantity: 1,
                    totalPrice: product.price
                }
            } else {
                state.product.quantity += 1
                state.product.totalPrice = state.product.quantity * product.price
            }
		},
		removeProduct: (state, action) => {
            const product = action.payload
            if(state.product.quantity >= 1) {
                state.product.quantity -= 1
                state.product.totalPrice = state.product.quantity * product.price 
            }
            if(state.product.quantity < 1) {
                state.product = null
            }
        },
		deleteProduct: (state, action) => {
            state.product = null
        },
	},
});

export const { buyProduct, removeProduct, deleteProduct } = buyNowSlice.actions;

export default buyNowSlice;

export const selectProduct = state => state.buyNow.product;
