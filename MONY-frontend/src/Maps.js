import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";


let APIkey = "AIzaSyDOntKeg8k4VUKehDAFrH2GkGHr_mhJh28"


class Maps extends React.Component {

  state={
    showingInfoWindow:false,
    selectedPlace:{},
    activeMarker:{}
  }

  // componentDidMount(){
  //   this.props.fetchCurrentPlaces(this.props.currentArticle)
  // }

  handleInfoMarker = (place,marker) => {
    // debugger
      // this.setState({activeMarker:event.target})
      this.setState({showingInfoWindow:!this.state.showingInfoWindow,
                     selectedPlace:place,
                     activeMarker:marker})
  }

  createMarkers = () => {
    // console.log("In createMarkers")
    return this.props.currentPlaces.map(place => {
       return <Marker
                key={place.id}
                // title={`title ${place.name}`}
                // name={`name ${place.name}`}
                position={{lat:place.latitude,lng:place.longitude}}
                onClick={() => this.handleInfoMarker(place,place.id)}
              />
    })
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

             zoom={12}
           >
              {this.createMarkers()}
              <InfoWindow
                visible={this.state.showingInfoWindow}>
                <div>
                  <h6>{this.state.selectedPlace.name}</h6>
                </div>
              </InfoWindow>
           </Map>
        </div>
        {/* <button onClick= {()=>this.props.fetchSaveArticleToUser(this.props.currentArticle)} className="save-button" value="Save Map">Save Map</button> */}
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
