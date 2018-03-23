import React, { Component } from 'react';
import {connect} from "react-redux"
import {changeSearchTerm, changeUserMapView} from "./actions"

class SearchPanel extends Component {


  render() {
    return (

      <div className="left-panel search">
        <p>{`Hello ${this.props.user.name}`}</p>




        <form className="search-form">
          <label>Search</label>
          <input type="text" value={this.props.searchTerm} onChange={this.props.changeSearchTerm}/>
        </form>
        <button onClick={this.props.changeUserMapView}>View my Map!</button>
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
