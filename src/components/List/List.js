import {useState} from "react";
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

import classes from "./List.module.css";

const List = () => {
    const [selectType, setSelectType] = useState("restaurants");
    const [rating, setRating] = useState("");

    const places = [
        {name: "Great pub"},
        {name: "Jazz club"},
        {name: "Wine house"},
        {name: "Grill house"},
        {name: "Strip club"},
        {name: "Restaurant"},
        {name: "Hotel"},
        {name: "Billiard club"},
        {name: "Grocery Shop"},
    ];

    return (
        <div className={classes.container}>
            <Typography variant="h6">
                Restaurants, Hotels & Attractions around you
            </Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={selectType} onChange={(e) => {
                    setSelectType(e.target.value)
                }}>
                    <MenuItem value="restaurants"> Restaurants </MenuItem>
                    <MenuItem value="hotels"> Hotels </MenuItem>
                    <MenuItem value="attractions"> Attractions </MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => {
                    setRating(e.target.value)
                }}>
                    <MenuItem value={0}> All </MenuItem>
                    <MenuItem value={3}> Above 3.0 </MenuItem>
                    <MenuItem value={4}> Above 4.0 </MenuItem>
                    <MenuItem value={4.5}> Above 4.5 </MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default List;