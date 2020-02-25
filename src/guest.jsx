import React, {Component} from 'react'


class Guest extends Component{
   
    render() {
        
        return (
            <React.Fragment>
                 <h1>Welcome Our website</h1>
                <button onClick={this.props.clickData}>Login</button>
                <button>Signup</button>
            </React.Fragment>
        )
    }
}

export default Guest