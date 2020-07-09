import React from 'react';

import { SpinnerOverlay, SpinnerSVG } from './spinner.styles';

const Spinner = ({ size }) => (
   <SpinnerOverlay size={size}>
      <SpinnerSVG />
   </SpinnerOverlay>
);

export default Spinner;
