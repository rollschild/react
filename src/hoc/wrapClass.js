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
  const WrapperClass = class extends Component {
    render = () => {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} ref={this.props.forwardedRef} />
        </div>
      );
    };
  };

  return React.forwardRef((props, ref) => {
    return <WrapperClass {...props} forwardedRef={ref} />;
  });
};

export default wrapClass; // it's a function
export {wrapClassComp};
