import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";
import API_KEY from "../config"

class UserMap extends Component {

  state={
    showingInfoWindow:false,
    selectedPlace:{},
    activeMarker:{}
  }

  componentDidMount = () => {
    window.scrollTo(0,0)
  }

  display = () => {
    if (this.props.userPlaces.length==0){
      return (
        <div>
            <div className="nav" onClick={this.props.goHome}>
              <img className="logo" alt="logo" src="logo.png"/>
              <img  src="logout.png" onClick={this.props.logOut}/>
            </div>
          <div className="empty-user-map-container">
            <div className="left-panel-user-map">
              <img className="usermap-img"src="pina.png"/>
            </div>
            <div className="right-panel-user-map">
              <h1>You don't have any places saved to your map.</h1>
              <span >
                <button className="btn" onClick={this.props.goHome}>add some</button>
              </span>
            </div>
          </div>
        </div>)
    } else {
      return(
        <div>
            <div className="nav" onClick={this.props.goHome}>
            <img className="logo" alt="logo" src="logo.png"/>
            </div>
          <div className="user-map-container">
            <div className="user-map">
              <p>My Map</p>
              <button className="btn user-map-add-places" onClick={this.props.goHome}>Add More Places!</button>
              <Map
                google={this.props.google}
                initialCenter={this.props.userPlaces.length>0 ?
                  {lat:this.props.userPlaces[0].latitude,lng:this.props.userPlaces[0].longitude} : {lat:40.730610,lng:-73.935242}}
                style={{ width: "75%", height: "75%", position: "relative" }}
                className={"map-in-user"}
                onClick={this.onMapClicked}
                zoom={11}>
                {this.createMarkers()}
                <InfoWindow
                 marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}>
                  <div>
                    <h6>{this.state.selectedPlace.name}</h6>
                  </div>
                </InfoWindow>
              </Map>
            </div>
            <div className="my-articles-list">
              <p>My Articles</p>
              {this.createArticleList()}
            </div>
            <div className="my-places-list">
              <p>My Places</p>
              {this.createPlaceList()}
            </div>
          </div>
        </div>
      )
    }
  }

  onMarkerClick = (props, marker, e) =>{
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  handleInfoMarker = (place, marker) => {
      this.setState({showingInfoWindow:!this.state.showingInfoWindow,
                     selectedPlace:place,
                     activeMarker:marker})
  }

  createMarkers = () => {
    return this.props.userPlaces.map(place => {
       return <Marker
                key={place.id}
                name={place.name}
                position={{lat:place.latitude,lng:place.longitude}}
                onClick={this.onMarkerClick}
              />
    })
  }

  createArticleList = () => {
    return this.props.userArticles.map(article => {
      return <h4 key={article.id} onClick={()=>this.props.changeCurrentArticle(article)}> {article.title} </h4>
    })
  }

  createPlaceList = () => {
    return this.props.userPlaces.map(place => {
      return <h4 key={place.id}> {place.name} </h4>
    })
  }

  render() {
    return (
      <div >
       <div >
          {this.display()}
        </div>
      </div>
    );}
  }


export default GoogleApiWrapper({
apiKey:APIkey
})(UserMap)
