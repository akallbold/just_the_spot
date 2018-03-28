
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
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${APIkey}`)
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

export function fetchSavePlacesToUser(user_id) {
//   console.log("in fetchsaveplacestouser")
//   return function (dispatch){
//     fetch(`http://localhost:3000/users/1/places`)
//     .then(response => response.json())
//     .then(data => {
//       console.log("data",data)
//       dispatch({type:"SAVE_USER_PLACES", payload:data})
//     })
//   }
}

export let findArticleForPlace = (selectPlace, allArticles) => {
  return allArticles.find(article => {
    return selectPlace.article_id == article.id
  })
}

export let logOut = () => {
  localStorage.clear()
  return {
    type:"LOGOUT"
  }
}

export let removeArticleFromUser = (articleArray) => {
  return {
    type:"REMOVE_ARTICLE_FROM_USER",
    payload:articleArray
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
