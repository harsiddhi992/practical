import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CompanyList.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const CompanyList = () => {
  //   take the data of company list from local storage
  const getLocalData = () => {
    const lists = localStorage.getItem("mycompanylist");

    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  };
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());

  // add the company name fucnction
  const addItem = () => {
    if (!inputdata) {
      alert("plz select the company");
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };

  // how to delete company name
  const deleteItem = (index) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItems);
  };

  // adding localStorage
  useEffect(() => {
    localStorage.setItem("mycompanylist", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="home_item">
        <Link to="/">
          <KeyboardBackspaceIcon />
        </Link>

        <a>Manage Company</a>
      </div>
      <div className="main-div">
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
                <option value="EQUITYSOFT TECHNOLOGIES">
                  Equitysoft Technologies
                </option>
                <option value="ABB Ltd.">ABB Ltd.</option>
                <option value="AuctionWeb">AuctionWeb</option>
                <option value="BackRub">BackRub</option>
                <option value="Firebird">Firebird</option>
              </select> */}
              <input
              type="text"
              className="form-control"
              value={inputdata}
              onChange={(event) => setInputData(event.target.value)}
              placeholder="Company Name"
            />
            </div>

            {/* 
            <input
              type="text"
              className="form-control"
              value={inputdata}
              onChange={(event) => setInputData(event.target.value)}
            /> */}
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
                    {/* <h3>{curElem.name}</h3> */}
                    {/* <div className="deletee_btn">
                      <i
                        className="far fa-trash-alt add-btn"
                        onClick={() => deleteItem(curElem.id)}
                      ></i>
                    </div> */}
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

export default CompanyList;
