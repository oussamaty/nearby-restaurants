import { Card, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import MapIcon from '@mui/icons-material/Map';
import { useContext } from "react";
import { MapContext } from "../contexts/Map";

interface PlaceCardProps {
    place: google.maps.places.PlaceResult,
}
const PlaceCard = ({ place }: PlaceCardProps) => {

    const [state, dispatch] = useContext(MapContext);

    return (
        <Card sx={{ height: '350px'}} onClick={() => {
                    if (state.map && place.geometry?.location){
                        state.map?.setZoom(17);
                        state.map?.panTo(place.geometry?.location);
                    }
                }
            }>
            <CardMedia
                component="img"
                height="200"
                image={place.photos ? place.photos[0].getUrl({maxWidth: 300, maxHeight: 300}): place.icon}
                alt={place.name}
            />
            <CardContent sx={{
                    height: "120px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly"
                }}>
                <Typography noWrap variant="h5" component="div" fontWeight={"bold"}>
                    {place.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Rating name="read-only" value={place.rating} precision={0.1} readOnly sx={{ marginRight: '5px' }} />
                    <span>({place.user_ratings_total})</span> 
                </Typography>
                <Typography noWrap variant="body2" color="text.secondary" sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <MapIcon sx={{ marginRight: '5px' }} />
                    <span >{place.vicinity}</span> 
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PlaceCard;