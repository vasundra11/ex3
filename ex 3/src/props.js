import React from 'react';

function Mobile({name, tool}) {

    return (
      <div>
        <h2>Brand: {name}.</h2>
        <h2>Name: {tool}.</h2>
      </div>
    );

  }
  
  Mobile.defaultProps = {
    name: "Hungaman",
    tool: "ShinChan"
  }
  export default Mobile