var axios = require("axios").default;

const getPlacesData = async (sw, ne) => {
  try {
    var URL =
      "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
    var options = {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
        restaurant_tagcategory_standalone: "10591",
        restaurant_tagcategory: "10591",
        limit: "30",
        currency: "USD",
        open_now: "false",
        lunit: "km",
        lang: "en_US"
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "09bec91290mshad58c11375ce4c0p13006ejsnf816e0056823"
      }
    };

    const { data } = await axios.get(URL, options);

    return data;
  } catch (e) {
    console.log(e.message);
  }
};

export default getPlacesData;
