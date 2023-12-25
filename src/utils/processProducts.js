import {
	sortedAllProducts,
	filterProducts,
	searchProducts,
} from "./methodProcessProducts";

export const processProducts = (
	products,
	filterData,
	searchData,
	sortData
) => {
	let processedDatas = products;

	if (filterData.length >= 1) {
		processedDatas = filterProducts(processedDatas, filterData);
	}
	if (searchData.length >= 1) {
		processedDatas = searchProducts(processedDatas, searchData);
	}
	if (sortData !== null) {
		processedDatas = sortedAllProducts(processedDatas, sortData);
	}

	return processedDatas;
};
