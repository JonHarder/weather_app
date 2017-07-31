var React = require('react');
var ZipCodeForm = require('./ZipCodeForm');

function Header(props) {
  return (
    <div className='nav'>
     <h1>Weather</h1>
     <ZipCodeForm/>
   </div>
  );
}


module.exports = Header;
