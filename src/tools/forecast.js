const request = require("request");

const forecast = (latutitude, longtitude, callback) => {
  //weather Api
  const url =
    "http://api.weatherapi.com/v1/current.json?key=a9ae6ca835d34bf7b3a211650241507&q=" +
    latutitude +
    "," +
    longtitude;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect weather api service ", undefined);
    } else if (response.body.error) {
      callback(response.body.error.message, undefined);
    } else {
      callback(
        undefined,
        response.body.location.name +
          " it is " +
          response.body.current.condition.text +
          " temp : " +
          response.body.current.temp_c
      );
    }
  });
};

module.exports = forecast;
