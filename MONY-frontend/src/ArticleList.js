import React, { Component } from 'react';
import {connect} from "react-redux"
import {changeCurrentArticle} from './actions'

class ArticleList extends Component {

  createElements = () => {
    let relevantLists = this.props.allArticles.filter(article => {
      return article.title.toUpperCase().includes(this.props.searchTerm.toUpperCase())
    })
    return relevantLists.map(article => {
      return(
        <div>
          <a className= "article"
            key={article.id} article= {article} onClick={()=>this.props.changeCurrentArticle(article)}>{article.title}</a>
        </div>
      )
    })
  }


  render() {

    return (
      <div className="title-list">
        <p>"Title List"</p>
        {this.createElements()}
      </div>
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

// const mapDispatchtoProps = (dispatch) => {
//   return {dispatchChangeCurrentArticle: (article) => dispatch(changeCurrentArticle)}
// }

export default connect(mapStateToProps, {changeCurrentArticle})(ArticleList);
