var React = require('react');


function Details(props) {
  let city = props.match.params.city;
  return (
    <h1>city: {city}</h1>
  );
}


module.exports = Details;
