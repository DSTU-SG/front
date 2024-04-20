import React from "react";

const Auth = () => {
    return (
      <div class="auth">
        <div class="frame">
          <h1>auht</h1>
          <label>
          Login: <input type="text" placeholder="Login"/>
          </label>
          <label>
          Password: <input type="text" placeholder="Password"/>
          </label>
          <button>Login</button>
        </div>
      </div>

    );
};

export default Auth;