import React, { useEffect } from "react";

const Profile = () => {
  let userdata = JSON.parse(localStorage.getItem("obj"));
  useEffect(() => {
    alert("Hii");
  }, []);
  return <h1 style={{ textAlign: "center" }}>{userdata.email}</h1>;
};
export default Profile;
