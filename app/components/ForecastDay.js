var React = require('react');
var PropTypes = require('prop-types');


function formatDate(date) {
  let months = new Array("Jan", "Feb", "Mar", "Apr",
                         "May", "Jun", "Jul", "Aug", "Sep",
                         "Oct", "Nov", "Dec");
  let days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  let day_str = days[date.getDay()];
  let month_str = months[date.getMonth()];
  return day_str + ', ' + month_str + ' ' + date.getDate();
}


function WeatherIcon(props) {
  let image_src = 'cloudy.svg';

  if(props.weather === "light rain") {
    image_src = 'rainy.svg';
  } else if(props.weather === 'clear sky') {
    image_src = 'sunny.svg';
  }

  if(image_src === null) {
    return <h2>{props.weather}</h2>;
  } else {
    let src = require('../images/' + image_src);
    return <img height="175" width="175" src={src} alt={props.weather}/>;
  }
}
WeatherIcon.propTypes = {
  weather: PropTypes.string.isRequired
};


class ForecastDay extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.context.router.history.push('/details/' + this.props.city);
  }

  render() {
    let day = new Date(this.props.day);
    let months = new Array("January", "February", "March", "April",
                           "May", "June", "July", "August", "September",
                           "October", "November", "December");
    return (
      <div onClick={this.handleClick} className="forecastDay">
        <WeatherIcon weather={this.props.weather}/>
        <h2>{formatDate(day)}</h2>
        {this.props.children}
      </div>
    );
  }
}
ForecastDay.propTypes = {
  city: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired
};
ForecastDay.contextTypes = {
  router: PropTypes.object.isRequired
};

module.exports = ForecastDay;
