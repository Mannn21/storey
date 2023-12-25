export const getAllCategories = (products) => {
	const allCategories = Array.from(new Set(products.map(product => product.category)));
    return allCategories;
};
