import React, {useState,  useEffect } from "react";
import { createMedia } from "@artsy/fresnel";

import { CssBaseline, Grid } from "@material-ui/core";
import { getData } from "../../api/index";
import Maps from "../../components/Map/map";
import List from "../../components/List/list";
import Footer from "../../components/Footer/footer";



import { Container, Header, Segment } from "semantic-ui-react";

const Home = () => {
const [type, setType] = useState('restaurants');
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setChildClicked] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

   
 useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
          setCoordinates({ lat: latitude, lng: longitude });
        });
      }, []);


  useEffect(() => {
    setIsLoading(true)

    console.log("coords & bounds", coordinates, bounds);
    getData(bounds.sw, bounds.ne)
        .then((data) => {
            console.log("getData", data);
                setPlaces(data);
                setIsLoading(false);
    });
  }, [coordinates, bounds]);

  return (
    <div>
      {/* <Container style={{paddingTop:"3em", paddingBottom:"3em", margin:"0"}}> */}
      <Grid container style={{ width: "100%",  padding: "2em"  }}>
        <Grid item xs={12} md={4}>
          <List 
          places={places}
          childClicked={childClicked}
          isLoading={isLoading}
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
            places={places}
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
