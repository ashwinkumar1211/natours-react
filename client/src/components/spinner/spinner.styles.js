import styled, { css } from 'styled-components';

import { ReactComponent as SVG } from '../../assets/spinner-1.5x.svg';

export const SpinnerOverlay = styled.div`
   height: 20rem;
   width: 20rem;

   ${({ size }) =>
      size &&
      css`
         height: ${`${size}px`};
         width: ${`${size}px`};
      `}
`;

export const SpinnerSVG = styled(SVG)`
   height: 100%;
   width: 100%;

   ${({ color }) =>
      color &&
      css`
         path {
            fill: ${color};
         }
      `}
`;
