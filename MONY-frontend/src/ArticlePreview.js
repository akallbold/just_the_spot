import React, { Component } from 'react';
import {connect} from "react-redux"
import {changeCurrentArticle, removeArticleFromUser, saveArticleToUser} from './actions'


class ArticlePreview extends Component {

  display=()=>{
    let arrayWithoutArticle = this.props.userArticles.filter(articleObj => {
      return articleObj.id !== this.props.article.id
    })
    if (this.props.userArticles.includes(this.props.article)){
      return (<span className= "article-preview article-already-added">
                  <p>{this.props.article.title}</p>
                  <img alt="article cover" className="article-preview-img" src={this.props.article.img}/>
                  <button className="view-article-btn"
                            onClick= {()=>this.props.changeCurrentArticle(this.props.article)}
                            >View Article
                         </button>
                  <button className="add-remove-map-to-user-btn "
                            onClick= {()=>this.props.removeArticleFromUser(arrayWithoutArticle)}
                            >Remove from my Map
                         </button>

              </span>
      )
    } else {
      return (<span className= "article-not-yet-added article-preview"
                  >
                  <p>{this.props.article.title}</p>
                  <img alt="article cover" className="article-preview-img" src={this.props.article.img}/>
                  <button className="view-article-btn"
                            onClick= {()=>this.props.changeCurrentArticle(this.props.article)}
                            >View Article
                         </button>
                  <button className="add-remove-map-to-user-btn "
                            onClick= {()=>this.props.saveArticleToUser(this.props.article)}
                            >Save to my Map
                         </button>
              </span>
      )
    }
  }

  render() {
    return (
      <div>{this.display()}</div>

    )
  }
}



const mapStateToProps = (state) => {
  return {
      allArticles: state.allArticles,
      allPlaces:state.allPlaces,
      currentArticle: state.currentArticle,
      searchTerm: state.searchTerm,
      userArticles:state.userArticles
  }
}


export default connect(mapStateToProps, {changeCurrentArticle, removeArticleFromUser, saveArticleToUser})(ArticlePreview);
