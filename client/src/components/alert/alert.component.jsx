import React from 'react';

import { AlertWrapper, Tick, Cross, Text } from './alert.styles';

const Alert = ({ className, children, success, error }) => {
   return (
      <AlertWrapper className={className} success={success} error={error}>
         {success && <Tick />}
         {error && <Cross />}
         <Text>{children}</Text>
      </AlertWrapper>
   );
};

export default Alert;
