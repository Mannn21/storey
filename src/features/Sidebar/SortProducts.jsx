import { useDispatch } from "react-redux";
import { sortedDatas } from "../../utils/sortedDatas";
import { getSortProducts } from "../../components/SearchInput/inputSlice";

const SortProducts = () => {
	const dispatch = useDispatch();
	const handleInput = e => {
		dispatch(getSortProducts(e.target.value))
	};
	return (
		<div className="flex flex-col gap-2 justify-start items-start">
			<h3 className="text-md font-bold">Urutkan Product</h3>
			<div className="flex flex-col gap-1">
				{sortedDatas.map(data => {
					return (
						<div key={data.id} className="flex flex-row gap-1 items-center">
							<input
								type="radio"
								id={data.id}
								name="sort"
								value={data.id}
								onChange={handleInput}
								className="cursor-pointer"
							/>
							<label htmlFor={data.id} className="text-sm cursor-pointer">
								{data.title}
							</label>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SortProducts;
