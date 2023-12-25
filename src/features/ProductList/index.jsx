import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addAllProducts,
	addAllCategories,
	selectAllProducts,
} from "./productSlice";
import {
	userInputData,
	userFilterData,
	userSortData,
} from "../../components/SearchInput/inputSlice";
import { getAllCategories } from "../../utils/getAllCategories";
import CardProduct from "../../components/CardProduct";
import EmptyProduct from "../../components/EmptyProduct";
import { processProducts } from "../../utils/processProducts";
import { addProduct } from "../Cart/cartSlice";
import { buyProduct } from "../BuyNow/buyNowSlice";

const ProductList = () => {
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	const products = useSelector(selectAllProducts);
	const searchDataRaw = useSelector(userInputData);
	const filterData = useSelector(userFilterData);
	const sortData = useSelector(userSortData);
	const searchData = searchDataRaw.toLowerCase();

	useEffect(() => {
		const getproducts = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(
					`${import.meta.env.VITE_APP_BASE_URL}/products`
				);
				const datas = await response.json();
				const processedDatas = processProducts(
					datas,
					filterData,
					searchData,
					sortData
				);
				dispatch(addAllCategories(getAllCategories(datas)));
				dispatch(addAllProducts(processedDatas));
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		};

		getproducts();
	}, [dispatch, searchData, filterData, sortData]);

	const handleAddProduct = product => {
		return dispatch(addProduct(product));
	};

	const handleBuyNow = product => {
		return dispatch(buyProduct(product));
	};

	return products.length >= 1 ? (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full md:w-[calc(100%-100px)]">
			{products?.map(product => {
				return (
					<CardProduct
						key={product.id}
						product={product}
						add={() => handleAddProduct(product)}
						buyNow={() => handleBuyNow(product)}
					/>
				);
			})}
		</div>
	) : (
		<EmptyProduct />
	);
};

export default ProductList;
