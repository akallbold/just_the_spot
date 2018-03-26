import React, { Component } from 'react';
import {connect} from "react-redux"
import {goHome} from './actions'
import Article from "./Article"



class ArticleContainer extends Component {

  componentDidMount = () => {
    window.scrollTo(0,0)
  }
  render() {
    console.log("current places in article container", this.props.currentPlaces)
    return (
      <div>
        <div className="nav" onClick={this.props.goHome}>
          <img className="logo" alt="logo" src="logo.png"/>
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

export default connect(mapStateToProps, { goHome })(ArticleContainer);
