import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardAction,
  Chip
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
// import Ratings from "@material-ui/lab/Rating";

import useStyles from "./styles";

const PlaceDetails = ({ place }) => {
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography variant="subtitle1">{place.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography variant="subtitle1">{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award) => {
          console.log(award);
          return (
            <Box my={1} display="flex" justifyContent="space-between">
              <img src={award.images.small} alt={award.display_name} />
              <Typography variant="subtitle1">{award.display_name}</Typography>
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
