var React = require('react');
var QueryString = require('query-string');


class Forecast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      weather: null
    };
  }

  componentDidMount() {
    let search = QueryString.parse(this.props.location.search);
    let city = search.city;

    api.current_weather(city)
      .then(resp => {
        this.setState(() => {
          return {
            weather: resp,
            city: city
          };
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Weather</h1>
        {this.state.city !== null &&
          <h2>City: {this.state.weather.name}</h2>
        }
        {this.state.weather !== null &&
          <h3>Temperature: {this.state.weather.main.temp}°F</h3>
        }
      </div>
    );
  }
}

module.exports = Forecast;
