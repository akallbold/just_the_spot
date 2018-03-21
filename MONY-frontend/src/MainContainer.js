import React, { Component } from 'react';
import './App.css';
import Login from "./Login"
import SearchPanel from "./SearchPanel"
import TitleList from "./TitleList"
import Article from "./Article"
import Maps from "./Maps"
import UserMap from "./UserMap"

class MainContainer extends Component {
  state = {
    allArticles: [],
    allPlaces:[],
    currentArticle: "",
    searchTerm: "",
    userMapView: false,
    userPlaces: [],
    userArticles: []
  }

  componentDidMount = () => {
    this.fetchArticles()
    this.fetchPlaces()
  }

  fetchArticles = () => {
    fetch("http://localhost:3000/articles")
    .then(response => response.json())
    .then(data => {
      this.setState({allArticles:data})
    })
  }

  fetchPlaces = () => {
    fetch("http://localhost:3000/places")
    .then(response => response.json())
    .then(data => {
      this.setState({allPlaces:data})
    })
  }

  changeCurrentArticle = (article) => {
    this.setState({currentArticle:article})
  }

  updateSearchTerm = (term) =>{
    this.setState({searchTerm:term})
  }

  changeUserMapView = () =>{
    this.setState({userMapView:!this.state.userMapView})
    if (this.state.currentArticle) {
    this.setState({currentArticle:""})
    }
  }

  updateUserPlaces = (places) => {
    this.setState({userPlaces:places})
  }

  display = () => {
    if (this.state.currentArticle){
      return  (<div className="main-container">
                <SearchPanel searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} user={this.props.user}/>
                <Article currentArticle= {this.state.currentArticle}/>
                <Maps currentArticle = {this.state.currentArticle} user={this.props.user} userMapView={this.state.userMapView} changeUserMapView={this.changeUserMapView} updateUserPlaces={this.updateUserPlaces}/>
              </div>)
    } else {
      if (this.state.userMapView) {
        return (<div className="main-container">
                  <SearchPanel searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} user={this.props.user}/>
                  <UserMap user={this.props.user} allPlaces={this.state.allPlaces} userPlaces={this.state.userPlaces} updateUserPlaces={this.updateUserPlaces}/>
               </div>)
      } else {
        return (<div className="main-container">
                  <SearchPanel searchTerm={this.state.searchTerm} updateSearchTerm={this.updateSearchTerm} user={this.props.user} changeUserMapView={this.changeUserMapView}/>
                  <TitleList allArticles= {this.state.allArticles} changeCurrentArticle={this.changeCurrentArticle} searchTerm={this.state.searchTerm}/>
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

export default MainContainer;
