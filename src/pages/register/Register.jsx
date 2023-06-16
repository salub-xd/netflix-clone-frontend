import React, { useState } from 'react'
import './register.css'
import { NavLink } from "react-router-dom"

const Login = () => {
  const [myValue, setMyValue] = useState({ email: "", password: "" });
  const onChange = (event) => {
    // console.log(event.target.value);
    setMyValue({ ...myValue, [event.target.name]: event.target.value });
  }
  const submitClick = (e) => {
    localStorage.setItem("userData", JSON.stringify(myValue));
    // login(myValue.email,myValue.password);
    e.preventDefault();
    // console.log(myValue);
    // props.passNote(myValue);
    setMyValue({ email: "", password: "" });
  }
  // const getData = ()=>{
  //     const myUserData = localStorage.getItem("userData");
  //     let user = JSON.parse(myUserData)
  //     console.log(myUserData);
  // }

  return (
    <div>
      <div className="login-container">
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt="" />
        </div>
        <div className="login">
          <h1>Sign Up</h1>
          <div className="login-form">
            <div className="input-field">
              <label htmlFor="emailId">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter Your Email" value={myValue.email} onChange={onChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter Your Password" value={myValue.password} onChange={onChange} />
            </div>
            {/* <div className="input-field">
              <h2 className="forgotPassword"><a href="">FORGOT YOUR PASSWORD?</a></h2>
            </div> */}
          </div>
          <div className="button">
            <button onClick={submitClick} type="submit" id="login">
              <NavLink to={"/"}>Sign Up</NavLink>
            </button>
          </div>
          <div className="anotherWay">
            <h2><NavLink to={"/login"}>Old to Netflix?<span>Sign in now</span>.</NavLink></h2>
            <h2 className='forgetPass' ><NavLink to={"/login"}>Need Help?</NavLink></h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login