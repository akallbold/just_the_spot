import React, { Component } from 'react';
import Iframe from "react-iframe"

class Article extends Component {
  render() {
    return (
      <div className="center-panel">
        <Iframe url= {this.props.currentArticle.url} width="50%"/>

      </div>
    );
  }
}

export default Article;
