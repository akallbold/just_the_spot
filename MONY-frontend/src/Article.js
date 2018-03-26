import React, { Component } from 'react';
import {connect} from "react-redux"
import Maps from "./Maps"
import {fetchCurrentPlaces, saveStuffToUser, savePlacesToUser, fetchSaveArticleToUser, fetchSavePlacesToUser} from './actions'
import ArticleDetails from './ArticleDetails'
import PlaceWriteUpList from './PlaceWriteUpList'

class Article extends Component {

  componentDidMount(){
    this.props.fetchCurrentPlaces(this.props.currentArticle)
  }

  render() {
    return (
      <div className="article-main">
        <img alt="yum- article cover" className="main-article-img" src= {this.props.currentArticle.img}/>
        <div className="article-map-details">
          <div className="article-map">
            {/* <Maps
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
            /> */}
          </div>
          <div className="article-details">
            <ArticleDetails changeUserMapView={this.props.changeUserMapView}/>
            <PlaceWriteUpList/>
          </div>
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
    userArticles:state.userArticles
  }

}

export default connect(mapStateToProps, { fetchCurrentPlaces, saveStuffToUser, savePlacesToUser, fetchSaveArticleToUser, fetchSavePlacesToUser })(Article);
