import Geocode from "react-geocode";

Geocode.setLocationType("ROOFTOP");
Geocode.setApiKey(process.env.REACT_APP_API_KEY);

export const addressFromLatLong = async (latitude, longitude) => {
  try {
    const res = await Geocode.fromLatLng(latitude, longitude);
    return res.results[0].formatted_address;
  } catch (err) {
    console.log(err)
  }
}

export const latLongFromAddress = async (addLine1, city, region, postcode) => {
  try {
    const formattedAddress = `${addLine1}, ${city}, ${region}, ${postcode}`;
    const res = await Geocode.fromAddress(formattedAddress);
    const { lat, lng } = res.results[0].geometry.location;
    return [lat, lng];
  } catch (err) {
    console.log(err);
  }
};