import React, { Component } from 'react';
import { } from './actions'
import {connect} from "react-redux"

class PlaceWriteUp extends Component {
  render() {
    console.log("props in placewrite up", this.props)
    return (
      <div className="place-write-up">
        {/* <h3>{this.props.place.name}</h3>
        <h4>{this.props.place.address}</h4>
        <p>{this.props.place.description}</p> */}
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

export default connect(mapStateToProps,{})(PlaceWriteUp);
