var React = require('react');
var PropTypes = require('prop-types');
var WeatherIcon = require('./WeatherIcon');


function formatDate(date) {
  let months = new Array('Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec');
  let days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  let day_str = days[date.getDay()];
  let month_str = months[date.getMonth()];
  return day_str + ', ' + month_str + ' ' + date.getDate();
}


function ForecastDay(props) {
  let day = new Date(props.day);
  return (
    <div className='forecastDay'>
      <WeatherIcon weather={props.weather}/>
      <h2>{formatDate(day)}</h2>
      {props.children}
    </div>
  );
}
ForecastDay.propTypes = {
  day: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  children: PropTypes.array
};
ForecastDay.contextTypes = {
  router: PropTypes.object.isRequired
};

module.exports = ForecastDay;
