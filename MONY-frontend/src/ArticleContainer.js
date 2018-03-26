import React, { Component } from 'react';
import {connect} from "react-redux"
import {goHome} from './actions'
import Article from "./Article"



class ArticleContainer extends Component {
  render() {
    console.log("current places in article container", this.props.currentPlaces)
    return (
      <div>
        <div className="nav">
          <p>just the spot</p>
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
