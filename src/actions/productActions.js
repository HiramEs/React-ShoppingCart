import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = () => async (dispach) => {
   const res = await fetch("/api/products");
   const data = await res.json();
   dispach({
       type: FETCH_PRODUCTS,
       payload: data,
   });
}