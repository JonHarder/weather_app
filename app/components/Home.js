var React = require('react');
var Header = require('./Header');
var Content = require('./Content');


function Home(props) {
  return (
    <div>
      <Content match={props.match}/>
    </div>
  );
}


module.exports = Home;
