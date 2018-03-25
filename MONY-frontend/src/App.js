import React, { Component } from 'react';
import './App.css';
// import Login from "./Login"
import MainContainer from "./MainContainer"
import {connect} from "react-redux"

class App extends Component {

  // createElements = () => {
  //   if (this.props.user){
  //     return <MainContainer/>
  //   } else {
  //     return <Login/>
  //   }
  // }

  render() {
    return (
      <div className="App">
        <MainContainer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  }
}

export default connect(mapStateToProps)(App);
