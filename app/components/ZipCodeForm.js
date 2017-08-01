var React = require('react');
var PropTypes = require('prop-types');
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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let city = this.state.city;
    this.setState(() => {
      return {
        city: ''
      }
    });
    this.context.router.history.push('/forecast?city=' + this.state.city);
  }

  render() {
    let match = this.props.match;
    let city = this.state.city;

    return (
      <form onSubmit={this.handleSubmit} className='zip-code-form'>
        <input onChange={this.handleChange}
               className='input'
               placeholder="Plymouth, Minnesota"
               value={this.state.city}></input>
        <Link className="btn" to={{
          pathname: '/forecast',
          search: `?city=` + city
        }}>
          Get weather
        </Link>
      </form>
    );
  }
}
ZipCodeForm.contextTypes = {
  router: PropTypes.object.isRequired
};


module.exports = ZipCodeForm;
