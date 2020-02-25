import React, {Component} from 'react';
import User from './users'
import Guest from './guest';



class App extends Component {
  state = {
    isLogin: false
  }

  clickLogin = () => {
    console.log('You are Login')
    this.setState({ isLogin: true })
  }

  
  clickLogout = () => {
    console.log('You are Logout')
    this.setState({ isLogin: false })
  }


  render() {
    console.log(this.state.isLogin)
    return (
      <div>
        { this.state.isLogin ? <User clickUserData={this.clickLogout} /> : <Guest clickData={this.clickLogin}/>}
      </div>
    )
  }
}
export default App
