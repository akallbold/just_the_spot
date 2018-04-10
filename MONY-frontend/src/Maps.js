import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
let APIkey = ""


class Maps extends React.Component {

  state={
    showingInfoWindow:false,
    selectedPlace:{},
    activeMarker:{}
  }


  createMarkers = () => {
    return this.props.currentPlaces.map(place => {
       return <Marker
                key={place.id}
                name={place.name}
                position={{lat:place.latitude,lng:place.longitude}}
                onClick={this.onMarkerClick}
              />
    })
  }
  handleInfoMarker = (place, marker) => {
      this.setState({showingInfoWindow:!this.state.showingInfoWindow,
                     selectedPlace:place,
                     activeMarker:marker})
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


  render() {
    return (
       <div className="right-panel">
         <div className="map-article-view">
           <Map className={"map-in-article"}
             google={this.props.google}
             initialCenter={this.props.currentPlaces.length>0 ?
               {lat:this.props.currentPlaces[0].latitude,lng:this.props.currentPlaces[0].longitude} : {lat:40.730610,lng:-73.935242}}
             style={{ width: "100%", height: "100%", position: "relative" }}

             zoom={10}
           >
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
      </div>
    )
  }

}


export default GoogleApiWrapper({
apiKey:APIkey
})(Maps)
