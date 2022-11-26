import Map from './Map';
import Marker from './Marker';
import { Wrapper } from "@googlemaps/react-wrapper";
import { Box, CircularProgress } from '@mui/material';
import { useContext } from 'react';
import { MapContext } from '../contexts/Map';

const MapWrapper = () => {

    const [state, dispatch] = useContext(MapContext);

    return (
        <Box sx={{
            hegiht: "100%",
            flex: "1", 
            padding: '0', 
            margin: '0',
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Wrapper libraries={["places"]} apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""} render={() => <CircularProgress size={100} />} >
                <Map center={{ lat: state?.userLat, lng: state?.userLong }} zoom={15} style={{ height: '100%', width: '100%', padding: '0', margin: '0' }}>
                    <Marker icon={{
                                path: window.google?.maps.SymbolPath.CIRCLE,
                                scale: 10,
                                fillOpacity: 1,
                                strokeWeight: 2,
                                fillColor: '#5384ED',
                                strokeColor: '#ffffff',
                            }} position={{ lat: state?.userLat, lng: state?.userLong }} />
                    {state.places.map((place: google.maps.places.PlaceResult) => 
                                        <Marker key={place.place_id} position={place?.geometry?.location} 
                                            label={{
                                                fontSize: "10pt",
                                                fontWeight: "bold",
                                                text: place?.name.charAt(0),
                                                color: 'white'
                                            }}/>)}
                </Map>
            </Wrapper>
        </Box>
    )
}

export default MapWrapper