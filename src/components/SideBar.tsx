import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import DistanceSlider from "./DistanceSlider";
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext } from "react";
import { MapContext } from "../contexts/Map";
import PlaceCard from "./PlaceCard";

const SideBar = () => {

    const [state, dispatch] = useContext(MapContext);

    return (
        <Box sx={{ 
            flex: '1',
            maxHeight: '100vh', 
            padding: '10px', 
            margin: '0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            overflow: 'scroll'
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '95%',
                minHeight: '100px',
                padding: '0px 10px',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'primary.main',
                borderWidth: '0.5px',
                borderStyle: 'solid',
                borderRadius: '5px',
                '&:hover': {
                    borderWidth: '1px',
                },
            }}>
                <DistanceSlider 
                    aria-label="distance slider"
                    valueLabelDisplay="on"
                    max={100}
                    min={1}
                    step={1}
                    value={state?.radius}
                    onChange={(ev, newValue) => {
                            const value = Array.isArray(newValue) ? newValue[0] : newValue;
                            dispatch({ type: "updateRadius", radius: value })
                        }
                    }
                    sx={{
                        marginRight: '15px',
                        transform: 'translateY(40%)',
                    }}
                />
                <Button
                    variant="contained"
                    sx={{
                        width: '45px',
                        height: '45px',
                        marginRight: '15px'
                    }}
                    onClick={() => dispatch({ type: "searchNearby" })}>
                    <SearchOutlinedIcon />
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        width: '45px',
                        height: '45px',
                    }}
                    onClick={() => dispatch({ type: "panToUser" })}>
                    <MyLocationOutlinedIcon />
                </Button>
            </Box>
            <Box sx={{
                flexGrow: '1',
                width: '100%',
                padding: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: "center",

            }}>
                {state.search?
                    <CircularProgress size={100} /> :
                    state.places.length > 0?
                        <Grid container spacing={2}>
                            { state.places.map((place) => 
                                <Grid item key={place.place_id} xs={6}>
                                    <PlaceCard place={place} />
                                </Grid>
                                )}
                        </Grid> : 
                        <Typography variant="h5" component="div">
                            Click on the search button
                        </Typography>
                    }
            </Box>
        </Box>
    )
}

export default SideBar;