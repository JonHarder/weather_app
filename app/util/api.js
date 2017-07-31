var QueryString = require('query-string');

var key = '0c81f5abdbf35b6c4c574c66251109cd';

api = {
  current_weather: city => {
    let search = 'http://api.openweathermap.org/data/2.5/weather?';
    let encodedCity = window.encodeURI(city);
    
    let params = {
      units: 'imperial',
      APPID: key,
      type: 'accurate',
      q: encodedCity
    };

    let param_string = QueryString.stringify(params);
    return window.fetch(search + param_string)
      .then(resp => resp.json())
      .then(data => Promise.resolve(data));
  },

  forcast_weather: city => {
    console.log('getting forcast for ', city);
  }
};

module.exports = api;
