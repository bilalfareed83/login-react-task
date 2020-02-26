import React from "react";

const Guest = props => (
  <React.Fragment>
    <h1>Welcome Our website</h1>
    <button onClick={props.login}>Login</button>
    <button>Signup</button>
  </React.Fragment>
);

export default Guest;
