import React, { useState } from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import data from "./data.json";

const App = () => {

  const [state, setState] = useState({
    products: data.products,
    size: "",
    sort: "",
  });

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shoppign Cart</a>
      </header>
      <main>
        <div className="content" >
          <div className="main">
            <Filter count={state.products.length} />
            <Products products={state.products} />
          </div>
          <div className="sidebar" >
            Cart Items
          </div>
        </div>
      </main>
      <footer>
        All right's reserved
      </footer>
    </div>
  );
}

export default App;
