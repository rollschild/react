import React from 'react';
import styles from './Cockpit.css';
const cockpit = props => {
  // let classes = ['red', 'bold'].join(' ');
  const classes = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = styles.Red;
  }

  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }
  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h3>Hey</h3>
      <p className={classes.join(' ')}>Let us see some names...</p>
      <button onClick={props.toggled} key="button" className={btnClass}>
        Show Persons
      </button>
      <button
        onClick={props.switched.bind(this, 'Guangchu')}
        className={btnClass}>
        Switch Name
      </button>
    </div>
  );
};

export default cockpit;
