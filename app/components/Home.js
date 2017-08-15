var React = require('react');
var Content = require('./Content');
var PropTypes = require('prop-types');


function Home(props) {
  return (
    <div>
      <Content match={props.match}/>
    </div>
  );
}
Home.propTypes = {
  match: PropTypes.object
};


module.exports = Home;
