import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./index.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  validateEmail,
  validatePassword,
} from "../../helper/Validation/validate";
import { useDispatch } from "react-redux";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  // const userData = localStorage.getItem("obj");
  const userDataString = localStorage.getItem("obj");
  const userData = JSON.parse(userDataString);
  // console.log(userData.email, "userData");
  const navigate = useNavigate();
  // const [password, setPassword] = useState('');
  const data = useSelector((state) => state.signup);
  // let cradit = data.user ? data.user : "a";
  // console.log(cradit);

  // console.log(email)

  const handleSubmit = (e) => {
    // console.log("emai",user.email)
    // console.log("password",user.password)
    // console.log(user.email)

    // console.log('.........email.........',cradit)

    if (user.email === "") {
      toast.warn("Plese enter Email", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 700,
      });
    } else if (user.password === "") {
      toast.warn("Plese enter Password", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 700,
      });
    }
    //  else if (!validateEmail(user.email)) {
    //   toast.warn("Invalid email address", {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 700,
    //   });
    // }
    // else if (!validatePassword(user.password)) {
    //   toast.warn("Password is weak", {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 700,
    //   });
    // }
    else if (
      userData.email === user.email &&
      userData.password === user.password
    ) {
      // toast.warn("Login succesful", {
      //   position: toast.POSITION.TOP_CENTER,
      //   autoClose: 700,
      // });
      // dispatch({
      //   type:"LOGIN_SUCCESS",
      //   payload:"login successful"
      // })
      navigate("/home ");
    } else {
      alert("invalid");
    }
  };
  return (
    <div className="pt-5">
      <div className="col-md-5 mx-auto">
        <div className="card card-body">
          <div className="wrapper">
            <div>
              <h1>Login</h1>
              <div className="userID">
                <label htmlFor="email">Email ID :</label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  id="email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="userpass">
                <label>Password :</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                ></input>
              </div>
              <button type="submit" variant="dark" onClick={handleSubmit}>
                <Link to="/home">Submit</Link>
              </button>

              <ToastContainer />
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Remember Me
                </label>
              </div>
            </div>
            <p className="small-xl pt-3 text-center">
              <span className="text-muted">
                Not a member? <Link to="/">Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
