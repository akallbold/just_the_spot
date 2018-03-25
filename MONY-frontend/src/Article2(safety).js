import React, { Component } from 'react';
import Iframe from "react-iframe"
import {connect} from "react-redux"

class Article extends Component {
  render() {
    // console.log("current article in article", this.props.currentArticle.title)
    return (
      <div className="center-panel">
        {/* <Iframe url= {this.props.currentArticle.url} width="50%"/> */}
        <p> The article is here...get rid of the iframe and save the image and descriptions </p>
        <p>{this.props.currentArticle.title}</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      currentArticle: state.currentArticle,
  }
}

export default connect(mapStateToProps)(Article);
