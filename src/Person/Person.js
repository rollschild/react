import React from 'react';

// ES6
const person = props => {
  return (
    <div>
      <button>Switch Name</button>
      <p>
        I'm {props.name} and I am {props.age} years old...
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
