import React, { Component } from 'react';
import {connect} from "react-redux"
import {goHome, logOut} from './actions'
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
          <img  src="logout.png" onClick={this.props.logOut}/>
        </div>
        <div className="article-container">
          <Article/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPlaces:state.currentPlaces,
    currentArticle:state.currentArticle
  }

}

export default connect(mapStateToProps, { goHome, logOut })(ArticleContainer);
