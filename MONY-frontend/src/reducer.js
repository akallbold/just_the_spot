const defaultState = {
  allArticles: [],
  allPlaces:[],
  articleSearchArray:[],
  currentArticle: false,
  currentPlaces:[],
  login:"",
  searchTerm: "",
  user:{},
  userArticles: [],
  userMapView: false,
  userPlaces: []
}

const monyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_CURRENT_ARTICLE":
      return {...state,currentArticle:action.payload, userMapView:false}
    case "CHANGE_CURRENT_PLACES":
      return {...state,currentPlaces:action.payload}
    case "CHANGE_SEARCH_TERM":
      return {...state, searchTerm:action.payload}
    case "CHANGE_USER":
      return {...state, user:action.payload}
    case "CHANGE_USER_MAP_VIEW":
      return {...state, userMapView:!state.userMapView}
    case "GO_HOME":
      return {...state, userMapView:false, currentArticle:false, searchTerm:""}
    case "LOGOUT":
      return {...state, user:{}}
    case "SET_CURRENT_USER":
      return {...state, user:action.payload.user}
    case "REMOVE_CURRENT_ARTICLE":
      return {...state, currentArticle:""}
    case "REMOVE_ARTICLE_FROM_USER_FROM_PREVIEW":
      let arrayWithoutArticle = state.userArticles.filter(articleObj => {
        return articleObj.id !== action.payload.id
      })
      let userPlacesArray = state.userPlaces.filter(place => {
        return place.article_id !== action.payload.id
      })
        return {...state, userArticles:arrayWithoutArticle, userPlaces:userPlacesArray}
    case "REMOVE_ARTICLE_FROM_USER":
    let arrayWithoutArticle2 = state.userArticles.filter(articleObj => {
      return articleObj.id !== action.payload.id
    })
    let userPlacesArray2 = state.userPlaces.filter(place => {
      return place.article_id !== action.payload.id
    })
      return {...state, userArticles:arrayWithoutArticle2, userPlaces: userPlacesArray2}
    case "SAVE_ARTICLES":
      return {...state, allArticles:action.payload}
    case "SAVE_ARTICLE_TO_USER":
    let relevantArray = state.userPlaces.concat(state.currentPlaces)
      return {...state, userArticles:[...state.userArticles, action.payload],
                        userPlaces:relevantArray}
    case "SAVE_ARTICLE_TO_USER_FROM_PREVIEW":
      let articlePlaces = state.allPlaces.filter(place => {
      return place.article_id === action.payload.id
    })
    let relevantArray2 = state.userPlaces.concat(articlePlaces)
      return {...state, userArticles:[...state.userArticles, action.payload], userPlaces:relevantArray2}
    case "SAVE_CURRENT_PLACES":
      return {...state, currentPlaces:action.payload}
    case "SAVE_PLACES":
      return {...state, allPlaces:action.payload}
    case "SAVE_PLACES_TO_USER":
      return {...state, userPlaces:[...state.userPlaces,state.currentPlaces]}
    case "SAVE_USER_ARTICLES":
      return {...state, userArticles:[...state.userArticles,state.currentArticle]}
    case "SAVE_USER_PLACES":
      return {...state, userPlaces:action.payload}
      case "UPDATE_ARTICLE_SEARCH_ARRAY":
        return {...state, articleSearchArray:action.payload}
    default:
      return state
  }
}

export default monyReducer
