import React, { useState, useEffect } from 'react'
import FormatCurrency from "../utils/utils"
import Modal from "react-modal";
import formatCurrency from '../utils/utils';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from "../actions/productActions";

const Products = ({ addToCart }) => {

    const products = useSelector(state => state.products.items);
    const dispatch = useDispatch();

    const [state, setState] = useState({
        product: null
    })

    const openModal = (product) => {
        setState({ product });
    }

    const closeModal = () => {
        setState({ product: null });
    }

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            {
                !products ? <div>Loading</div> : <ul className="products" >
                    {products.map(product => (
                        <li key={product._id}>
                            <div className="product" >
                                <a href={`#${product._id}`} onClick={() => openModal(product)} >
                                    <img src={product.image} alt={product.title} />
                                    <p>
                                        {product.title}
                                    </p>
                                </a>
                                <div className="product-price" >
                                    <div>
                                        {FormatCurrency(product.price)}
                                    </div>
                                    <button onClick={() => addToCart(product)} className="button primary" >Add To Cart</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            }
            {
                state.product && (
                    <Modal isOpen={true} onRequestClose={closeModal} >
                        <button onClick={closeModal} className="close-modal">x</button>
                        <div className="product-details" >
                            <img src={state.product.image} alt={state.product.title} />
                            <div className="product-details-description" >
                                <p>
                                    <strong>{state.product.title}</strong>
                                </p>
                                <p>
                                    {state.product.description}
                                </p>
                                <p>
                                    Available Sizes
                                    {state.product.availableSizes.map(x => (
                                    <span>
                                        {" "}
                                        <button className="button" >{x}</button>
                                    </span>
                                ))}
                                </p>
                                <div className="product-price" >
                                    <div>
                                        {formatCurrency(state.product.price)}
                                        <button className="button primary" onClick={() => {
                                            addToCart(state.product);
                                            closeModal();
                                        }} >Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )
            }
        </div>
    )
}

export default Products;