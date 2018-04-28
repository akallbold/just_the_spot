import React, { Component } from 'react';
import {connect} from "react-redux"
import Maps from "./Maps"
import {fetchCurrentPlaces, saveStuffToUser, savePlacesToUser, fetchSaveArticleToUser, saveArticleToUser, changeUserMapView, removeArticleFromUser, goHome} from '../actions'
import ArticleDetails from './ArticleDetails'

class Article extends Component {

  componentDidMount(){
    this.props.fetchCurrentPlaces(this.props.currentArticle)
      window.scrollTo(0,0)
  }

  arrayWithoutArticle = () => this.props.userArticles.filter(articleObj => {
    return articleObj.id !== this.props.currentArticle.id
  })

  createPlaceDescriptionElements = () =>{
    return this.props.currentPlaces.map(place=>{
      return (
         <div className="place-details">
          <h1>{place.name}</h1>
          <h3>{place.address}</h3>
          <h4>{place.description}</h4>
        </div>
      )
    })
  }

  buttonDisplay = () => {
    let arrayWithoutArticle = this.props.userArticles.filter(articleObj => {
      return articleObj.id !== this.props.currentArticle.id
    })

    if (this.props.userArticles.find(articleObj => {return articleObj.id === this.props.currentArticle.id})) {
      return (<button className="btn"
                onClick= {()=>this.props.removeArticleFromUser(this.props.currentArticle)}
                >remove from my map
             </button>)
    } else {
      return (<button className="btn"
                onClick= {()=>this.props.saveArticleToUser(this.props.currentArticle)}
                >save to my map
             </button>)
    }

  }

  render() {
    return (
      <div className="article-main">
        <img alt="article cover" className="main-article-img" src= {this.props.currentArticle.img}/>
        <div className="article-map-details">
          <div className="article-map">
            <Maps
              currentPlaces={this.props.currentPlaces}
              currentArticle={this.props.currentArticle}
              userArticles={this.props.userArticles}
              fetchCurrentPlaces={this.props.fetchCurrentPlaces}
              saveStuffToUser= {this.props.saveStuffToUser}
              savePlacesToUser={this.props.savePlacesToUser}
              selectedPlace={this.props.selectedPlace}
              showingInfoWindow= {this.props.selectedPlace}
              fetchSaveArticleToUser={this.props.fetchSaveArticleToUser}
              fetchSavePlacesToUser ={this.props.fetchSavePlacesToUser}
            />
          </div>
          <div className="article-details">
            <ArticleDetails changeUserMapView={this.props.changeUserMapView}/>
          </div>

        </div>
        <div className="article-btns">
          {this.buttonDisplay()}
          <span className="btn">
            <img src="viewmymap4.png"  onClick={this.props.changeUserMapView}/>
          </span>
          <span className="btn">
            <img src="goback.png"  onClick={this.props.goHome}/>
          </span>
        </div>
        <div className="place-descriptions">
          {this.createPlaceDescriptionElements()}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    currentPlaces:state.currentPlaces,
    currentArticle:state.currentArticle,
    selectedPlace:state.selectedPlace,
    showingInfoWindow:state.showingInfoWindow,
    userArticles:state.userArticles,
    userPlaces: state.userPlaces
  }

}

export default connect(mapStateToProps, { fetchCurrentPlaces, saveStuffToUser, savePlacesToUser, fetchSaveArticleToUser, saveArticleToUser, changeUserMapView, removeArticleFromUser, goHome })(Article);
