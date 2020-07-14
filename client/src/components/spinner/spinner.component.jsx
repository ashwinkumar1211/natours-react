import React from 'react';

import { SpinnerOverlay, SpinnerSVG } from './spinner.styles';

const Spinner = ({ className, size, color }) => (
   <SpinnerOverlay size={size} className={className}>
      <SpinnerSVG color={color} />
   </SpinnerOverlay>
);

export default Spinner;
