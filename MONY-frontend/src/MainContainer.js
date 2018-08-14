import React, { Component } from 'react';
import './App.css';
import Login from "./Login"
import ArticleContainer from "./article/ArticleContainer"
import UserMap from "./user-map/UserMap"
import {connect} from "react-redux"
import { fetchArticles, fetchPlaces, goHome, changeCurrentArticle, fetchCurrentUser, findArticleForPlace } from "./actions"
import Home from "./home/Home"
import SearchView from "./home/SearchView"

class MainContainer extends Component {

  componentDidMount = () => {
    this.props.fetchCurrentUser()
    this.props.fetchArticles()
    this.props.fetchPlaces()
  }

  display = () => {
    if (this.props.userMapView){
      return  (<div className="usermap-container">
                <UserMap
                  userPlaces={this.props.userPlaces}
                  userArticles={this.props.userArticles}
                  user={this.props.user}
                  goHome={this.props.goHome}
                  changeCurrentArticle={this.props.changeCurrentArticle}
                  logOut={this.props.logOut}
                />
               </div>)
    } else {
      if (this.props.currentArticle) {
        return (<div className="article-container">
                  <ArticleContainer/>
               </div>)
      } else {
        return (<div className="main">
                  <Home/>
                  <SearchView/>
               </div>)
      }
    }
  }

  render() {
    return (
      <div className="main-container">
        {this.display()}
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
      user:state.user,
      userArticles: state.userArticles,
      userMapView: state.userMapView,
      userPlaces: state.userPlaces
  }
}

export default connect(mapStateToProps, { fetchArticles, fetchPlaces, goHome, changeCurrentArticle, fetchCurrentUser, findArticleForPlace })(MainContainer);
