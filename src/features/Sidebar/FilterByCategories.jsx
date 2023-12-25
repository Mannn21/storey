import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getFilterProducts } from "../../components/SearchInput/inputSlice";
import { selectAllCategories } from "../ProductList/productSlice";

const FilterByCategories = () => {
	const [inputDatas, setInputDatas] = useState([]);
	const dispatch = useDispatch();

	const handleInput = e => {
		if (e.target.checked) {
			setInputDatas(state => [...state, e.target.value]);
		}
		if (!e.target.checked) {
			const newInputDatas = inputDatas.filter(data => data !== e.target.value);
			setInputDatas(newInputDatas);
		}
	};

	useEffect(() => {
		dispatch(getFilterProducts(inputDatas));
	}, [dispatch, inputDatas]);

	const allCategories = useSelector(selectAllCategories);
	return (
		<div className="flex flex-col gap-2 justify-start items-start">
			<h3 className="text-md font-bold">Filter Product</h3>
			<div className="flex flex-col gap-1">
				{allCategories?.map((category, index) => {
					return (
						<div key={index} className="flex flex-row gap-1 items-center">
							<input
								type="checkbox"
								name={category}
								id={category}
								value={category}
								onChange={e => handleInput(e)}
								className="cursor-pointer"
							/>
							<label htmlFor={category} className="text-sm cursor-pointer">
								{category}
							</label>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FilterByCategories;
