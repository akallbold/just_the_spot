
import API_KEY from "./config.js"


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

export let changeUser = (user) => {
  return {
    type:"CHANGE_USER",
    payload: user
  }
}

export let goHome = () => {
  return {
    type:"GO_HOME"
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

export function fetchCurrentUser() {
  return function (dispatch){
    fetch(`http://localhost:3000/decode`, {
      method:"POST",
      headers:{ "Content-Type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem("token")
      })
    }).then(response => response.json())
      .then(data=>{
        dispatch({type:"SET_CURRENT_USER", payload:data})
      })
  }
}


export function fetchLogin(username,password) {
  return function (dispatch){
    fetch(`http://localhost:3000/login`, {
      method:"POST",
      headers:{ "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    }).then(response => response.json())
      .then(data=>{
        localStorage.setItem("token",data.token)
        dispatch({type:"SET_CURRENT_USER", payload:data})
      })
  }
}

export function fetchCurrentPlaces(article) {
  return function (dispatch){
    fetch(`http://localhost:3000/article/${article.id}/places`)
   .then(response => response.json())
   .then(data => {
     return data.map(place => {
       return fetchGeocode(place)
     })
    })
    .then(data => {
      Promise.all(data).then(data2 => dispatch({type:"SAVE_CURRENT_PLACES", payload:data2}))
    })
  }
}

export function fetchGeocode(place) {
  let formattedAddress = place.address.replace(/ /g,"+")
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${API_KEY}`)
  .then(response=>response.json())
  .then(data => {
    place.address = data.results[0].formatted_address
    place.latitude = data.results[0].geometry.location.lat
    place.longitude = data.results[0].geometry.location.lng
    saveGeocode(place)
    return place
  })
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

export function fetchSaveArticleToUser(article) {
  return function (dispatch){
    fetch(`http://localhost:3000/users/1/articles`, {
      method:"POST",
      headers:{ "Content-Type": "application/json" },
      body: JSON.stringify({
        article_id:article.id
        })
    })
   .then(response => response.json())
   .then(data => {
     dispatch({type:"SAVE_USER_ARTICLES"})
     dispatch({type:"SAVE_PLACES_TO_USER"})
   })
 }
}

export let logOut = () => {
  localStorage.clear()
  return {
    type:"LOGOUT"
  }
}

export let articleArray = () => {
  let relevantArticles = this.props.allArticles.filter(article => {
    return article.title.toUpperCase().includes(this.props.searchTerm.toUpperCase())
  })
  let relevantArticlesArray = this.placesArray().map(place=>{
    this.findArticleForPlace(place)
  })
  let displayArticles = relevantArticles.concat(relevantArticlesArray)
  return {
    type:"UPDATE_ARTICLE_SEARCH_ARRAY", payload:displayArticles
  }
}

export let findArticleForPlace = (place) => {
  return this.props.allArticles.filter(article => {
    return article.id === place.article_id
  })
}

export let placesArray = () => {
  let relevantLists = this.props.allPlaces.filter(place => {
    return place.name.toUpperCase().includes(this.props.searchTerm.toUpperCase())
  })
}


export let removeArticleFromUserFromPreview = (article) => {
  return {
    type:"REMOVE_ARTICLE_FROM_USER_FROM_PREVIEW",
    payload:article
  }
}

export let removeArticleFromUser = (article) => {
  return {
    type:"REMOVE_ARTICLE_FROM_USER",
    payload:article
  }
}

export let saveArticleToUserFromPreview = (article) => {
  return {
    type:"SAVE_ARTICLE_TO_USER_FROM_PREVIEW",
    payload:article
  }
}

export let saveArticleToUser = (article) => {
  return {
    type:"SAVE_ARTICLE_TO_USER",
    payload:article
  }
}

export function saveGeocode(place) {
  fetch(`http://localhost:3000/places/${place.id}`, {
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      address:place.address,
      latitude:place.latitude,
      longitude:place.longitude
      })
  })
}

export let savePlacesToUser = () => {
  return {
    type:"SAVE_PLACES_TO_USER"
  }
}

export let saveStuffToUser = (article,places) => {
  saveArticleToUser(article)
  savePlacesToUser(places)
}
