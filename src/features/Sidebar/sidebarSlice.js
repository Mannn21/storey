import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isOpen: false,
};

export const sidebarSlice = createSlice({
	name: "sidebarState",
	initialState,
	reducers: {
		setOpenSidebar: (state, action) => {
			const data = action.payload;
			state.isOpen = data
		},
	},
});

export const { setOpenSidebar } = sidebarSlice.actions;

export default sidebarSlice;

export const selectSidebarState = state => state.sidebarState.isOpen;
