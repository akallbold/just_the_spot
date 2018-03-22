import React, { Component } from 'react';
import {connect} from "react-redux"
import Article from "./Article"
import Maps from "./Maps"


class ArticleContainer extends Component {
  render() {
    return (
      <div className="center-panel">
        <Article/>
        <Maps/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      // currentArticle: state.currentArticle,
  }
}

export default connect(mapStateToProps)(ArticleContainer);
