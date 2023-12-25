import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSidebar, selectSidebarState } from "./sidebarSlice";
import BurgerIcon from "../../assets/burger.svg";
import Close from "../../assets/close.svg";

const Burger = () => {
	const dispatch = useDispatch();
	const isOpen = useSelector(selectSidebarState);

	useEffect(() => {
		const setWidth = () => {
			if (window.innerWidth >= 768) {
				dispatch(setOpenSidebar(false));
			}
		};
		setWidth();
		window.addEventListener("resize", setWidth);
		return () => {
			window.removeEventListener("resize", setWidth);
		};
	}, [dispatch]);

	const handleOpen = () => {
		if (window.innerWidth < 768) {
			dispatch(setOpenSidebar(!isOpen));
		}
	};

	return (
		<div
			className="md:hidden w-9 h-9 rounded-full bg-black fixed top-32 left-2 cursor-pointer hover:scale-110 ease-in-out duration-300 transition-all"
			onClick={() => handleOpen()}>
			<div className="w-full h-full p-1 flex justify-center items-center">
				<img src={isOpen ? Close : BurgerIcon} className="w-full" alt="burger"/>
			</div>
		</div>
	);
};

export default Burger;
