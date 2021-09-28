import axios from "axios";
// require("dotenv").config();




export const getData = async (type, sw, ne) => {
  try {
    const {data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
        
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