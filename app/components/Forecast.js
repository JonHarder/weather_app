var React = require('react');
var QueryString = require('query-string');
var PropTypes = require('prop-types');

var Loading = require('./Loading');
var ForecastDay = require('./ForecastDay');
var api = require('../util/api');


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
      return (
        <div className='content'>
          <Loading/>
        </div>
      );
    }

    return (
      <div>
        {this.state.city !== null &&
          <h1 style={{textAlign: 'center', fontSize: '50px'}}>{this.state.city}</h1>
        }
        {this.state.days !== null &&
            <div className='container'>
              {this.state.days.map((val, i) => {
                let day = val.dt_txt;
                let temp = val.main.temp;
                let weather = val.weather[0].description;
                return (
                  <ForecastDay key={i} className='forecastDay'
                    city={this.state.city} day={day} temp={temp} weather={weather}>
                  </ForecastDay>
                );
              })}
            </div>
        }
      </div>
    );
  }
}
Forecast.propTypes = {
  location: PropTypes.object
};

module.exports = Forecast;
