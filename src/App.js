// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import Navbar from "./Components/Navbar";
// import AddProduct from "./Components/Products/AddProduct";
import CompanyList from './Components/Company/CompanyList';
import CategoryList from './Components/Category/CategoryList';
import Product from './Components/Products/Product';
import AddProduct from './Components/Products/AddProduct';
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route exact path="/" element={<Navbar/>} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/company" element={<CompanyList />} />
        <Route exact path="/category" element={<CategoryList />} />
        <Route exact path="/product/:addproduct" element={<AddProduct />} />

        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </Router>

      {/* <h1>Hii</h1> */}
      {/* <Navbar /> */}
      {/* <AddProduct /> */}
    </>
  );
}

export default App;
