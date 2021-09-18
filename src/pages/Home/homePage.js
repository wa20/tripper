import React, { Component, useEffect, useState } from "react";
import { createMedia } from "@artsy/fresnel";
import Map from "../../components/Map/map";
import List from "../../components/List/list";
import Footer from "../../components/Footer/footer";
import { CssBaseline, Grid } from "@material-ui/core";
import { getData } from "../../api/index";

import { Container, Header, Segment } from "semantic-ui-react";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState({})
  const [boundary, setBoundary] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    console.log(coords, boundary)
    getData().then((data) => {
        console.log(data)
        setPlaces(data)
    })
  }, []);

  return (
    <div>
      {/* <Container style={{paddingTop:"3em", paddingBottom:"3em", margin:"0"}}> */}
      <Grid container style={{ width: "100%" }} style={{ padding: "2em" }}>
        <Grid item xs={12} md={4}>
          <List places={places}/>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map 
           setCoords={setCoords}
           setBoundary={setBoundary}
           coords={coords}
          />
        </Grid>
      </Grid>
      {/* </Container> */}

      <Footer />
    </div>
  );
};

export default Home;
