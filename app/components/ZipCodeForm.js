var React = require('react');


class ZipCodeForm extends React.Component {
  render() {
    return (
      <form>
        <input className='input' placeholder="Plymouth, Minnesota"></input>
        <button style={{marginTop: '20px'}} className='btn'>
          Get Weather
        </button>
      </form>
    );
  }
}


module.exports = ZipCodeForm;
