import React, { Component } from 'react';
import {connect} from "react-redux"
import {changeSearchTerm, changeUserMapView} from "./actions"

class SearchPanel extends Component {


  render() {
    return (

      <div className="search-bar">
        <span className="view-usermap-btn">
          <button  onClick={this.props.changeUserMapView}>View my Map!</button>
        </span>
        <h1 className="or-text">OR</h1>
        <span className="search-form">
          <form>
            <input className="search-input" type="text" value={this.props.searchTerm} onChange={this.props.changeSearchTerm}
            placeholder="Search"/>
          </form>
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
