import React from 'react';
import { Provider } from 'react-redux';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import store from "./store";

const App = () => {
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
              <Products />
            </div>
            <div className="sidebar" >
              <Cart />
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
