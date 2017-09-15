var React = require('react');
var PropTypes = require('prop-types');


function WeatherIcon(props) {
  let image_src = 'cloudy.svg';

  if(props.weather === 'light rain' || props.weather === 'moderate rain') {
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

module.exports = WeatherIcon;
