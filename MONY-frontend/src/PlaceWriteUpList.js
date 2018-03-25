import React, { Component } from 'react';
import {connect} from "react-redux"
import { } from './actions'
import PlaceWriteUp from './PlaceWriteUp'

class PlaceWriteUpList extends Component {

createPlaceWriteUpElements = () => {
  return this.props.currentPlaces.map(place => {
    return <PlaceWriteUp place={place}/>
  })
}

  render() {
    console.log("props in placewrite uplist", this.props)
    return (
      <div className="place-write-up-list">
        <PlaceWriteUp/>
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

export default connect(mapStateToProps,{})(PlaceWriteUpList);
