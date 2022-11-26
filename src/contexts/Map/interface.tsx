import { Dispatch } from "react";

export interface MapState {
    map: google.maps.Map | null,
    service: google.maps.places.PlacesService | null,
    userLat: number,
    userLong: number,
    pan: boolean, 
    search: boolean,
    places: google.maps.places.PlaceResult[],
    radius: number
}

export interface MapAction {
    type: string,
    userLat?: number,
    userLong?: number,
    map?: google.maps.Map,
    pan?: boolean,
    search?: boolean,
    places?: google.maps.places.PlaceResult[],
    radius?: number
}

export type MapReducer = (state: MapState, action: MapAction) => any;

export interface MapProviderProps {
    children?: React.ReactNode
}

export type MapContextInterface = [
    state: MapState, 
    dispatch: Dispatch<MapAction>
]