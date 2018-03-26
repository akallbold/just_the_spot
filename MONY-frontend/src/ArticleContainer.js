import React, { Component } from 'react';
import {connect} from "react-redux"
import {goHome} from './actions'
import Article from "./Article"



class ArticleContainer extends Component {
  render() {
    console.log("current places in article container", this.props.currentPlaces)
    return (
      <div className="article-container">
        <span className="go-back-btn btn">
          <button  onClick={this.props.goHome}>Go Back!</button>
        </span>
        <Article/>
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
