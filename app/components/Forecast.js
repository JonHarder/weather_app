var React = require('react');
var QueryString = require('query-string');
var PropTypes = require('prop-types');

var Loading = require('./Loading');


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


function ForecastDay(props) {
  let day = new Date(props.day);
  let months = new Array("January", "February", "March", "April",
                         "May", "June", "July", "August", "September",
                         "October", "November", "December");
  return (
    <div className="forecastDay">
      <WeatherIcon weather={props.weather}/>
      <h2>{formatDate(day)}</h2>
      {props.children}
    </div>
  );
}
ForecastDay.propTypes = {
  day: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired
};


class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      weather: null,
      loading: true
    };
  }

  componentDidMount() {
    let search = QueryString.parse(this.props.location.search);
    let city = search.city;

    // api.current_weather(city)
    api.forecast_weather(city)
      .then(resp => {
        this.setState(() => {
          return {
            days: resp.days,
            city: resp.city,
            loading: false
          };
        });
      });
  }

  render() {
    if(this.state.loading) {
      return <Loading/>;
    }

    return (
      <div>
        {this.state.city !== null &&
          <h1 style={{textAlign: 'center', fontSize: '50px'}}>{this.state.city}</h1>
        }
        {this.state.days !== null &&
          <div className="container">
          {this.state.days.map((val, i) => {
            let day = val.dt_txt;
            let temp = val.main.temp;
            let weather = val.weather[0].description;
            return (
              <ForecastDay key={i} className="forecastDay"
                day={day} temp={temp} weather={weather}>
             </ForecastDay>
            );
          })}
        </div>
        }
      </div>
    );
  }
}

module.exports = Forecast;
