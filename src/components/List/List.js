import {useState, useEffect, createRef} from "react";
import {CircularProgress, Grid, Typography, MenuItem, FormControl, Select} from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

import classes from "./List.module.css";

const List = ({places, childClicked, isLoading}) => {
    const [selectType, setSelectType] = useState("restaurants");
    const [rating, setRating] = useState(0);
    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        // const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());

        // setElRefs(refs);
    }, [places])


    console.log({childClicked}) // todo remove


    return (<div className={classes.container}>
            <Typography variant="h6" style={{display: "block", marginBottom: 10, textAlign: "center"}}>
                Restaurants, Hotels & Attractions around you
            </Typography>
            {isLoading ? (<div className={classes.loading}>
                    <CircularProgress size="5rem"/>
                </div>) : (<>
                    <div className={classes.selectBox}>
                        <FormControl style={{width: "40%", height: "10px"}}>
                            <Select style={{height: "40px"}} value={selectType} onChange={(e) => {
                                setSelectType(e.target.value)
                            }}>
                                <MenuItem value="restaurants"> Restaurants </MenuItem>
                                <MenuItem value="hotels"> Hotels </MenuItem>
                                <MenuItem value="attractions"> Attractions </MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl style={{width: "40%", height: "10px"}}>
                            <Select style={{height: "40px"}} value={rating} onChange={(e) => {
                                setRating(e.target.value)
                            }}>
                                <MenuItem value={0}>All</MenuItem>
                                <MenuItem value={3}> Above 3.0 </MenuItem>
                                <MenuItem value={4}> Above 4.0 </MenuItem>
                                <MenuItem value={4.5}> Above 4.5 </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Grid container spacing={3} className={classes.list}>
                        {places?.map((place, i) => (<Grid item key={i} xs={12}>
                                <PlaceDetails
                                    place={place}
                                    selected={Number(childClicked) === i}
                                    refProp={elRefs[i]}
                                />
                            </Grid>))}
                    </Grid>
                </>)}
        </div>);
};

export default List;