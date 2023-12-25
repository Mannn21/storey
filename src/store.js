import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/ProductList/productSlice";
import inputSlice from "./components/SearchInput/inputSlice";
import cartSlice from "./features/Cart/cartSlice";
import sidebarSlice from "./features/Sidebar/sidebarSlice";
import buyNowSlice from "./features/BuyNow/buyNowSlice";
import detailSlice from "./features/Details/detailSlice";
import modalSlice from "./components/Modal/modalSlice";

export default configureStore({
	reducer: {
		products: productsSlice.reducer,
		inputUser: inputSlice.reducer,
		carts: cartSlice.reducer,
		sidebarState: sidebarSlice.reducer,
		buyNow: buyNowSlice.reducer,
		detail: detailSlice.reducer,
		modals: modalSlice.reducer,
	},
});
