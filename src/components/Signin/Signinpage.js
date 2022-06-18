import React, { useState } from "react";
import "./Signinpage.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signinpage() {

  const navigate = useNavigate();
  //useState to be use everytime we use forms
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSuccess, setIssuccess] = useState(false);

  const handleSubmit = (event) => {
    //to prevent the default behaviour of form to open new link
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/user/login", {
        email,
        password,
      })
      .then((res) => {
        console.log("user logged in : ", res);

        setIssuccess(true);
        navigate('/main');
      })
      .catch((err) => {
        alert("Please put valid credentials");
        setIssuccess(false);
        console.log(err);
      });
  };
  return (
    <div className="signbg">
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <header>
            {" "}
            <h1>Sign In</h1>
          </header>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>

        <Link to="/main">
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        </Link>

      </form>
    </div>
  );
}

export default Signinpage;
