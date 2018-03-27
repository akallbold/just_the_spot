import React, { Component } from 'react';
import './App.css';
import Login from "./Login"
import SearchPanel from "./SearchPanel"
// import ArticleList from "./ArticleList"
import ArticleContainer from "./ArticleContainer"
import UserMap from "./UserMap"
import {connect} from "react-redux"
import { fetchArticles, fetchPlaces, goHome, changeCurrentArticle } from "./actions"
// import PlaceList from "./PlaceList"
import Home from "./Home"
import SearchView from "./SearchView"

class MainContainer extends Component {

  componentDidMount = () => {
    console.log("in user main container component did mount. showing userPlaces", this.props.userPlaces)
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
                  currentArticle={this.props.currentArticle}
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
    console.log("userPLaces",this.props.userPlaces)
    return (
      <div className="main-container">
        {/* {this.display()} */}
        <Login/>
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

// const mapDispatchtoProps = (dispatch) => {
//   return {dispatchFetchArticles: dispatch(this.fetchArticles)}
//   return {dispatchSaveArticles: dispatch(this.saveArticles)}
//   return {dispatchUpdateSearchTerm: dispatch(this.updateSearchTerm)}
// }

export default connect(mapStateToProps, { fetchArticles, fetchPlaces, goHome, changeCurrentArticle })(MainContainer);
