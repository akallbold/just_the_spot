import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Geocode from "react-geocode";
let APIkey = "AIzaSyDOntKeg8k4VUKehDAFrH2GkGHr_mhJh28"

class Maps extends Component {

  state = {
    currentPlaces:[],
    updatedPlaces:[]
  }

  componentDidMount = () => {
    this.fetchCurrentPlaces(this.props.currentArticle)
  }

  updateInfo = () => {
    this.state.currentPlaces.map(place => {
       this.getGeocode(place)
    })
  }

  createMarkers = () => {
    return this.state.updatedPlaces.map(place => {
       return <Marker
                title={`title ${place.name}`}
                name={`name ${place.name}`}
                position={{lat:place.latitude,lng:place.longitude}}
              />
    })
  }

  fetchCurrentPlaces = (article) => {
    fetch(`http://localhost:3000/article/${article.id}/places`)
   .then(response => response.json())
   .then(data => {
    this.setState({currentPlaces:data}, () => this.updateInfo())
    })
  }

  getGeocode = (place) => {
    let formattedAddress = place.address.replace(/ /g,"+")
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${APIkey}`)
    .then(response=>response.json())
    .then(data => {
      place.address = data.results[0].formatted_address
      place.latitude = data.results[0].geometry.location.lat
      place.longitude = data.results[0].geometry.location.lng
      this.saveGeocode(place)
    })
  }

  handleSaveUpdatedPlacetoUser = (places) => {
    this.props.updateUserPlaces(this.state.updatedPlaces)
  }

  saveGeocode = (place) => {
    fetch(`http://localhost:3000/places/${place.id}`, {
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        address:place.address,
        latitude:place.latitude,
        longitude:place.longitude
        })
    }).then(response => response.json())
     .then(data => {
      this.setState({updatedPlaces:[...this.state.updatedPlaces, data]})
    })
  }

  saveMapToUser = (place) => {
    fetch(`http://localhost:3000/users/${this.props.user.id}/places`, {
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: this.props.user.id,
        place_id:place.id
        })
    }).then(response => response.json())
      .then(data => this.handleSaveUpdatedPlacetoUser(data))
  }

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

  handleClick = () => {
    this.state.updatedPlaces.map(place => {
      this.saveMapToUser(place)
    })
    this.props.changeUserMapView()
  }


  render() {
    return (
       <div className="right-panel">
         <div className="map">
           <Map
             google={this.props.google}
             initialCenter={{lat:40.730610,lng:-73.935242}}
             style={{ width: "25%", height: "45%", position: "relative" }}
             className={"map"}
             zoom={10}>
              {this.createMarkers()}
            </Map>
        </div>
        <button onClick= {this.handleClick} className="save-button" value="Save Map">Save Map</button>
      </div>
    )
  }

}

export default GoogleApiWrapper({apiKey:APIkey})(Maps)
