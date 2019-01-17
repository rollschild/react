import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Person.css';
// import WithClass from '../../../hoc/WithClass';
import wrapClass, {wrapClassComp} from '../../../hoc/wrapClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor', props);

    // added in React 16.3:
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');

    if (this.props.pos === 0) {
      this.focus();
    }
  }

  componentWillUnmount() {
    console.log('[Person.js] Inside componentWillUnmount()');
  }

  focus() {
    this.inputElement.current.focus();
  }

  render = () => {
    console.log('[Person.js] Inside render()');

    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  };
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

// export default wrapClass(Person, styles.Person);
export default wrapClassComp(Person, styles.Person);
