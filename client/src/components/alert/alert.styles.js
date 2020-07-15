import styled, { css } from 'styled-components';

import { ReactComponent as TickSVG } from '../../assets/tick.svg';
import { ReactComponent as CrossSVG } from '../../assets/cross.svg';

const successStyles = css`
   background-color: #55c57a;
`;

const errorStyles = css`
   background-color: #eb4d4b;
`;

const IconStyles = css`
   height: 2.5rem;
   width: 2.5rem;
   fill: white;
   margin-right: 0.8rem;
`;

export const AlertWrapper = styled.div`
   font-size: 1.6rem;
   background-color: #333;
   color: white;
   padding: 0 2rem;
   border-radius: 5px;
   font-weight: 400;
   white-space: nowrap;

   display: flex;
   align-items: center;
   justify-content: center;

   ${(props) => props.success && successStyles}
   ${(props) => props.error && errorStyles}
`;

export const Text = styled.span`
   padding: 0.9rem 0;
`;

export const Tick = styled(TickSVG)`
   ${IconStyles}
`;

export const Cross = styled(CrossSVG)`
   ${IconStyles}
`;
