import styled, { css } from 'styled-components';

import { default as SpinnerComponent } from '../spinner/spinner.component';

// Colors

const whiteStyles = css`
   background-color: #fff;
   color: #777;

   &:focus {
      background-color: #444;
      color: white;
   }
`;

const greenStyles = css`
   background-color: #55c57a;
   color: #fff;

   &:focus {
      background-color: #2e864b;
   }
`;

// Sizes

const smallStyles = css`
   font-size: 1.4rem;
   padding: 1.25rem 3rem;
   transition: all 0.2s;
`;

// Loading

const setDimensions = (dimensions) => {
   const { width, height } = dimensions;
   if (width !== 0 && height !== 0)
      return css`
         width: ${width}px;
         height: ${height}px;
      `;
};

const loadingStyles = css`
   padding-top: 0;
   padding-bottom: 0;
`;

// BUTTON

export const Button = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;

   font-size: 1.6rem;
   font-weight: 400;
   text-transform: uppercase;
   text-decoration: none;

   padding: 1.4rem 3rem;
   border-radius: 10rem;
   border: none;
   cursor: pointer;
   transition: transform 0.4s;

   

   &:hover {
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
   }

   &:active {
      transform: translateY(-1px);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
   }

   &:focus {
      outline: none;
   }

   ${(props) => props.dimensions && setDimensions(props.dimensions)}
   ${(props) => props.isLoading && loadingStyles}

   ${(props) => props.small && smallStyles}

   ${(props) => props.white && whiteStyles}
   ${(props) => props.green && greenStyles}

`;

// SPINNER

export const Spinner = styled(SpinnerComponent).attrs((props) => ({
   size: props.size - 10,
   color: 'white',
}))``;
