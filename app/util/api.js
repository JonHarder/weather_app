var QueryString = require('query-string');

var key = '0c81f5abdbf35b6c4c574c66251109cd';

let weather = (endpoint, params) => {
  let search = 'http://api.openweathermap.org/data/2.5/';
  let default_params = {
    units: 'imperial',
    APPID: key,
    type: 'accurate'
  };
  let query_params = Object.assign({}, default_params, params);
  search += endpoint + '?';
  let query_string = search + QueryString.stringify(query_params);

  return fetch(query_string)
    .then(resp => resp.json())
    .then(data => Promise.resolve(data));
};

Array.prototype.skip = function(nth) {
  return this.filter((x, i) => i % nth == 0);
};

api = {
  current_weather: city => {
    return weather('weather', {q: city});
  },

  forecast_weather: city => {
    return weather('forecast', {q: city})
      .then(data => {
        return {
          city: data.city.name,
          days: data.list.skip(8)
        };
      });
  }
};

module.exports = api;
