import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Jovi', age: 26},
      {name: 'Eva', age: 24},
      {name: 'Jenny', age: 25},
    ],
    showPersons: true,
  };

  switchNameHandler = newName => {
    // This will be ingored by React!
    // this.state.persons[0].name = 'Guangchu';

    // merge
    this.setState({
      persons: [
        {name: newName, age: 26},
        {name: 'Eva', age: 24},
        {name: 'Jenny', age: 25},
      ],
    });
  };

  inputNameHandler = event => {
    this.setState({
      persons: [
        {name: event.target.value, age: 26},
        {name: 'Eva', age: 24},
        {name: 'Jenny', age: 25},
      ],
    });
  };

  showNameHandler = () => {
    const showOrNot = this.state.showPersons;
    this.setState({showPersons: !showOrNot});
  };

  render = () => {
    const appStyle = {
      backgroundColor: 'white',
    };

    const buttonStyle = {
      backgroundColor: 'red',
      font: 'inconsolata',
      padding: '6px',
      margin: '6px auto',
      border: '1px solid blue',
      cursor: 'pointer',
      display: 'block',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
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
        </div>
      );
    }

    return (
      <div className="App" style={appStyle}>
        <h3>Hey</h3>
        <button style={buttonStyle} onClick={this.showNameHandler}>
          Show Persons
        </button>
        <button
          onClick={this.switchNameHandler.bind(this, 'Guangchu')}
          style={buttonStyle}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  };
}

export default App;
