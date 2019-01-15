import React from 'react';
import './Person.css';

// ES6
const person = props => {
  return (
    <div className="person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old...
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.asTyped} value={props.name} />
    </div>
  );
};

export default person;
