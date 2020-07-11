import styled, { css } from 'styled-components';

const getColor = (color) => (props) => props.theme[color];

const colorPrimary = getColor('colorPrimary');
const colorPrimaryDark = getColor('colorPrimaryDark');

const GradientBackgound = styled.h1`
   /* Thin White Uppercase */
   color: #fff;
   text-transform: uppercase;
   font-weight: 300;

   /* Multi line Gradient Background */
   span {
      padding: 1rem 1.5rem;
      line-height: 1;
      box-decoration-break: clone;
      background-image: linear-gradient(
         to bottom right,
         rgba(125, 213, 111, 0.85),
         rgba(40, 180, 135, 0.85)
      );
   }
`;

// HEADING VARIATIES

export const Primary = styled(GradientBackgound)`
   font-size: 5rem;
   text-align: center;
   width: 70%;
   margin: 0 auto;
`;

export const Secondary = styled.h2`
   font-size: 2.25rem;
   text-transform: uppercase;
   font-weight: 700;
   background-image: linear-gradient(to right, #7dd56f, #28b487);
   -webkit-background-clip: text;
   background-clip: text;
   color: transparent;
   letter-spacing: 0.1rem;
   line-height: 1.3;
   display: inline-block;

   ${(props) =>
      props.error &&
      css`
         background-image: linear-gradient(to right, #ff7730, #eb4d4b);
         font-size: 3.5rem;
      `}
`;

export const Tertiary = styled(GradientBackgound)`
   font-size: 2.75rem;
   z-index: 10;
`;
