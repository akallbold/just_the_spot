import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

let APIkey = "AIzaSyDOntKeg8k4VUKehDAFrH2GkGHr_mhJh28"

class UserMap extends Component {

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

  createMarkers = () => {
    // debugger
    // console.log("props in createmarkers",this.props.userPlaces)
    if (this.props.userPlaces[0].length>0)
{    return this.props.userPlaces[0].map(place => {
      console.log("place in createmarkers",place)
       return <Marker
                title={`title ${place.name}`}
                name={`name ${place.name}`}
                position={{lat:place.latitude,lng:place.longitude}}
              />
    })}
  }



  render() {
    console.log("props",this.props)
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
          </Map>
        </div>
      </div>
    );}
  }



//  export default connect(mapStateToProps)
//  export default (GoogleApiWrapper({
//  apiKey:APIkey})
// })(UserMap)

export default GoogleApiWrapper({
apiKey:APIkey
})(UserMap)
