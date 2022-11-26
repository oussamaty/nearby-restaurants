import { MapAction, MapReducer, MapState } from "./interface";

export const initialState = {
  map: null,
  userLat: 59.3293,
  userLong: 18.0686, 
  pan: false,
  service: null,
  search: false,
  places: [],
  radius: 10
};

export const reducer: MapReducer = (state: MapState, action: MapAction) => {
    switch (action.type) {
      case "updateLocation":
        return {
          ...state,
          userLat: action.userLat,
          userLong: action.userLong,
          pan: false
        }
    
      case "loadMap":
        const service = new google.maps.places.PlacesService(action.map!);
        return {
            ...state,
            map: action.map,
            service: service
        }
      
      case "panToUser":
        return {
          ...state,
          pan: true
        }
      
      case "searchNearby":
        return {
          ...state,
          search: true
        }
      
      case "updatePlaces":
        return {
          ...state,
          places: action.places,
          search: false
        }
      
      case "updateRadius":
        return {
          ...state,
          radius: action.radius
        }

      default:
        return state
    }
  }