const request = require("request");
//mapbox

const geocode = (address, callback) => {
  const geocodingUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?proximity=ip&access_token=pk.eyJ1IjoieWFoaWFhaG1lZCIsImEiOiJjbHlxMDVmaWYwZ2Y1MmlzN3hhcWE2cTJ2In0.IzSKYMJrqvELuxsNVw5WwQ";

  request({ url: geocodingUrl, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect geocode service0", undefined);
    } else if (response.body.message) {
      callback(esponse.body.message, undefined);
    } else if (response.body.features.lenght == 0) {
      callback("unabel to find this location", undefined);
    } else {
      callback(undefined, {
        latutitude: response.body.features[0].center[1],
        longtitude: response.body.features[0].center[0],
      });
    }
  });
};

module.exports = geocode;
