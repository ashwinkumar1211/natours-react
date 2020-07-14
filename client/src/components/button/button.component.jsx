import React, { createRef } from 'react';

import { Button as ButtonWrapper, Spinner } from './button.styles';

class Button extends React.Component {
   constructor(props) {
      super(props);
      this.state = { width: 0, height: 0 };
      this.buttonRef = createRef();
   }

   componentDidMount() {
      const { width, height } = this.buttonRef.current.getBoundingClientRect();
      this.setState({ width, height });
   }

   shouldComponentUpdate(nextProps, nextState) {
      const areNewPropsDifferent = this.props.isLoading !== nextProps.isLoading;
      const areDimensionsNotSet = this.state.width === 0 && this.state.height === 0;

      return areNewPropsDifferent || areDimensionsNotSet;
   }

   render() {
      const { isLoading, children } = this.props;
      const { height } = this.state;

      return (
         <ButtonWrapper
            ref={this.buttonRef}
            dimensions={this.state}
            isLoading={isLoading}
            {...this.props}
         >
            {isLoading === true ? <Spinner size={height} /> : children}
         </ButtonWrapper>
      );
   }
}

export default Button;
