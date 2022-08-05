import {useState, useEffect, createRef} from "react";
import {CircularProgress, Grid, Typography, MenuItem, FormControl, Select} from "@mui/material";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

import classes from "./List.module.css";

const List = ({places, childClicked, isLoading, rating, setRating, selectType, setSelectType}) => {

    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
    }, [places]);


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
                                console.log(e.target.value)
                            }}>
                                <MenuItem value="restaurants"> Restaurants </MenuItem>
                                <MenuItem value="hotels"> Hotels </MenuItem>
                                <MenuItem value="attractions"> Attractions </MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl style={{width: "40%", height: "10px"}}>
                            <Select style={{height: "40px"}} value={rating} onChange={(e) => {
                                setRating(e.target.value)
                                console.log(e.target.value)
                            }}>
                                <MenuItem value={0}>All Ratings</MenuItem>
                                <MenuItem value={3}> Above 3.0 </MenuItem>
                                <MenuItem value={4}> Above 4.0 </MenuItem>
                                <MenuItem value={4.5}> Above 4.5 </MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Grid container spacing={3} className={classes.list}>
                        {places?.map((place, i) => (<Grid ref={elRefs[i]} item key={i} xs={12}>
                                <PlaceDetails
                                    selected={Number(childClicked) === i}
                                    refProp={elRefs[i]}
                                    place={place}
                                />
                            </Grid>))}
                    </Grid>
                </>)}
        </div>);
};

export default List;