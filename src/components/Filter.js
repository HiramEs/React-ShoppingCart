import React from 'react'

export default function Filter({ count }) {
    return (
        <div>
            <div className="filter-result">{count}</div>
            <div className="filter-sort">
                Order
                <select name="" id="">
                    
                </select>
            </div>
            <div className="filter-size">
                Filter
                <select name="" id="">
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
