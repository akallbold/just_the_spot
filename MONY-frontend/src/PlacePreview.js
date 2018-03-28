import React, { Component } from 'react';
import {connect} from "react-redux"
import {changeCurrentArticle} from './actions'

class PlacePreview extends Component {

  findArticleForPlace = () => {
    return this.props.allArticles.filter(article => {
      return article.id === this.props.place.article_id
    })
  }

  render() {
    console.log("placeinfo", this.props)
    return (
      <span className="place-preview" onClick={()=>this.props.changeCurrentArticle(this.findArticleForPlace()[0])} >
        <p>{this.props.place.name}</p>
        <p>{this.findArticleForPlace()[0].title}</p>
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
