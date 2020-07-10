import React from 'react';

const SVG = ({ className, url }) => (
   <svg className={className}>
      <use xlinkHref={url}></use>
   </svg>
);

export default SVG;
