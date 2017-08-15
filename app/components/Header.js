var React = require('react');
var Link = require('react-router-dom').Link;

var ZipCodeForm = require('./ZipCodeForm');

function Header() {
  return (
    <div className='nav'>
      <h1><Link className="plain" to='/'>Weather</Link></h1>
      <ZipCodeForm/>
    </div>
  );
}


module.exports = Header;
