import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Sidebar from "./features/Sidebar";
import ProductList from "./features/ProductList";
import SearchInput from "./components/SearchInput";
import Burger from "./features/Sidebar/Burger";
import BackToTop from "./components/BackToTop";
import CartModal from "./features/Cart/CartModal";
import BuyNowModal from "./features/BuyNow/BuyNowModal";
import DetailModal from "./features/Details/DetailModal";
import { selectModal } from "./components/Modal/modalSlice";

function App() {
	const modal = useSelector(selectModal);
	return (
		<div className="relative">
			{modal.feature === "cart" && modal.isOpen === true ? <CartModal /> : null}
			{modal.feature === "buy" && modal.isOpen === true ? (
				<BuyNowModal />
			) : null}
			{modal.feature === "detail" && modal.isOpen === true ? (
				<DetailModal />
			) : null}
			<Navbar />
			<Burger />
			<main className="px-10 pt-24 py-12 flex flex-col gap-4">
				<SearchInput />
				<div className="flex flex-row gap-10 py-2">
					<Sidebar />
					<ProductList />
				</div>
			</main>
			<BackToTop />
			<Footer />
		</div>
	);
}

export default App;
