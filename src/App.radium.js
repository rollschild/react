import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';
import './App.css';
import Person from './Person/Person';
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
class App extends Component {
  state = {
    persons: [
      {name: 'Jovi', age: 26, id: '000'},
      {name: 'Eva', age: 24, id: '001'},
      {name: 'Jenny', age: 25, id: '002'},
    ],
    showPersons: true,
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

  showNameHandler = () => {
    const showOrNot = this.state.showPersons;
    this.setState({showPersons: !showOrNot});
  };

  deletePersonHandler = index => {
    // const newPersons = this.state.persons.slice();
    const newPersons = [...this.state.persons];
    newPersons.splice(index, 1);
    this.setState({persons: newPersons});
  };

  render = () => {
    const appStyle = {
      backgroundColor: 'white',
    };

    const buttonStyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inconsolata',
      padding: '6px',
      margin: '6px auto',
      border: '1px solid blue',
      cursor: 'pointer',
      display: 'block',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={event => this.inputNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      buttonStyle.backgroundColor = 'red';
      buttonStyle[':hover'] = {
        backgroundColor: 'pink',
        color: 'black',
      };
    }

    // let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      <StyleRoot>
        <div className="App" style={appStyle}>
          <h3>Hey</h3>
          <p className={classes.join(' ')}>Let us see some names...</p>
          <button
            style={buttonStyle}
            onClick={this.showNameHandler}
            key="button">
            Show Persons
          </button>
          <button
            onClick={this.switchNameHandler.bind(this, 'Guangchu')}
            style={buttonStyle}>
            Switch Name
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  };
}

export default Radium(App);
