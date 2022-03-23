import React, { useState } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
import useStyle from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places, setPlaces }) => {
  console.log("1:", places);
  const classes = useStyle();
  const [type, setType] = useState("restautants");
  const [rating, setRating] = useState("restautants");

  return (
    <div className={classes.container}>
      <Typography variant="h4">Restaurants, Hotels and many more</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotel">Hotel</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Ratings</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
