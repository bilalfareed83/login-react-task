import React, { Component } from 'react';


class User extends Component{
    render() {
        return (
            <React.Fragment>
                <h1>Welcome User</h1>
                <button onClick={this.props.clickUserData}>Logout</button>
            </React.Fragment>
        ) 
    }
}

export default User