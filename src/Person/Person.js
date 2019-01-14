import React from 'react';

// ES6
const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old...
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.asTyped} value={props.name} />
    </div>
  );
};

export default person;
