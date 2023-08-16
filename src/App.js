import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./theme/container/Home";
import About from "./theme/container/About";
import Table from "./theme/container/Table";
import Login from "./theme/container/Login";
import SignUp from "./theme/container/Sing Up";
import Navbar from "./theme/container/Navbar";
import Protected from "./theme/container/Protected";
import Profile from "./theme/container/Profile";
import Test from "./theme/container/test/test";
// import Store from "./theme/Redux/store";
// import { Provider } from "react-redux";
//import {createStore} from "redux";
//import rootReducer from "./theme/Redux/reducer"
export default function App() {
  //const store = createStore(rootReducer);
  return (
    <>
    {/* <Profile/> */}
    {/* <Login/>
    <SignUp/> */}
     <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/" element={<SignUp />} />
          <Route path="/profile" element={<Profile/>}   />
          <Route  path="/test"  element={<Test/>} />
          <Route path="/home" element={<div><Navbar /><Protected MainContainer={<Home />} /></div>}   />
          <Route path="/about" element={<div><Navbar /><Protected MainContainer={<About/>} /></div>}   />
          <Route path="/table" element={<div><Navbar /><Protected MainContainer={<Table />} /></div>}   />
          <Route exact path="/home" element={<div><Navbar /> <Protected Component={<Home/>} /></div>}/>

          {/* <Route
            exact
            path="/about"
            element={
              <div>
                <Navbar />
                <Protected Component={<About/>} />
              </div>
            }
          />
          <Route
            exact
            path="/table"
            element={
              <div>
                <Navbar />
                <Protected Component={<Table/>} />
              </div>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
