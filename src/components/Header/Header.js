import {useState} from "react";
import {Autocomplete} from "@react-google-maps/api";
import {AppBar, Toolbar, Typography, InputBase, Box} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import classes from "./Header.module.css"

const Header = ({setCoordinates}) => {
    const [autocomplete, setAutocomplete] = useState(null);

    const loadHandler = (autoC) => {
        setAutocomplete(autoC)
    };

    const changePLaceHandler = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({lat, lng});
    };

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    {"Trip{Advisor}"}
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        Explore new places
                    </Typography>
                    <Autocomplete onLoad={loadHandler} onPlaceChanged={changePLaceHandler}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder="Let's Search..."
                                       classes={{root: classes.inputRoot, input: classes.inputInput}}
                            />
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;