import {useEffect, useState} from "react";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
// import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

import {CssBaseline, Grid} from "@mui/material";
import {getPlacesData} from "./components/api";

const App = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        getPlacesData()
            .then((data) => {
                console.log(data);

                setPlaces(data);
            })
    }, []);

    return (
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: "100%"}}>
                <Grid item xs={12} md={4}>
                    <List/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map/>
                </Grid>
            </Grid>
        </>
    );
};

export default App;