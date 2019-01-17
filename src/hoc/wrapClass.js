import React, {Component} from 'react';

const wrapClass = (WrappedComponent, className) => {
  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

const wrapClassComp = (WrappedComponent, className) => {
  return class extends Component {
    render = () => {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      );
    };
  };
};

export default wrapClass; // it's a function
export {wrapClassComp};
