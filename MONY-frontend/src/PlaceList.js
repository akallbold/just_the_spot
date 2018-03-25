import React, { Component } from 'react';
import {connect} from "react-redux"
import PlacePreview from './PlacePreview'

class PlaceList extends Component {

  createElements = () => {
    let relevantLists = this.props.allPlaces.filter(place => {
      return place.name.toUpperCase().includes(this.props.searchTerm.toUpperCase())
    })
    return relevantLists.map(place => {
      return(
          <PlacePreview
            key= {place.id} place= {place}/>
      )
    })
  }


  render() {

    return (
      <div className="place-preview-list">
        <p>Place List Container</p>
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

export default connect(mapStateToProps, {})(PlaceList);
