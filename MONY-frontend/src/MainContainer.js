import React, { Component } from 'react';
import './App.css';
import Login from "./Login"
import SearchPanel from "./SearchPanel"
import ArticleList from "./ArticleList"
import ArticleContainer from "./ArticleContainer"
import UserMap from "./UserMap"
import {connect} from "react-redux"
import { fetchArticles, fetchPlaces } from "./actions"

class MainContainer extends Component {

  componentDidMount = () => {
    this.props.fetchArticles()
    this.props.fetchPlaces()
  }

  display = () => {
    if (this.props.userMapView){
      console.log("rendering option 1")
      return  (<div className="main-container">
                <SearchPanel/>
                <UserMap/>
               </div>)
    } else {
      if (this.props.currentArticle) {
        console.log("rendering option 2")
        return (<div className="main-container">
                  <SearchPanel/>
                  <ArticleContainer/>
               </div>)
      } else {
        console.log("rendering option 3")
        return (<div className="main-container">
                  <SearchPanel/>
                  <ArticleList/>
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

// const mapDispatchtoProps = (dispatch) => {
//   return {dispatchFetchArticles: dispatch(this.fetchArticles)}
//   return {dispatchSaveArticles: dispatch(this.saveArticles)}
//   return {dispatchUpdateSearchTerm: dispatch(this.updateSearchTerm)}
// }

export default connect(mapStateToProps, { fetchArticles, fetchPlaces })(MainContainer);
