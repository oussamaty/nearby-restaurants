import React, { useReducer } from "react"
import { MapProviderProps, MapContextInterface } from "./interface";
import { reducer, initialState } from "./reducer";

export const MapContext = React.createContext<MapContextInterface>([
  initialState,
  () => null
])

export const MapProvider = ({ children }: MapProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <MapContext.Provider value={[state, dispatch]}>
    	{ children }
    </MapContext.Provider>
  )
}