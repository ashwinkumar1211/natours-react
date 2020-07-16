import React from 'react';

import { AlertWrapper, Tick, Cross, Text } from './alert.styles';

const Alert = ({ className, children, type }) => {
   return (
      <AlertWrapper className={className} type={type}>
         {type === 'success' && <Tick />}
         {type === 'error' && <Cross />}
         <Text>{children}</Text>
      </AlertWrapper>
   );
};

export default Alert;
