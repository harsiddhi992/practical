import React, { useState } from "react";
import ProductList from "./ProductList";
import { products } from "./ProductsApi";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import AddIcon from "@mui/icons-material/Add";
const Product = () => {
  const imgSrc = "https://picsum.photos/536/354";

  const [data, setData] = useState(products);

  return (
    <>
      <div className="home_item">
        <Link to="/">
          <KeyboardBackspaceIcon />
        </Link>
        <a>Manage Company</a>
        <Link to="AddProduct">
          <AddIcon />
        </Link>
      </div>

      {data.map((curElem) => {
        const { id } = curElem;
        return <ProductList key={id} {...curElem} />;
      })}
      {/* <h3>{question}</h3>
     <p> {description}</p> */}
    </>
  );
};

export default Product;
