import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
// import { makeStyles } from '@material-ui/core/styles';
import mapStyles from './mapStyle'
import useStyles from './style'
require("dotenv").config();




  const Map = () => {
    const isMobile = useMediaQuery('(min-width:600px)');
    const classes = useStyles();

    const coords ={lat: 51.4975, lng: 0.1357}

  
  
    return (
      <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={coords}
          center={coords}
          defaultZoom={12}
          margin={[50, 50, 50, 50]}
          options={''}
          onChange={''}
          onChildClick={''}
        >
          
        </GoogleMapReact>
      </div>
    );
  };
  
  export default Map;


