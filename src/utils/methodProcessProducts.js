export const filterProducts = (products, filterDatas) => {
    return products.filter(data => 
        filterDatas.includes(data.category)
    )
}

export const searchProducts = (products, searchData) => {
    return products.filter(data =>
        data.title.toLowerCase().includes(searchData)
    );
}

export const sortedAllProducts = (products, sort) => {
    if (!Array.isArray(products)) {
        return products;
    }
    
    let sortedProducts = [...products];
    
    if (sort == 1) {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    if (sort == 2) {
        sortedProducts.sort((a, b) => a.price - b.price);
    }
    if (sort == 3) {
        sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    if (sort == 4) {
        sortedProducts.sort((a, b) => a.rating.rate - b.rating.rate);
    }
    if (sort == 5) {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title, undefined, {sensitivity: 'base'}));
    }
    if (sort == 6) {
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title, undefined, {sensitivity: 'base'}));
    }
    
    return sortedProducts;
};
