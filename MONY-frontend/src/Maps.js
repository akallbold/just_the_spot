import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Geocode from "react-geocode";


let APIkey = "AIzaSyDOntKeg8k4VUKehDAFrH2GkGHr_mhJh28"


class Maps extends React.Component {

  state={
    showingInfoWindow:false,
    selectedPlace:{},
    activeMarker:{}
  }

  componentDidMount(){
    this.props.fetchCurrentPlaces(this.props.currentArticle)
  }

  handleInfoMarker = (place) => {
    console.log("in handleinfo marker")
    debugger
      // this.setState({activeMarker:event.target})
      this.setState({showingInfoWindow:!this.state.showingInfoWindow})
      this.setState({selectedPlace:place})
  }

  createMarkers = () => {
    // console.log("In createMarkers")
    return this.props.currentPlaces.map(place => {
       return <Marker
                key={place.id}
                title={`title ${place.name}`}
                name={`name ${place.name}`}
                position={{lat:place.latitude,lng:place.longitude}}
                onClick={() => this.handleInfoMarker(place)}
              />
    })
  }



  // handleSaveUpdatedPlacetoUser = (places) => {
  //   this.props.updateUserPlaces(this.state.updatedPlaces)
  // }


  //
  // saveMapToUser = (place) => {
  //   fetch(`http://localhost:3000/users/${this.props.user.id}/places`, {
  //     method:"POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       user_id: this.props.user.id,
  //       place_id:place.id
  //       })
  //   }).then(response => response.json())
  //     .then(data => this.handleSaveUpdatedPlacetoUser(data))
  // }

  // removeMapFromUser = (place) => {
  //   console.log("in remove map from user")
  //   fetch(`http://localhost:3000/users/${this.props.user.id}/places`, {
  //     method:"DELETE",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       user_id: this.props.user.id,
  //       place_id:place.id
  //       })
  //   }).then(response => response.json())
  //    .then(data => {
  //     console.log("response for removeMapFromUser",data)
  //   })
  // }

  // handleClick = () => {
  //   this.state.updatedPlaces.map(place => {
  //     this.saveMapToUser(place)
  //   })
  //   this.props.changeUserMapView()
  // }


  render() {
    console.log("current places",this.props.currentPlaces)
    return (

       <div className="right-panel">
         <div className="map">
           <Map
             google={this.props.google}
             initialCenter={this.props.currentPlaces.length>0 ?
               {lat:this.props.currentPlaces[0].latitude,lng:this.props.currentPlaces[0].latitude} : {lat:40.730610,lng:-73.935242}}
             style={{ width: "100%", height: "100%", position: "relative" }}
             className={"map"}
             zoom={12}
           >
              {this.createMarkers()}
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
              </InfoWindow>
           </Map>
        </div>
        <button onClick= {()=>this.props.savePlacesToUser(this.props.currentPlaces)} className="save-button" value="Save Map">Save Map</button>
      </div>
    )
  }

}


export default GoogleApiWrapper({
apiKey:APIkey
})(Maps)
// const WrappedContainers =
// GoogleApiWrapper({apiKey:APIkey})
// export default (Maps)
// export const WrappedContainers = connect(mapStateToProps)(GoogleApiWrapper({
// apiKey:APIkey}))(Maps)
