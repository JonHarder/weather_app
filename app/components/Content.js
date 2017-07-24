var React = require('react');

function Content() {
  return (
    <div className="content">
      <h1 style={{color: 'white'}}>
        Enter a City and State
      </h1>
      <input className='input' placeholder="Plymouth, Minnesota"></input>
      <button style={{marginTop: '20px'}} className='btn'>Search</button>
    </div>
  );
}

module.exports = Content;
