import React, { Component } from "react";
import User from "./users";
import Guest from "./guest";

class App extends Component {
  state = {
    isLoggedIn: false
  };

  // single statement functions should be in one line
  login = () => this.setState({ isLoggedIn: true });

  logout = () => this.setState({ isLoggedIn: false });

  render() {
    return (
      <div>
        {/* Use meaningful names for props and variables */}
        {this.state.isLoggedIn ? (
          <User logout={this.logout} />
        ) : (
          <Guest login={this.login} />
        )}
      </div>
    );
  }
}
export default App;
