export const Types = {
  SET_RESTAURANTS: 'restaurants/SET_RESTAURANTS',
  SET_SELECTED_RESTAURANT: 'restaurants/SET_SELECTED_RESTAURANT',
}

const initialState = {
  restaurants: [],
  selectedRestaurant: [],
}

export default function reducer(state=initialState, action){
  switch (action.type){
    case Types.SET_RESTAURANTS:
      return {...state, restaurants: action.payload}
    case Types.SET_SELECTED_RESTAURANT:
      return {...state, selectedRestaurant: action.payload}
    default:
      return state
  }
}

export function setRestaurants(restaurants){
  return{
    type: Types.SET_RESTAURANTS,
    payload: restaurants,
  }
}

export function setSelectedRestaurant(restaurant){
  return{
    type: Types.SET_SELECTED_RESTAURANT,
    payload: restaurant,
  }
}