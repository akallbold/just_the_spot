import React, { Component } from 'react';
import {connect} from "react-redux"
import {changeCurrentArticle} from '../actions'

class PlacePreview extends Component {

  findArticleForPlace = () => {
    return this.props.allArticles.filter(article => {
      return article.id === this.props.place.article_id
    })
  }

  render() {
    return (
      <span className="place-preview" onClick={()=>this.props.changeCurrentArticle(this.findArticleForPlace()[0])} >
        <h2>{this.props.place.name}</h2>
        <h5>in NYC's best</h5>
        <h2>{this.findArticleForPlace()[0].title}</h2>
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


export default connect(mapStateToProps, {changeCurrentArticle})(PlacePreview)
