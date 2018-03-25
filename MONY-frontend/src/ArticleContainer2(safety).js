import React, { Component } from 'react';
import {connect} from "react-redux"
import Article from "./Article"
import Maps from "./Maps"
import {fetchCurrentPlaces, saveStuffToUser, savePlacesToUser, fetchSaveArticleToUser, fetchSavePlacesToUser} from './actions'


class ArticleContainer extends Component {
  render() {
    return (
      <div className="center-panel">
        <Article/>
        <Maps
          currentPlaces={this.props.currentPlaces} currentArticle={this.props.currentArticle}
          userArticles={this.props.userArticles}
           fetchCurrentPlaces={this.props.fetchCurrentPlaces} saveStuffToUser= {this.props.saveStuffToUser}
          savePlacesToUser={this.props.savePlacesToUser}
          selectedPlace={this.props.selectedPlace}
          showingInfoWindow= {this.props.selectedPlace}
          fetchSaveArticleToUser={this.props.fetchSaveArticleToUser}
          fetchSavePlacesToUser ={this.props.fetchSavePlacesToUser}
          userArticles={this.props.userArticles}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPlaces:state.currentPlaces,
    currentArticle:state.currentArticle
  }

}

export default connect(mapStateToProps, { fetchCurrentPlaces, saveStuffToUser, savePlacesToUser, fetchSaveArticleToUser, fetchSavePlacesToUser })(ArticleContainer);
