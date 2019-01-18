import React, {Component} from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

/*
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={() => this.switchNameHandler('Jobi')}
            asTyped={this.inputNameHandler}>
            Xi he he..
          </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
*/

export const AuthContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    super(props);
    /*
    this.state = {
      persons: [
        {name: 'Jovi', age: 26, id: '000'},
        {name: 'Eva', age: 24, id: '001'},
        {name: 'Jenny', age: 25, id: '002'},
      ],
      showPersons: true,
    };
    */
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      '[Update App.js] Inside shouldComponentUpdate()',
      nextProps,
      nextState,
    );

    // shallow checking
    // only checks pointers
    return (
      nextState.persons !== this.state.persons ||
      nextState.showPersons !== this.state.showPersons ||
      nextState.authenticated !== this.state.authenticated
    );
    // return true;
    // if returned false, never reach to the render()
    // ...phase, which means the DOM is never updated
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[Update App.js] Inside componentWillUpdate()',
      nextProps,
      nextState,
    );
  }

  componentDidUpdate() {
    console.log('[Updtate App.js] Inside componentDidUpdate()');
  }

  state = {
    persons: [
      {name: 'Jovi', age: 26, id: '000'},
      {name: 'Eva', age: 24, id: '001'},
      {name: 'Jenny', age: 25, id: '002'},
    ],
    showPersons: true,
    toggleClickedCounter: 0,
    authenticated: false,
  };

  switchNameHandler = newName => {
    // This will be ingored by React!
    // this.state.persons[0].name = 'Guangchu';

    // merge
    this.setState({
      persons: [
        {name: newName, age: 26, id: '000'},
        {name: 'Eva', age: 24, id: '001'},
        {name: 'Jenny', age: 25, id: '002'},
      ],
    });
  };

  inputNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = this.state.persons[personIndex];
    /*
    const person = this.state.persons.find(p => {
      return p.id === id;
    });
    */
    const newPerson = {
      ...this.state.persons[personIndex],
      name: event.target.value,
    };

    const newPersons = [...this.state.persons];
    newPersons[personIndex] = newPerson;

    this.setState({
      persons: newPersons,
    });
  };

  /*
   * IMPORTANT!
   * setState() is ASYNC
   */
  showNameHandler = () => {
    const showOrNot = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !showOrNot,
        toggleClickedCounter: prevState.toggleClickedCounter + 1,
      };
    });
  };

  deletePersonHandler = index => {
    // const newPersons = this.state.persons.slice();
    const newPersons = [...this.state.persons];
    newPersons.splice(index, 1);
    this.setState({persons: newPersons});
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render = () => {
    console.log('[App.js] Inside render()');
    /*
    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inconsolata',
      padding: '6px',
      margin: '6px auto',
      border: '1px solid blue',
      cursor: 'pointer',
      display: 'block',
    };
    */
    let persons = null;

    console.log(styles.App);

    // *key* should always be on the outer element
    // ...in the map() method
    if (this.state.showPersons) {
      persons = (
        <div>
          <ErrorBoundary>
            <Persons
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.inputNameHandler}
            />
          </ErrorBoundary>
        </div>
      );
    }

    return (
      <WithClass styles={styles.App}>
        <button onClick={() => this.setState({showPersons: true})}>
          Show All Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggled={this.showNameHandler}
          switched={this.switchNameHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </WithClass>
    );
  };
}

export default App;
