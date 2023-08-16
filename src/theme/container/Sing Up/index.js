import React,{ useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { useDispatch } from 'react-redux';
import {
  validateEmail,
  validatePassword,
} from "../../helper/Validation/validate";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();


  
  const handleSubmit = (event) => {
    // event.preventDefault()
    //  dispatch()
    // eslint-disable-next-line eqeqeq
    let obj = {

      email: email,
      password: password,
      cpassword: cpassword,
    };
    if (obj.email === "") {
      toast.warn("Plese enter Email", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 700,
      });
    } else if (obj.password === "") {
      toast.warn("Plese enter Password", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 700,
      });
      
    } else if (obj.cpassword === "") {
      toast.warn("Plese enter Confirm Password", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 700,
      });
      
    }
    //  else if (!validateEmail(obj.email)) {
    //   toast.warn("Invalid email address", {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 700,
    //   });
    // } else if (!validatePassword(obj.password)) {
    //   toast.warn("Password is weak", {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 700,
    //   });
    // } else if (obj.password !== obj.cpassword) {
    //   toast.warn("Password is not match", {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 700,
    //   });
    // }
    else {
      localStorage.setItem("obj", JSON.stringify(obj));
      console.log(localStorage)
      console.log(obj)
      dispatch({
            type:"REGISTER_SUCCESS",
            payload:obj,
          })
      navigate('/login')
      console.log('Found');
      }

    // console.log("form submitted", {
    //   position: toast.POSITION.TOP_CENTER,
    //   autoClose: 700,
    // });
    
    
  };
  

  

  return (
    <div className="pt-5">
    <div className="col-md-5 mx-auto">
      <div className="card card-body">
        <div className="wrapper">
          <div>
            <h1>Signup</h1>
            <div className="userID">
              <label htmlFor="email">Email ID :</label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                id="email"
                value={email}
                // onChange={handleChange}
                onChange={(e)=> setemail(e.target.value)}
              />
            </div>
            <div className="userpass">
              <label>Password :</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              ></input>
            </div>
            <div className="userconpass">
              <label> Confirm Password :</label>
              <input
                type="confirmpassword"
                id="cpassword"
                name="cpassword"
                placeholder="Conifirm Password"
                value={cpassword}
                // onChange={handleChange}
                onChange={(e)=> setcpassword(e.target.value)}
              ></input>
            </div>
            <button type="submit" variant="dark" onClick={() => handleSubmit()} >
            Submit
            </button>
            
            <ToastContainer />
            
          </div>
          <p className="small-xl pt-3 text-center">
            <span className="text-muted">Alreadey have an account? </span>
            <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SignUp;





 // <section>
    //   <h1> Signup</h1>
    //   <div className="container">
    //     <div className="user">
    //       <label for="email">Email ID :</label>
    //       <input
    //         type="text"
    //         placeholder="Email"
    //         name="email"
    //         id="email"
    //         // value={obj.email}
    //         // onChange={handleChange}
    //       />
    //     </div>
    //     <div className="pass">
    //       <label>Password :</label>
    //       <input
    //         type="password"
    //         id="password"
    //         name="password"
    //         placeholder="Password"
    //         // value={obj.password}
    //         // onChange={handleChange}
    //       ></input>
    //     </div>
    //     <div className="confirmpass">
    //       <label> Confirm Password :</label>
    //       <input
    //         type="password"
    //         id="password"
    //         name="password"
    //         placeholder="Password"
    //         // value={obj.password}
    //         // onChange={handleChange}
    //       ></input>
    //     </div>
    //     <button type="submit" variant="dark">
    //       Submit
    //       {/* <Link to="/home">Submit</Link> onClick={handleSubmit} */}
    //     </button>
    //     <ToastContainer />
    //   </div>
    // </section>