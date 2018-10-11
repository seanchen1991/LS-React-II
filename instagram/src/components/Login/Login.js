// There should be a username input, a password input, and a Login button.
// The component should invoke the login function in app.js when a user logs in.
// This login function should set a username on localStorage. You'll need to check local storage to see if a user is logged in.
// Be sure to force the page to reload when a user logs in so that our component un-mounts and mounts again.
import React from "react";

import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  //Updates the value in our input boxes
  handleInputChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleSubmit = ev => {
    const user = this.state.username;
    const password = this.state.password;
    //  adding the keyname "user" to the local storage and creating a key value "user" in which we will pass to the keyname : https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
    localStorage.setItem("user", user);
    localStorage.setItem("password", password);
    //forces the page to reload: https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
    window.location.reload();
  };

  // logout() {
  //   localStorage.removeItem('user')
  //   this.setState({is})
  // }

  render() {
    return (
      <div className="login-page">
        <h1 className="title">Welcome</h1>
        <i className="fas fa-chevron-down" />
        <div>
          <h3>Please Log In</h3>
          <form className="login">
            <input
              className="login-input"
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <input
              className="login-input"
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <button className="login-button" onClick={this.handleSubmit}>
              GO
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
