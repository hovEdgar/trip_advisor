import {useEffect, useState} from "react";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
// import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

import {CssBaseline, Grid} from "@mui/material";
import {getPlacesData} from "./components/api";

const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});
    const [bounds, setBounds] = useState({sw: {lat: 0, lng: 0}, ne: {lat: 0, lng: 0}});
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selectType, setSelectType] = useState("restaurants");
    const [rating, setRating] = useState(0);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
        })
    }, []);

    useEffect(() => {
        setPlaces(prevState => {
            return prevState.filter(place => place.rating > rating)
        })
    }, [rating])

    useEffect(() => {
        setIsLoading(true);

        getPlacesData(selectType, bounds?.sw, bounds?.ne)
            .then((data) => {
                setPlaces(data);
                setIsLoading(false);
            });
    }, [coordinates, bounds, selectType]);

    return (
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: "100%", margin: "auto"}}>
                <Grid item xs={12} md={4} >
                    <List
                        places={places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                        selectType={selectType}
                        setSelectType={setSelectType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default App;