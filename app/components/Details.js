var React = require('react');
var PropTypes = require('prop-types');

var ForecastDay = require('./ForecastDay');


var style = {
  background: 'red'
};


function Details(props) {
  let city = props.match.params.city;
  let temp = props.location.query.temp;
  let weather = props.location.query.weather;
  let day = props.location.query.day;
  return (
    <div>
      <ForecastDay style={style} day={day} weather={weather}>
        <h1>{city}</h1>
        <h2>{temp} degrees</h2>
        <h2>{weather}</h2>
      </ForecastDay>
    </div>
  );
}
Details.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};


module.exports = Details;
