import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import store from "./store";

const App = () => {

  const [cartItems, setCartItems] = useState(localStorage.getItem("cart-items") ? JSON.parse(localStorage.getItem("cart-items")) : []);

  const CreateOrder = (order) => {
    alert("Need to save order for " + order.name);
  }

  const removeFromCart = (product) => {
    const CartItems = cartItems.slice();
    setCartItems(CartItems.filter(x => x._id !== product._id));
    localStorage.setItem("cart-items", JSON.stringify(CartItems.filter(x => x._id !== product._id)));
  }

  const addToCart = (product) => {
    console.log("si")
    const CartItems = cartItems.slice();
    let alreadyInCart = false;
    CartItems.forEach(item => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      CartItems.push({ ...product, count: 1 });
    }
    setCartItems(CartItems);
    localStorage.setItem("cart-items", JSON.stringify(CartItems));
  }

  return (
    <Provider store={store} >
      <div className="grid-container">
        <header>
          <a href="/">React Shoppign Cart</a>
        </header>
        <main>
          <div className="content" >
            <div className="main">
              <Filter />
              <Products addToCart={addToCart} />
            </div>
            <div className="sidebar" >
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} CreateOrder={CreateOrder} />
            </div>
          </div>
        </main>
        <footer>
          All right's reserved
      </footer>
      </div>
    </Provider>
  );
}

export default App;
