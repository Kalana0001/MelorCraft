import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import user from '../../images/user.png';
import lock from '../../images/lcok.png';

function Login() {
  return (
    <div className="lcontainer">
      <div className="design">
        <div className="pill-1 rotate-45"></div>
        <div className="pill-2 rotate-45"></div>
        <div className="pill-3 rotate-45"></div>
        <div className="pill-4 rotate-45"></div>
      </div>
      <div className="login">
        <h3 className="title">User Login</h3>
        <div className="text-input">
          <i className="ri-user-fill"><img id="user"src={user}/></i>
          <input type="text" placeholder="Username" />
        </div>
        <div className="text-input">
          <i className="ri-lock-fill"><img id="user"src={lock}/></i>
          <input type="password" placeholder="Password" />
        </div>
        <button className="login-btn">LOGIN</button>
        <a id="loga"href="#" className="forgot">Forgot Username/Password?</a>
        <div className="create">
          <a id="loga"href="/register">Create Your Account</a>
          <i className="ri-arrow-right-fill"></i>
        </div>
      </div>
    </div>
  );
}

export default Login;
