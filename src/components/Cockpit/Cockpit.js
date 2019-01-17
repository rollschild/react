import React from 'react';
import styles from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = props => {
  // let classes = ['red', 'bold'].join(' ');
  const classes = [];
  // let btnClass = '';
  let btnClass = styles.Button;

  if (props.showPersons) {
    btnClass = [styles.Button, styles.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }
  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <Aux>
      <h3>{props.appTitle}</h3>
      <p className={classes.join(' ')}>Let us see some names...</p>
      <button onClick={props.toggled} key="button" className={btnClass}>
        Show Persons
      </button>
      <button
        onClick={props.switched.bind(this, 'Guangchu')}
        className={btnClass}>
        Switch Name
      </button>
    </Aux>
  );
};

export default cockpit;
