var React = require('react');
var api = require('../util/api');
var Link = require('react-router-dom').Link;


class ZipCodeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    this.setState(() => {
      return {
        city: value
      };
    })
  }

  render() {
    let match = this.props.match;
    let city = this.state.city;

    return (
      <form className='zip-code-form'>
        <input onChange={this.handleChange}
               className='input'
               placeholder="Plymouth, Minnesota"></input>
        <Link className="btn" to={{
          pathname: match.url + 'forecast',
          search: `?city=` + city
        }}>
          Get weather
        </Link>
      </form>
    );
  }
}


module.exports = ZipCodeForm;
