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


export default connect(mapStateToProps, {})(PlaceList);
