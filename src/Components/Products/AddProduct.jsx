import React, { useState } from "react";
import "./AddProduct.css";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    prodname: "",
    categoryDropList: "",
    companyDropList: "",
    desc: "",
    price: "",
    quantity: "",
  });

  function formSubmit(e) {
    e.preventDefault();
  }
  const InputEventData = (event) => {
    console.log(event.target.value);

    let { value, name } = event.target;

    setFormData((previousValue) => {
      console.log(previousValue);
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };

  return (
    <>
      {/* <ProductList/> */}
      <div className="home_item">
        <Link to="/">
          <KeyboardBackspaceIcon />
          Products
        </Link>
      </div>
      <form className="row m-0 product_form_style" onSubmit={formSubmit}>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label"></label>
          <input
            type="text"
            className="form-control font_style"
            id="inputAddress"
            placeholder=" Product Name"
            name="prodname"
            value={formData.prodname}
            onChange={InputEventData}
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputState" className="form-label"></label>
          <select
            id="inputState"
            className="form-select"
            placeholder="Category Name"
            name="categoryDropList"
            value={formData.categoryDropList}
            onChange={InputEventData}
          >
            {/* <option selected>Category Name</option> */}
            <option value="Computer & Accessorie">
              Computer & Accessories
            </option>
            <option value="Mobile phones & Accessories">
              Mobile phones & Accessories
            </option>
            <option value="TV & Accessories">TV & Accessories</option>
            <option value="Headphones">Headphones</option>
            <option value="Printers & Scanners">Printers & Scanners</option>
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="inputState" className="form-label"></label>
          <select
            id="inputState"
            className="form-select"
            name="companyDropList"
            placeholder="Company Name"
            value={formData.companyDropList}
            onChange={InputEventData}
          >
            {/* <option selected>Company Name</option> */}
            <option value="EQUITYSOFT TECHNOLOGIES">
              Equitysoft Technologies
            </option>
            <option value="ABB Ltd.">ABB Ltd.</option>
            <option value="AuctionWeb">AuctionWeb</option>
            <option value="BackRub">BackRub</option>
            <option value="Firebird">Firebird</option>
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label"></label>
          <textarea
            id="inputAddress"
            className="form-control font_style"
            rows="3"
            placeholder="Description"
            name="desc"
            value={formData.desc}
            onChange={InputEventData}
          ></textarea>
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label"></label>
          <input
            type="number"
            className="form-control font_style"
            id="inputAddress"
            placeholder=" Price"
            name="price"
            value={formData.price}
            onChange={InputEventData}
          />
        </div>

        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label"></label>
          <input
            type="number"
            className="form-control font_style"
            id="inputAddress"
            placeholder="Quantity"
            name="quantity"
            value={formData.quantity}
            onChange={InputEventData}
          />
        </div>

        {/* <h1>Upload Image</h1> */}
        {/* <AddIcon /> */}
        {/* <p>
          <input
            type="file"
            multiple="false"
            accept="image/*"
            id="finput"
            onchange="upload()"
          />
        </p> */}
        <div className="col-12">
          <button type="submit" className="save_btn">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
