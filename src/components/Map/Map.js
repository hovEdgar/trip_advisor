import GoogleMapReact from 'google-map-react';
import {useMediaQuery, Typography, Paper} from "@mui/material";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {Rating} from "@mui/material";

import classes from "./Map.module.css";

const Map = () => {
    const isMobile = useMediaQuery("(min-with: 600px)")

    const coordinates = { lat: 0, lng: 0}

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBVIAIavDNWWcZPaBChFW8JPjpAyl2fLbk" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={() => {}}
                onChildClick={() => {}}
            >

            </GoogleMapReact>
        </div>
    );
};

export default Map;