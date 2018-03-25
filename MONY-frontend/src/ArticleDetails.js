import React, { Component } from 'react';
import {connect} from "react-redux"
import {saveArticleToUser, removeArticleFromUser} from './actions'

class ArticleDetails extends Component {

removeArticleFromUserArray= () =>{
  console.log("in removearticlefrom user array function")
  return this.props.userArticles.filter(articleObj => {
    return articleObj.id !== this.props.currentArticle.id
  })
}

buttonDisplay = () => {
    console.log("user articles in button display", this.props.userArticles) 
  if (this.props.userArticles.find(articleObj => {return articleObj.id === this.props.currentArticle.id})) {
    return (<button className="add-remove-map-to-user-btn"
              onClick= {()=>this.props.removeArticleFromUser(this.removeArticleFromUserArray)}
              >Remove from my Map
           </button>)
  } else {
    return (<button className="add-remove-map-to-user-btn"
              onClick= {()=>this.props.saveArticleToUser(this.props.currentArticle)}
              >Save to my Map
           </button>)
  }

}


  render() {
    console.log("user articles in article details render", this.props.userArticles)
    return (
      <div className="article-details-mini">
        <h4>{this.props.currentArticle.title}</h4>
        <p>{this.props.currentArticle.description}</p>
        {this.buttonDisplay()}
        {/* <img alt="grubstreet logo" src="grubstreet.png"/>
        <p>Thank you to Grubstreet for the delicious photos and scintillating writeups.</p> */}

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

export default connect(mapStateToProps,{saveArticleToUser, removeArticleFromUser })(ArticleDetails);
