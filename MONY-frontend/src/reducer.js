const defaultState = {
  allArticles: [],
  allPlaces:[],
  currentArticle: false,
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
    console.log("in change current article reducer")
      return {...state,currentArticle:action.payload}
    case "CHANGE_CURRENT_PLACES":
      console.log("in change current places reducer")
      return {...state,currentPlaces:action.payload}
    case "CHANGE_SEARCH_TERM":
      return {...state, searchTerm:action.payload}
    case "CHANGE_USER":
      return {...state, user:action.payload}
    case "CHANGE_USER_MAP_VIEW":
      return {...state, userMapView:!state.userMapView}
    case "GO_HOME":
      return {...state, userMapView:false, currentArticle:false}
    case "REMOVE_CURRENT_ARTICLE":
      return {...state, currentArticle:""}
      case "REMOVE_ARTICLE_FROM_USER":
        return {...state, userArticles:action.payload}
    case "SAVE_ARTICLES":
      return {...state, allArticles:action.payload}
    case "SAVE_ARTICLE_TO_USER":
      console.log("in save article to user reducer")
      return {...state, userArticles:[...state.userArticles, action.payload]}
    case "SAVE_CURRENT_PLACES":
      return {...state, currentPlaces:action.payload}
    case "SAVE_PLACES":
      return {...state, allPlaces:action.payload}
    case "SAVE_PLACES_TO_USER":
      return {...state, userPlaces:[...state.userPlaces,state.currentPlaces]}
    case "SAVE_USER_ARTICLES":
    console.log("in save user articles reducer")
      return {...state, userArticles:[...state.userArticles,state.currentArticle]}
    case "SAVE_USER_PLACES":
      return {...state, userPlaces:action.payload}
    default:
      return state
  }

}

export default monyReducer
