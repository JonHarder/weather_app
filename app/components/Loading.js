var React = require('react');
var PropTypes = require('prop-types');

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.message
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if(this.state.text = this.props.message + '....') {
        this.setState(() => {
          return {
            text: this.props.message
          };
        })
      } else {
        this.setState(oldState => {
          return {
            text: oldState + '.'
          };
        })
      }
    }, this.props.wait)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="loading">
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
Loading.defaultProps = {
  wait: 50,
  message: 'Loading'
}
Loading.propTypes = {
  message: PropTypes.string.isRequired,
  wait: PropTypes.number.isRequired
}


module.exports = Loading;
