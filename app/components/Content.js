var React = require('react');
var ZipCodeForm = require('./ZipCodeForm');

function Content() {
  return (
    <div className="content">
      <h1 style={{color: 'white'}}>
        Enter a City and State
      </h1>
      <ZipCodeForm/>
    </div>
  );
}

module.exports = Content;
