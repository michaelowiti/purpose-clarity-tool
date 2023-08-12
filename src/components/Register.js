import { useState,useRef,useEffect } from "react";
import React from 'react'



const Register = () => {



  return (
    <div style={{backgroundColor:"aliceblue"}}>
       <form class="row g-3" >
        <h2>New user</h2>
        <p>Use the form below to create the account</p>
  <div class="col-md-6" style={{width:"700px"}}>
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col-md-6" style={{width:"700px"}}>
    
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>

  <div class="col-12" style={{width:"700px"}}>
  <input type="text" class="form-control"  placeholder="password"/>
  </div>
  <div class="col-12" style={{width:"700px"}}>
  <input type="text" class="form-control"  placeholder=" confirm password"/>
  </div>
 
  <div class="col-12" >
    <div class="form-check" style={{width:"700px"}}>
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck" >
        Agree To Terms and Condition
      </label>
    </div>
  </div> 
  

  <div class="col-12" >
    <button type="submit" style={{width:"500px"}} class="btn btn-secondary">Register</button>
  </div>
</form>

    </div>
  )
}

export default Register;