import React from "react";
import "./AddProduct.css";


const ProductList = ({ image,product, category, quantity }) => {
  return (
    <>
      <div className="main_product">
        <div className="prod_img">
          <img src={image} alt="image" className="img-fluid img_style" />
        </div>
        <div className="prod_content">
          <h3 className="prod_heading">{product}</h3>
          <span className="categ_name">{category}</span>
          <p className="quantity_val">{quantity}</p>
        </div>

        <div className="prod_btn">
          <div className="edit">
            <button className="btn btn-secondary w-25">Edit</button>
          </div>
          <div className="delete">
            <button className="btn btn-secondary w-25">Delete</button>
          </div>
        </div>
        {/* <div className="prod_btn">
          <button className="btn btn-success" onClick={editItem}>
            Edit
          </button>
          <button className="btn btn-success" onClick={deleteItem}>
            Delete
          </button>
        </div> */}
      </div>
      {/* <h3>{product}</h3>
      <p> {category}</p>

      <p> {quantity}</p> */}
    </>
  );
};

export default ProductList;
