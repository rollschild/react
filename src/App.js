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

  render() {
    return (
      <div className="App">
        <h3>Hey</h3>
        <button onClick={this.switchNameHandler.bind(this, 'Guangchu')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={() => this.switchNameHandler('Jobi')}
          asTyped={this.inputNameHandler}>
          Xi he he..
        </Person>
      </div>
    );
  }
}

export default App;
