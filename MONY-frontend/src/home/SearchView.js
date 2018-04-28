import React, { Component } from 'react';
import SearchPanel from "./SearchPanel"
import ArticleList from "./ArticleList"
import PlaceList from "./PlaceList"
import {connect} from "react-redux"


class SearchView extends Component {

  render() {
    return (
      <div className="search-view">
        {/* <p>searchviewcontainter</p> */}
        <SearchPanel/>
        <ArticleList />
        <hr/>
        <PlaceList/>
      </div>
    );
  }

}

export default
// connect(mapStateToProps, {})
(SearchView)
