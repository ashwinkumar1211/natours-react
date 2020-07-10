import React from 'react';

import { SpinnerOverlay, SpinnerSVG } from './spinner.styles';

const Spinner = ({ className, size }) => (
   <SpinnerOverlay size={size} className={className}>
      <SpinnerSVG />
   </SpinnerOverlay>
);

export default Spinner;
