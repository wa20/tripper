import React from 'react';
import GoogleMapReact from 'google-map-react';
import { 
  Paper, 
  Typography, 
  useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
// import { makeStyles } from '@material-ui/core/styles';
import mapStyles from '../../mapStyle'
import useStyles from './style'
// require("dotenv").config();




  const Maps = ( {setCoordinates, setBounds, coordinates, places} ) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    // const coordinates ={lat: 51.4975, lng: 0.1357}

  

    return (
      <div className={classes.mapContainer}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={12}
          margin={[50, 50, 50, 50]}
          options={''
            // { disableDefaultUI: true, zoomControl: true, styles: mapStyles }
          }
          onChange={
            (event) => {
            console.log('***map-comp', event)
            setCoordinates({ lat: event.center.lat, lng: event.center.lng });
            setBounds({ ne: event.marginBounds.ne, sw: event.marginBounds.sw });
          
          }
        }
          onChildClick ={''}
        >
          {places?.map((place, index) => (
            <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longtitude)}
            key={index}
            >
              {
                !isMobile ? (
                  <LocationOnOutlinedIcon color="secondary" fontSize="large" />
                ) : (
                  <Paper elevation={3} className={classes.paper}>

                   
                    <img className={classes.pointer} 
                     src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                    alt={place.name}
                    /> 
                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                      {place.name}
                    </Typography>

                  </Paper>
                )
              }

            </div>
          ))

          }
        </GoogleMapReact>
      </div>
    );
  };
  
  export default Maps;


