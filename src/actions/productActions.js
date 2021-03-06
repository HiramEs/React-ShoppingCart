import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types";

export const fetchProducts = () => async (dispach) => {
    const res = await fetch("/api/products");
    const data = await res.json();
    dispach({
        type: FETCH_PRODUCTS,
        payload: data,
        filteredItems: data
    });
}

export const filterProducts = (products, size) => (dispach) => {
    dispach({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items: size === "All" ? products : products.filter(x => x.availableSizes.indexOf(size) >= 0)
        }
    })
}

export const sortProducts = (filteredProducts, sort) => (dispach) => {
    const sortedProducts = filteredProducts.slice();
    if (sort === "Latest") {
        sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
    } else {
        sortedProducts.sort((a, b) => sort === "Lowest" ?
            a.price > b.price ? 1 : -1 :
            a.price > b.price ? -1 : 1);
    }
    dispach({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedProducts
        }
    })
}