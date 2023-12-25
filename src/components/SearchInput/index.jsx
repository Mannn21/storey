import { useRef } from "react";
import { useDispatch } from "react-redux";
import Search from "../../assets/search.svg";
import { getInputSearchProducts } from "./inputSlice";

const SearchInput = () => {
	const userInput = useRef();
	const dispatch = useDispatch();

	const handleInput = () => {
		const inputData = userInput.current.value;
		if(!inputData ||  inputData.trim() == "") return;
		dispatch(getInputSearchProducts(inputData));
	};

	return (
		<div className="flex flex-row justify-end items-center">
			<div className="flex flex-row gap-2 border rounded-md items-center w-[280px] h-10 px-3 py-2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:border-indigo-400 transition-all duration-200 ease-in-out">
				<input
					type="text"
					placeholder="search..."
					className="group text-gray-800 tracking-wider w-full h-full focus:outline-none focus:border-none"
					ref={userInput}
					onChange={handleInput}
				/>
				<div className="w-5 h-full flex items-center">
					<img src={Search} alt="search" className="h-full" />
				</div>
			</div>
		</div>
	);
};

export default SearchInput;
