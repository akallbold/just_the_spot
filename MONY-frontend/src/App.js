import React, { Component } from 'react';
import './App.css';
import Login from "./Login"
import MainContainer from "./MainContainer"

class App extends Component {

  state={
    user:{name:"anna", id:1}
  }

  loginUser = (user) => {
    this.setState({user:user})
  }

  createElements = () => {
    if (this.state.user){
      return <MainContainer user={this.state.user} user={this.state.user}/>
    } else {
      return <Login user={this.state.user} loginUser={this.loginUser}/>
    }
  }

  render() {
    return (
      <div className="App">
        {this.createElements()}
      </div>
    );
  }
}

export default App;
