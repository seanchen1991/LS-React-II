import React from 'react';

const Login = props => {
  return (
    <div className="login">
      <input
        className="login-user"
        type="text"
        name="loginName"
        placeholder="Username"
      />
      <input
        className="login-password"
        type="text"
        name="loginPassword"
        placeholder="Password"
      />
      <button className="login-button">Login</button>
    </div>
  );
};

export default Login;
