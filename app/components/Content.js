var React = require('react');
var ZipCodeForm = require('./ZipCodeForm');
var PropTypes = require('prop-types');

function Content(props) {
  return (
    <div className="content">
      <h1 style={{color: 'white'}}>
        Enter a City and State
      </h1>
      <ZipCodeForm match={props.match} className='vertical'/>
    </div>
  );
}
Content.propTypes = {
  match: PropTypes.object
};

module.exports = Content;
