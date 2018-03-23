const defaultState = {
  allArticles: [],
  allPlaces:[],
  currentArticle: "",
  currentPlaces:[],
  searchTerm: "",

  user:{name:"anna", id:1},
  userArticles: [],
  userMapView: false,
  userPlaces: []
}

const monyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_CURRENT_ARTICLE":
      return {...state,currentArticle:action.payload}
    case "CHANGE_CURRENT_PLACES":
      return {...state,currentPlaces:action.payload}
    case "CHANGE_SEARCH_TERM":
      return {...state, searchTerm:action.payload}
    case "CHANGE_USER_MAP_VIEW":
      return {...state, userMapView:!state.userMapView}
    case "REMOVE_CURRENT_ARTICLE":
      return {...state, currentArticle:""}
    case "SAVE_ARTICLES":
      return {...state, allArticles:action.payload}
    case "SAVE_ARTICLE_TO_USER":
      return {...state, userArticles:state.userArticles.push(state.currentArticle)}
    case "SAVE_CURRENT_PLACES":
      return {...state, currentPlaces:action.payload}
    case "SAVE_PLACES":
      return {...state, allPlaces:action.payload}
    case "SAVE_PLACES_TO_USER":
      return {...state, userPlaces:[...state.userPlaces,state.currentPlaces]}
    default:
      return state
  }

}

export default monyReducer
