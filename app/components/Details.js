var React = require('react');
var Loading = require('./Loading');
var PropTypes = require('prop-types');


class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: this.props.match.params.city,
      loading: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(() => {
      return {
        loading: false
      };
    });
  }

  render() {
    const loading = (
      <div>
        <Loading/>
        <div className="btn" onClick={this.handleClick}>
          Load
        </div>
      </div>
    );

    let content = null;

    if(this.state.loading) {
      content = loading;
    } else {
      content = <h1>City: {this.state.city}</h1>;
    }

    return (
      <div className="column">
        {content}
      </div>
    );
  }
}
Details.propTypes = {
  match: PropTypes.object
};


module.exports = Details;
