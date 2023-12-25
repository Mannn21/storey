import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    properties: {
        isOpen: false,
        feature: "",
    }
};

export const modalSlice = createSlice({
	name: "modals",
	initialState,
	reducers: {
		setModal: (state, action) => {
			const modal = action.payload
			console.log(modal)
			state.properties.isOpen = true
			state.properties.feature = modal
		},
		removeModal: (state, action) => {
			state.properties.feature = ""
			state.properties.isOpen = false
		},
	},
});

export const { setModal, removeModal } = modalSlice.actions;

export default modalSlice;

export const selectModal = state => state.modals.properties