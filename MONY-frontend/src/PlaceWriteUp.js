import React, { Component } from 'react';
import { } from './actions'
import {connect} from "react-redux"

class PlaceWriteUp extends Component {
  render() {
    return (
      <div className="place-write-up">
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
