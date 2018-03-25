import React, { Component } from 'react';
import {connect} from "react-redux"
import {changeSearchTerm, changeUserMapView} from "./actions"

class SearchPanel extends Component {


  render() {
    return (

      <div className="search-bar">
        <p>searchbarcontainter</p>
        <span className="search-bar-text">
          <h4>Search for a "Best of" list or by Place</h4>
        </span>

        <span className="search-form">
          <form>
            <input className="search-form" type="text" value={this.props.searchTerm} onChange={this.props.changeSearchTerm}/>
          </form>
        </span>
        <span className="view-usermap-btn">
          <button  onClick={this.props.changeUserMapView}>View my Map!</button>
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      searchTerm: state.searchTerm,
      userMapView: state.userMapView,
      user:state.user
  }
}

export default connect(mapStateToProps, {changeSearchTerm, changeUserMapView})(SearchPanel);
