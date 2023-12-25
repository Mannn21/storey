import {useSelector} from "react-redux"
import FilterByCategories from "./FilterByCategories";
import SortProducts from "./SortProducts";
import { selectSidebarState } from "./sidebarSlice";


const Sidebar = () => {
	const isOpen = useSelector(selectSidebarState)
	
	return (
		<div className={`md:flex flex-col gap-2 w-[280px] h-[350px] p-3 rounded-md border shadow-md ${isOpen ? "fixed z-20 flex bg-white" : "hidden"}`}>
			<FilterByCategories />
			<SortProducts />
		</div>
	);
};

export default Sidebar;
