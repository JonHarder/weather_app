var React = require('react');
var Header = require('./Header');
var Content = require('./Content');

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}


module.exports = App;
