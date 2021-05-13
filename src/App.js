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

  const filterProducts = (event) => {
    console.log(event.target.value);
    if (event.target.value === "All") {
      setState({ size: event.target.value, products: data.products });
    } else {
      setState({
        size: event.target.value,
        products: data.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0)
      });
    }
  }

  const sortProducts = (event) => {
    console.log(event.target.value);
    const sort = event.target.value;
    setState(prevState => ({
      sort,
      products: state.products.slice().sort((a, b) => (
        sort === "Lowest" ?
          ((a.price > b.price) ? 1 : -1) :
          sort === "Highest" ?
            ((a.price < b.price) ? 1 : -1) :
            ((a._id < b._id) ? 1 : -1)
      ))
    }));
  }

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shoppign Cart</a>
      </header>
      <main>
        <div className="content" >
          <div className="main">
            <Filter
              count={state.products.length}
              size={state.size}
              sort={state.sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts} />
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
