import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterProducts, sortProducts } from '../actions/productActions';

const Filter = () => {
    const filteredProducts = useSelector(state => state.products.filteredItems);
    const size = useSelector(state => state.products.size);
    const sort = useSelector(state => state.products.sort);
    const products = useSelector(state => state.products.items);

    const dispatch = useDispatch();    

    return !filteredProducts ? (<div>Loading...</div>) : (
        <div className="filter" >
            <div className="filter-result">{filteredProducts.length} Products</div>
            <div className="filter-sort">
                Order {" "}
                <select value={sort} onChange={(e) => dispatch(sortProducts(filteredProducts, e.target.value))} name="" id="">
                    <option value="Latest">Latest</option>
                    <option value="Lowest">Lowest</option>
                    <option value="Highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">
                Filter {""}
                <select value={size} onChange={(e) => dispatch(filterProducts(products, e.target.value))} name="" id="">
                    <option value="All">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    )
}

export default Filter;