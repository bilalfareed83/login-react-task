import React from "react";

// If you are just rendering a simple UI use a function component
const User = props => (
  <React.Fragment>
    <h1>Welcome User</h1>
    <button onClick={props.logout}>Logout</button>
  </React.Fragment>
);

export default User;
