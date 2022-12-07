import logo from './logo.svg';
import './App.css';

import Product from "./components/product/Product";
import Country from "./components/country/Country";
import Products from "./components/product/Products";
import Countries from "./components/country/Countries";

function App() {
  return (
    <div className="App">
     <Product/>
        <Country/>
        <Countries/>
        <Products/>

    </div>
  );
}

export default App;
