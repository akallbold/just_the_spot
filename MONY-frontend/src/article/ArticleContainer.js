import React, { Component } from 'react';
import {connect} from "react-redux"
import {goHome, logOut} from '../actions'
import Article from "./Article"

class ArticleContainer extends Component {

  componentDidMount = () => {
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div>
        <div className="nav" onClick={this.props.goHome}>
          <img className="logo" alt="logo" src="logo.png"/>
          <img  alt= "logout button" src="logout.png" onClick={this.props.logOut}/>
        </div>
        <div className="article-container">
          <Article/>
        </div>
      </div>
    );
  }
}


export default (ArticleContainer);
