import React, { Component } from 'react';
import {connect} from "react-redux"
import {changeCurrentArticle} from './actions'


class ArticlePreview extends Component {
  render() {
    return (
      <span className="article-preview"
            onClick={()=>this.props.changeCurrentArticle(this.props.article)}  >
        <p>{this.props.article.title}</p>
        <img alt="article cover" className="article-preview-img" src="https://pixel.nymag.com/imgs/daily/grub/2016/best-of-new-york/best-baguette-she-wolf-bakery.jpg"/>
      </span>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      allArticles: state.allArticles,
      allPlaces:state.allPlaces,
      currentArticle: state.currentArticle,
      searchTerm: state.searchTerm,
  }
}


export default connect(mapStateToProps, {changeCurrentArticle})(ArticlePreview);
