import React, { useState, useEffect } from "react";
import {  Grid } from "@material-ui/core";
import { getData } from "../../api/index";
import Maps from "../../components/Map/map";
import List from "../../components/List/list";
import Footer from "../../components/Footer/footer";
import Nav from "../../components/Navbar/navbar";

import { Container, Header, Segment } from "semantic-ui-react";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("all");
  const [filterSearch, setFilterSearch] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filterSearch = places.filter((place) => place.rating > rating);

    setFilterSearch(filterSearch);
  }, [rating]);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);
      console.log("coords & bounds", coordinates, bounds);
      getData(type, bounds.sw, bounds.ne).then((data) => {
        console.log("getData", data);
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilterSearch([]);
        setIsLoading(false);
      });
    }
  }, [type, bounds]);

  return (
    <div>
      <Nav setCoordinates={setCoordinates} />
      {/* <Container style={{paddingTop:"3em", paddingBottom:"3em", margin:"0"}}> */}
      <Grid container style={{ width: "100%", padding: "2em" }}>
        <Grid item xs={12} md={4}>
          <List
            places={filterSearch.length ? filterSearch : places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
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
          <Maps
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filterSearch.length ? filterSearch : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
      {/* </Container> */}

      <Footer />
    </div>
  );
};

export default Home;
