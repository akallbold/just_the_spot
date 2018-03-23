import React, { Component } from 'react';
import {connect} from "react-redux"
import {changeCurrentArticle} from './actions'

class PlaceList extends Component {

  createElements = () => {
    console.log("create elements",this.props)
    // debugger
    if (this.props.allPlaces.length>0)
    {let relevantPlaces = this.props.allPlaces.filter(place => {
      console.log("place", place)
      return place.name.toUpperCase().includes(this.props.searchTerm.toUpperCase())
    })
    return relevantPlaces.map(place => {
      return(
        <div>
          <a className= "place"
            key={place.id}>{place.name}</a>
        </div>
      )
    })}
  }


  render() {
console.log("render props",this.props)
    return (
      <div className="title-list">
        <p>Place List</p>
        {this.createElements()}
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
  }
}

// const mapDispatchtoProps = (dispatch) => {
//   return {dispatchChangeCurrentArticle: (article) => dispatch(changeCurrentArticle)}
// }

export default connect(mapStateToProps, {changeCurrentArticle})(PlaceList);
