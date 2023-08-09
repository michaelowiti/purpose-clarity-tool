
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
const Login=({setIsLoggedIn})=>{
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoggedIn(true);

    // after logging the user in, redirect to the home page!
    navigate('/');
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      {/* <div class="col-md-6" style={{width:"700px"}}>
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div> */}
  <div class="col-md-6 mb-4" style={{width:"700px"}}>
      <input
        type="text"
        name="username"
        class="form-control"
        placeholder="username"
        value={formData.username}
        onChange={handleChange}
      />
      </div>

      <div class="col-md-6" style={{width:"700px"}} >
      <input
        type="password"
        name="password"
        class="form-control"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
      />
      </div>
      <button class="form-control mt-4" style={{width:"100px"}} type="submit">Login</button>
    </form>
  );
}


export default Login;