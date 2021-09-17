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

import useStyles from "./listStyles";

const List = () => {
  const [type, setType] = useState("hotels");
  const [rating, setRating] = useState('all')

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h5">what the tripper?</Typography>

      <FormControl className={classes.formControl}>
        <InputLabel >Type</InputLabel>
        <Select value={type} onChange={(event) => setType(event.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl} >
        <InputLabel >Rating</InputLabel>
        <Select value={rating} onChange={(event) => setRating(event.target.value)}>
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="3"> Rating 3+</MenuItem>
          <MenuItem value="3.5">Rating 3.5+</MenuItem>
          <MenuItem value="4">Rating 4+</MenuItem>
          <MenuItem value="4.5">Rating 4.5+</MenuItem>
        </Select>
      </FormControl>



    </div>
  );
};

export default List;
