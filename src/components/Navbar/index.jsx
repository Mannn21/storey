import { useState, useEffect } from "react";
import CartIcon from "./CartIcon";

const Navbar = ({ handleOpenModal }) => {
	const [isShrinkHeader, setIsShrinkHeader] = useState(true);

	useEffect(() => {
		let prevScrollPos = window.scrollY;

		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			const isScrollingUp = currentScrollPos < prevScrollPos;

			setIsShrinkHeader(
				(isScrollingUp && currentScrollPos > 0) || currentScrollPos === 0
			);

			prevScrollPos = currentScrollPos;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`bg-indigo-600 fixed left-0 right-0 z-10 ease-in-out duration-700 transition-all ${
				isShrinkHeader ? "top-0" : "-top-24"
			}`}>
			<div className="px-10 py-4 max-h-28 w-screen">
				<div className="flex flex-row justify-between items-center">
					<h1 className="text-white text-3xl font-bold">Storey</h1>
					<CartIcon handleOpenModal={handleOpenModal} />
				</div>
			</div>
		</header>
	);
};

export default Navbar;
