var React = require('react');
var Header = require('./Header');
var Content = require('./Content');


function Home(props) {
  return (
    <div>
      <Header match={props.match}/>
      <Content match={props.match}/>
    </div>
  );
}


module.exports = Home;
