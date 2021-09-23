import axios from "axios";
// require("dotenv").config();

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";




export const getData = async (sw, ne) => {
  try {
    const {data: { data }} = await axios.get(URL, {
        
        params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
          limit: "20",
        },
        
        headers: {
          "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
          "x-rapidapi-key": process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        },
      })
      // console.log('***Return***',data)
    return data
    

  } catch (error) {
      console.log('***Error***',error)
  }
};

// export default getData