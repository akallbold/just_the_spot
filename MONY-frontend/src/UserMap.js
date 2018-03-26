import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

let APIkey = "AIzaSyDOntKeg8k4VUKehDAFrH2GkGHr_mhJh28"

class UserMap extends Component {

  state={
    showingInfoWindow:false,
    selectedPlace:{},
    activeMarker:{}
  }

display = () => {
  // console.log("userARticles in display", this.props.userArticles)
  // debugger
  if (this.props.userPlaces.length==0){
    return (
      <div className="empty-user-map-container">
        <span className="go-back-btn">
          <h1>You don't have any places saved to your map.</h1>
          <img className="usermap-woman"src="woman2.png"/>
          <button className="usermap-btn" onClick={this.props.goHome}>Add Some!</button>
        </span>
      </div>)
  } else {
    console.log("userplaces in display",this.props.userPlaces)
    return(
      <div className="user-map-container">
        <h1>My Map!</h1>
      {/* <Map
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
      </Map> */}
      <button className="usermap-btn" onClick={this.props.goHome}>Add More Places!</button>
      <h4>My Articles</h4>
      {this.createArticleList()}
      <h4>My Places</h4>
      {this.createPlaceList()}
    </div>
    )
  }
}

handleInfoMarker = (place,marker) => {
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
    return this.props.userArticles.map(article => {
      return <p key={article.id} onClick={()=>this.props.changeCurrentArticle(article)}> {article.title} </p>
    })
  }
  //
  createPlaceList = () => {
    return this.props.userPlaces.map(place => {
      return <p key={place.id}> {place.name} </p>
    })
  }



  render() {
    (console.log("currentarticle", this.props.currentArticle))
    return (
      <div >
       <div >
          {/* <Map
           google={this.props.google}
           initialCenter={{lat:40.730610,lng:-73.935242}}
           style={{ width: "75%", height: "75%", position: "relative" }}
           className={"map"}
           zoom={13}> */}
           {this.display()}
          {/* </Map> */}
          {/* {this.createArticleList()}
          {this.createPlaceList()} */}
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
