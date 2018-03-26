import React, { Component } from 'react';
import {connect} from "react-redux"
import {saveArticleToUser, removeArticleFromUser, changeUserMapView} from './actions'

class ArticleDetails extends Component {



buttonDisplay = () => {
  let arrayWithoutArticle = this.props.userArticles.filter(articleObj => {
    return articleObj.id !== this.props.currentArticle.id
  })

  if (this.props.userArticles.find(articleObj => {return articleObj.id === this.props.currentArticle.id})) {
    return (<button className="add-remove-map-to-user-btn btn"
              onClick= {()=>this.props.removeArticleFromUser(arrayWithoutArticle)}
              >Remove from my Map
           </button>)
  } else {
    return (<button className="add-remove-map-to-user-btn btn"
              onClick= {()=>this.props.saveArticleToUser(this.props.currentArticle)}
              >Save to my Map
           </button>)
  }

}


  render() {
    console.log("userarticles in article details render", this.props.userArticles)
    return (
      <div className="article-details-mini">
        <h4>{this.props.currentArticle.title}</h4>
        <p>{this.props.currentArticle.description}</p>
        {this.buttonDisplay()}

        <span className="view-usermap-btn btn">
          <button  onClick={this.props.changeUserMapView}>View my Map!</button>
        </span>
        <img alt="grubstreet logo" src="grubstreet.png"/>
        <p>Thank you to Grubstreet for the delicious photos and scintillating writeups.</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPlaces:state.currentPlaces,
    currentArticle:state.currentArticle,
    userArticles:state.userArticles
  }

}

export default connect(mapStateToProps,{saveArticleToUser,changeUserMapView,  removeArticleFromUser })(ArticleDetails);
