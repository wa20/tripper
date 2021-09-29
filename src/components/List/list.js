import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import InfoCard from "../InfoCard/infoCard";
import useStyles from "./listStyles";

const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {
  
  const [elementRef, setElementRef] = useState([]);

  console.log({ childClicked });

  const classes = useStyles();

  useEffect(() => {
    setElementRef((refs) => Array(places?.length).fill().map((_, index) => refs[index] || createRef()));
  }, [places]);

  return (
    <div className={classes.container}>
      <Typography variant="h5" style={{display:"flex", justifyContent:"center"}}>WHAT THE TRIP!</Typography>

      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select
              value={rating}
              onChange={(event) => setRating(event.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="3"> Rating 3+</MenuItem>
              <MenuItem value="3.5">Rating 3.5+</MenuItem>
              <MenuItem value="4">Rating 4+</MenuItem>
              <MenuItem value="4.5">Rating 4.5+</MenuItem>
            </Select>
          </FormControl>

          <Grid container spacing={4} className={classes.list}>
            {places?.map((place, i) => (
              <Grid item ref={elementRef[i]} key={i} item xs={12}>
                <InfoCard
                  place={place}
                  selected={Number(childClicked) === i}
                  refProp={elementRef[i]}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default List;
