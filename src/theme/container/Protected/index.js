import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// const Protected = ({ isLoggedIn, children }) => {
// if (!isLoggedIn) {
// return <Navigate to="/" replace />;
// }
// return children;
// };
function Protected(props) {
  const navigate = useNavigate();
  const { MainContainer } = props;
  useEffect(() => {
    // console.log(props.MainContainer)
    let login = localStorage.getItem("obj");
    console.log(login);
    if (!login) {
      navigate("/");
      console.log("/");
    } else {
      console.log("not Found");
    }
  }, []);

  return (
    <div>
      {/* This is protected screen */}
      {MainContainer}
    </div>
  );
}
export default Protected;
