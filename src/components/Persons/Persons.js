import React, {PureComponent} from 'react';
import Person from './Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      '[Update Persons.js] Inside componentWillReceiveProps',
      nextProps,
    );
  }

  /*
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      '[Update Persons.js] Inside shouldComponentUpdate',
      nextProps,
      nextState,
    );

    // shallow checking
    // only checks pointers
    return (
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
    );
    // return true;
    // if returned false, never reach to the render()
    // ...phase, which means the DOM is never updated
  }
  */

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[Update Persons.js] Inside componentWillUpdate()',
      nextProps,
      nextState,
    );
  }

  componentDidUpdate() {
    console.log('[Updtate Persons.js] Inside componentDidUpdate()');
  }

  render = () => {
    console.log('[Persons.js] Inside render()');

    return this.props.persons.map((person, index) => {
      return (
        <ErrorBoundary key={person.id}>
          <Person
            name={person.name}
            age={person.age}
            click={() => this.props.clicked(index)}
            changed={event => this.props.changed(event, person.id)}
          />
        </ErrorBoundary>
      );
    });
  };
}

export default Persons;
