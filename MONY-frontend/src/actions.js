
import Geocode from "react-geocode";
let APIkey = "AIzaSyDOntKeg8k4VUKehDAFrH2GkGHr_mhJh28"


export let changeCurrentArticle = (article) => {
  return {
    type:"CHANGE_CURRENT_ARTICLE",
    payload: article
  }
}

export let changeSearchTerm = (event) => {
  return {
    type:"CHANGE_SEARCH_TERM",
    payload:event.target.value
  }
}

export let changeUserMapView = () => {
  return {
      type:"CHANGE_USER_MAP_VIEW"
  }
}

export function fetchArticles() {
  return function (dispatch){
    fetch("http://localhost:3000/articles")
    .then(response => response.json())
    .then(data => {
      dispatch({type:"SAVE_ARTICLES", payload:data})
    })
  }
}


export function fetchCurrentPlaces(article) {
  return function (dispatch){
    fetch(`http://localhost:3000/article/${article.id}/places`)
   .then(response => response.json())
   .then(data => {
     console.log("data after fetch,", data)
     return data.map(place => {
       console.log("in props mapping-place", place)
       let formattedAddress = place.address.replace(/ /g,"+")
       return fetchGeocode(place)
     })
    })
    .then(data => {
      Promise.all(data).then(data2 => dispatch({type:"SAVE_CURRENT_PLACES", payload:data2}))
    })
  }
}

export function fetchGeocode(place) {
  console.log("fetchgeocode-place", place)
  let formattedAddress = place.address.replace(/ /g,"+")
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${APIkey}`)
  .then(response=>response.json())
  .then(data => {
    console.log("place from fetch geocode", data)
    place.address = data.results[0].formatted_address
    place.latitude = data.results[0].geometry.location.lat
    place.longitude = data.results[0].geometry.location.lng
    saveGeocode(place)
    return place
  })
}

export function saveGeocode(place) {
  console.log("save geocode place", place)
  fetch(`http://localhost:3000/places/${place.id}`, {
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      address:place.address,
      latitude:place.latitude,
      longitude:place.longitude
      })
  })
    .then(data => console.log("save geocode",data))

}


export function fetchPlaces() {
  return function (dispatch){
    fetch("http://localhost:3000/places")
    .then(response => response.json())
    .then(data => {
      dispatch({type:"SAVE_PLACES", payload:data})
    })
  }
}

export let saveArticleToUser = (article) => {
  return {
    type:"SAVE_ARTICLE_TO_USER",
    payload:article
  }
}
