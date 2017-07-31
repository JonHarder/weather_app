var React = require('react');
var QueryString = require('query-string');


function ForecastDay(props) {
  return (
    <div className="column">
      {props.day}
    </div>
  );
}


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
      return <h1 className="column">Loading</h1>;
    }

    return (
      <div>
        {this.state.city !== null &&
          <h1>{this.state.city}</h1>
        }
        {this.state.days !== null &&
          <ul>
          {this.state.days.map((val, i) => {
            return (
              <li key={i}>
                <ForecastDay day={val.dt_txt}/>
              </li>
            );
          })}
          </ul>
        }
      </div>
    );
  }
}

module.exports = Forecast;
