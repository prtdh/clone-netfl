import React,{useState} from 'react'
import axios from "axios";
import { useNavigate} from "react-router-dom";

import './register.css'
const Register = () => {
    const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  
  const [password, setPassword] = useState("");


  const handleSubmit=(event)=>{
      event.preventDefault();
      axios.post("http://localhost:5000/api/user/register",{
          name,
          email,
          password
      }).then((res) => {
        console.log("user logged in : ", res);
        navigate('/signin');
      }).catch((err) => {
        alert("Please put valid credentials");
        console.log(err);
      });


  }



  return (
    <>
 <div className="signbg">
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <header>
            <h1>Register </h1>
          </header>
          
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
         
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Name"
            value={name}
          onChange={(e) => setName(e.target.value)}
          />
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

        {/* <Link to="/main"> */}
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        {/* </Link> */}

      </form>
    </div>        </>
  )
}

export default Register