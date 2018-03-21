import React, { Component } from 'react';

class SearchPanel extends Component {

  handleOnChange = (event) => {
    this.props.updateSearchTerm(event.target.value)
  }

  handleViewMyMap = () => {
    this.props.changeUserMapView()
  }

  render() {
    return (
      <div className="left-panel search">
        <p>{`Hello ${this.props.user}`}</p>
        <p>Find the best spots in New York City!</p>

        <p>Search by list or place below...</p>

        <p>Or browse the lists to the right</p>



        <form className="search-form">
          <label>Search</label>
          <input type="text" value={this.props.searchTerm} onChange={this.handleOnChange}/>
        </form>
        <button onClick={this.handleViewMyMap}>View my Map!</button>
      </div>
    );
  }
}

export default SearchPanel;
