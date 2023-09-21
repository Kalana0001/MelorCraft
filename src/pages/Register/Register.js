import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import user from '../../images/user.png';
import user1 from '../../images/user1.png';
import lock from '../../images/lcok.png';

function Register() {
  return (
    <div className="lcontainer">
      <div className="design">
        <div className="pill-1 rotate-45"></div>
        <div className="pill-2 rotate-45"></div>
        <div className="pill-3 rotate-45"></div>
        <div className="pill-4 rotate-45"></div>
      </div>
      <div className="login">
      <img id="regisicon" src={user1}/>
        <h3 className="title">User Registration</h3>
        <div className="text-input">
          <i className="ri-user-fill"><img id="user"src={user}/></i>
          <input type="text" placeholder="Username or Email" />
        </div>
        <div className="text-input">
          <i className="ri-lock-fill"><img id="user"src={lock}/></i>
          <input type="password" placeholder="Password" />
        </div>
        <div className="text-input">
          <i className="ri-lock-fill"><img id="user"src={lock}/></i>
          <input type="password" placeholder="Confirm Password" />
        </div>
        <button className="login-btn">SUBMIt</button>
        <div className="create">
          <a id="rega"href="/login">Back To Login</a>
          <i className="ri-arrow-right-fill"></i>
        </div>
      </div>
    </div>
  );
}

export default Register;
