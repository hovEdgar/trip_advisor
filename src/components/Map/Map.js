import GoogleMapReact from 'google-map-react';
import {useMediaQuery, Typography, Paper} from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {Rating} from "@mui/material";

import classes from "./Map.module.css";

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) => {
    const isMobile = useMediaQuery("(min-with: 600px)");

    {/* you need to use API key on public/index.html file too in script with source of "google"*/}
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: "AIzaSyBVIAIavDNWWcZPaBChFW8JPjpAyl2fLbk"}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={(e) => {
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({sw: e.marginBounds.sw, ne: e.marginBounds.ne });
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {places?.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {isMobile ? (
                            <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                        ) : (
                            <Paper elevation={3} className={classes.paper}>
                                <Typography className={classes.typography}>
                                    {place?.name}
                                </Typography>
                                <img
                                    alt={place?.name}
                                    className={classes.pointer}
                                    src={place.photo ? place.photo.images?.medium.url : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"}
                                />
                                <Rating size="small" value={+place?.rating} readOnly/>
                            </Paper>
                        )}
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};

export default Map;