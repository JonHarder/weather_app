var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;


function formatDate(date) {
  let months = new Array('Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec');
  let days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  let day_str = days[date.getDay()];
  let month_str = months[date.getMonth()];
  return day_str + ', ' + month_str + ' ' + date.getDate();
}


function WeatherIcon(props) {
  let image_src = 'cloudy.svg';

  if(props.weather === 'light rain') {
    image_src = 'rainy.svg';
  } else if(props.weather === 'clear sky') {
    image_src = 'sunny.svg';
  }

  if(image_src === null) {
    return <h2>{props.weather}</h2>;
  } else {
    let src = require('../images/' + image_src);
    return <img height='175' width='175' src={src} alt={props.weather}/>;
  }
}
WeatherIcon.propTypes = {
  weather: PropTypes.string.isRequired
};


function ForecastDay(props) {
  let day = new Date(props.day);
  return (
    <Link className='forecastDay' to={'details/' + props.city}>
      <WeatherIcon weather={props.weather}/>
      <h2>{formatDate(day)}</h2>
      {props.children}
    </Link>
  );
}
ForecastDay.propTypes = {
  city: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired,
  children: PropTypes.object
};
ForecastDay.contextTypes = {
  router: PropTypes.object.isRequired
};

module.exports = ForecastDay;
