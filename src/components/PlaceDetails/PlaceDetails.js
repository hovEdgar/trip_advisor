import {Typography, Card, Button, Box, CardMedia, CardContent, CardActions, Chip, Rating} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import classes from './PlaceDetails.module.css';

const PlaceDetails = ({place, selected, refProp}) => {
    // console.log(place) // todo remove

    if (selected) {
        refProp?.current?.scrollIntoView({behavior: "smooth", block: "start"});
    }

    return (
        <Card elevation={6}>
            <CardMedia
                style={{height: 300}}
                image={place.photo ? place.photo.images?.medium.url : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {place.name ? place.name : "Unknown restaurant"}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                    <Rating value={+place?.rating} readOnly/>
                    <Typography gutterBottom variant="subtitle1">Out of {place?.num_reviews || 0} reviews</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level || "No information"}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking || "No information"}</Typography>
                </Box>
                {place?.awards?.map((award) => (
                    <Box my={1} display="flex" justifyContent="space-between" alignItems="center"
                         key={place.name + Math.random()}>
                        <img src={award.images.small} alt={award.display_name}/>
                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({name}) => (
                    <Chip key={name + Math.random()} size="small" label={name} className={classes.chip}/>
                ))}
                {place?.address && (
                    <Typography my={1} gutterBottom variant="subtitle2" color="textSecondary"
                                className={classes.subtitle}>
                        <LocationOnIcon/>{place.address}
                    </Typography>
                )}
                {place?.phone && (
                    <Typography my={1} gutterBottom variant="subtitle2" color="textSecondary"
                                className={classes.spacing}>
                        <LocalPhoneIcon/>{place.phone}
                    </Typography>
                )}
                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, "_blank")}>
                        Explore more
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, "_blank")}>
                        Our Website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default PlaceDetails;