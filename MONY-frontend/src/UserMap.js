import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

let APIkey = "AIzaSyDOntKeg8k4VUKehDAFrH2GkGHr_mhJh28"

class UserMap extends Component {

  state={
    showingInfoWindow:false,
    selectedPlace:{},
    activeMarker:{}
  }



handleInfoMarker = (place,marker) => {
  // debugger
    // this.setState({activeMarker:event.target})
    this.setState({showingInfoWindow:!this.state.showingInfoWindow,
                   selectedPlace:place,
                   activeMarker:marker})
}

  createMarkers = () => {
    if (this.props.userPlaces[0].length>0)
    {return this.props.userPlaces[0].map(place => {
       return <Marker
                key={place.id}
                title={`title ${place.name}`}
                name={`name ${place.name}`}
                position={{lat:place.latitude,lng:place.longitude}}
                onClick={() => this.handleInfoMarker(place,place.id)}
              />
    })}
  }

  createArticleList = () => {
    if (this.props.userArticles[0].length>0){
      return this.props.userArticles[0].map(article => {
        return <p key={article.id}> {article.name} </p>
      })
    }
  }

  createPlaceList = () => {
    if (this.props.userPlaces.length>0){
      return this.props.userPlaces.map(place => {
        return <p key={place.id}> {place.name} </p>
      })
    }
  }



  render() {
    return (
      <div >
       <div >
          <Map
           google={this.props.google}
           initialCenter={{lat:40.730610,lng:-73.935242}}
           style={{ width: "75%", height: "75%", position: "relative" }}
           className={"map"}
           zoom={13}>
            {this.createMarkers()}
            <InfoWindow
              // marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>
          </Map>
          {this.createArticleList()}
          {this.createPlaceList()}
        </div>
      </div>
    );}
  }

  // componentDidMount = () => {
  //   this.fetchUserPlaces(this.props.user)
  // }
  //
  // handleUserPlaces = (places) => {
  //   this.props.updateUserPlaces(places)
  // }

  // fetchUserPlaces = (user) => {
  //   fetch(`http://localhost:3000/users/1/places`)
  //   .then(response => response.json())
  //   .then(data => {
  //     this.handleUserPlaces(data)})
  // }

  // fetchUserArticles = (user) => {
  //   fetch(`http://localhost:3000/users/1/articles`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log("userarticlefetch",data)
  //     this.setState({userArticles:data})
  //   })
  // }
  //
  //

// populateCurrentPlaces= () => {
//   this.props.allPlaces.filter (place => {
//     place.article_id == this.props.userArticles
//   })
// }



//  export default connect(mapStateToProps)
//  export default (GoogleApiWrapper({
//  apiKey:APIkey})
// })(UserMap)

export default GoogleApiWrapper({
apiKey:APIkey
})(UserMap)
