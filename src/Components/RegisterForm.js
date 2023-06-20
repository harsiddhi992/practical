import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email.length === 0) {
      alert("Email has left Blank!");
    } else if (password.length === 0) {
      alert("Password has left Blank!");
    } else {
      const url = "http://localhost/enquiry.php";
      let fData = new FormData();
      fData.append("email", email);
      fData.append("password", password);
      axios
        .post(url, fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));
    }
  };
  return (
    <>
      <div>
        {/* <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="paswword" name="password" id="pw" />
        <input type="button" value="SEND" name="send" id="send" /> */}
        <div className="home_item ">
          <Link to="/">
            <a>
              <KeyboardBackspaceIcon />
            </a>
          </Link>
        </div>
        <div className="container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="button"
            name="submit"
            id="submit"
            value="SEND"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
