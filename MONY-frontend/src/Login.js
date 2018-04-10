import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux"
import {changeUser} from './actions'
import { fetchLogin } from "./actions"

class Login extends Component {

  state={
    username:"",
    password:""
  }

handleChange = (event) => {
  this.setState({
    [event.target.name]:event.target.value
  })
}

  render(){
    return (
      <div className="login" >
         <form onSubmit={()=>this.props.fetchLogin(this.state.username,this.state.password)}>
            <label>Please enter your name and password:</label>
            <input onChange={this.handleChange} name="username" type="text" value={this.state.username}></input>
            <input onChange={this.handleChange} name="password" type="password" value={this.state.password}></input>
            <input type="submit" value="Login"></input>
         </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}

export default connect(mapStateToProps, {changeUser, fetchLogin})(Login);
