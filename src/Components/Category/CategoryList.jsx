import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import "./CategoryList.css";
import { Margin } from "@mui/icons-material";
const CategoryList = () => {
  //   get the data of category list from local storage
  const getLocalData = () => {
    const lists = localStorage.getItem("mycategorylist");

    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  };

  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());

  // add the category  fucnction
  const addItem = () => {
    if (!inputdata) {
      alert("plz select the category");
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };

  // how to delete category name
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItems);
  };

  // adding localStorage
  useEffect(() => {
    localStorage.setItem("mycategorylist", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="home_item ">
        <Link to="/" >
        <a >
          <KeyboardBackspaceIcon/>
        </a>
        </Link>
        <a>Manage Category</a>
      </div>
      <div className="main-div d-flex justify-content-between">
        <div className="child-div">
          <div className="addCompany">
            <div className="col-12">
              <label for="inputState" className="form-label"></label>
              {/* <select
                id="inputState"
                className="form-select"
                value={inputdata}
                onChange={(event) => setInputData(event.target.value)}
              >
                <option selected>Company Name</option>
                <option value="Computer & Accessorie">
                  Computer & Accessories
                </option>
                <option value="Mobile phones & Accessories">
                  Mobile phones & Accessories
                </option>
                <option value="TV & Accessories">TV & Accessories</option>
                <option value="Headphones">Headphones</option>
                <option value="Printers & Scanners">Printers & Scanners</option>
              </select> */}
              <input
              type="text"
              className="form-control"
              value={inputdata}
              onChange={(event) => setInputData(event.target.value)}
              placeholder="Cateory Name"
            />
            </div>
              
            <button className="btn btn-secondary" onClick={addItem}>
              Add
            </button>
          </div>
          {/* show  Company names  */}
          <div className="showItems">
            <p>List Of categories</p>
            {items.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <ul class="list-group">
                    <li class="list-group-item">
                      {curElem.name}
                      <i
                        className="far fa-trash-alt add-btn d-flex justify-content-end"
                        onClick={() => deleteItem(curElem.id)}
                      ></i>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
