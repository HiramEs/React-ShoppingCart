import React, { useState } from 'react'
import formatCurrency from '../utils/utils'

export default function Cart({ cartItems, removeFromCart, CreateOrder }) {

    const [showCheckOut, setCheckOut] = useState(false);
    const [state, setState] = useState({
        name: "",
        address: "",
        email: "",
    })

    const handleInput = (e) => {
        setState({ [e.target.name]: e.target.value })
    }

    const createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: state.name,
            address: state.address,
            email: state.email,
            cartItems
        }
        CreateOrder(order);
    }

    return (
        <div>
            { cartItems.length === 0 ? (
                <div className="cart cart-header" >
                    Cart is empty
                </div>
            ) : (
                <div className="cart cart-header" >
                    You have {cartItems.length} items in the cart {" "}
                </div>
            )}
            <div className="cart" >
                <ul className="cart-items">
                    {cartItems.map(item => (
                        <li key={item._id} >
                            <div>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div>
                                <div>{item.title}</div>
                                <div className="right" >
                                    {formatCurrency(item.price)} x {item.count} {" "}
                                    <button className="button" onClick={() => removeFromCart(item)}>Remove</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {
                cartItems.length > 0 && (
                    <div>
                        <div className="cart">
                            <div className="total" >
                                <div>
                                    Total {" "}
                                    {formatCurrency(cartItems.reduce((a, c) => a + (c.price * c.count), 0))}
                                </div>
                                <button onClick={() => setCheckOut(true)} className="button primary">Proceed</button>
                            </div>
                        </div>
                        {
                            showCheckOut && (
                                <div className="cart" >
                                    <form onSubmit={createOrder} >
                                        <ul className="form-container">
                                            <li>
                                                <label>Email</label>
                                                <input name="email" type="email" required onChange={handleInput} ></input>
                                            </li>
                                            <li>
                                                <label>Name</label>
                                                <input name="name" type="text" required onChange={handleInput} ></input>
                                            </li>
                                            <li>
                                                <label>Address</label>
                                                <input name="address" type="text" required onChange={handleInput} ></input>
                                            </li>
                                            <li>
                                                <button className="button primary" type="submit" >Checkout</button>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
