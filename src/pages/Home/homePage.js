import React, { Component } from "react";
import { createMedia } from "@artsy/fresnel";
import Map from "../../components/Map/map";
import List from "../../components/List/list"
import Footer from "../../components/Footer/footer";
import { CssBaseline, Grid } from "@material-ui/core";

import {
    Container,
    Header,
    Segment,
  } from 'semantic-ui-react'

const Home = () => {
  return (
    <div>
    
    {/* <Container style={{paddingTop:"3em", paddingBottom:"3em", margin:"0"}}> */}
      <Grid container  style={{ width: "100%" }} style={{padding:"2em"}}>
        <Grid item xs={12} md={4}>
          <List/>        </Grid>
        <Grid item xs={12} md={8} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Map />
        </Grid>
      </Grid>
    {/* </Container> */}

      <Footer />
    </div>
  );
};

export default Home;
