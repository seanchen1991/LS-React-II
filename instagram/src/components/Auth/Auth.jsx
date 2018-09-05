import React from 'react';
import App from '../../App';
import Login from '../Login/Login';

class Auth extends React.Component {
  constructor(App) {
    super();
    state = {
      authenticated: false
    }
  }

  // component did mount
  componentDidMount() {
    if(window.localStorage.getItem("authenticated")) {
      this.setState({
        authenticated: JSON.parse(window.localStorage.getItem("authenticated"))
      });
    } else {
      window.localStorage.setItem("authenticated", JSON.stringify(this.state.authenticated));
    }
  };

  render() { 
    if(this.state.authenticated) {
      return <App />;
    } else {
      return <Login authenticated={this.state.authenticated} />
    }
  };
};