import styled, { css } from 'styled-components';

const Button = styled.a`
   &,
   &:link,
   &:visited {
      display: inline-block;
      font-size: 1.6rem;
      font-weight: 400;
      text-transform: uppercase;
      text-decoration: none;

      padding: 1.4rem 3rem;
      border-radius: 10rem;
      border: none;
      cursor: pointer;
      transition: all 0.4s;

      ${(props) =>
         props.small &&
         css`
            background-color: #55c57a;
            color: #fff;
            font-size: 1.4rem;
            padding: 1.25rem 3rem
            transition: all 0.2s;
         `}
   }

   &:hover {
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);

      ${(props) =>
         props.small &&
         css`
            background-color: #7dd56f;
         `}
   }

   &:active {
      transform: translateY(-1px);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
   }

   &:focus {
      outline: none;
      background-color: #2e864b;
   }
`;

// COLORS

export const White = styled(Button)`
   background-color: #fff;
   color: #777;

   &::after {
      background-color: #fff;
   }
`;

export const Green = styled(Button).attrs({ small: 'true' })`
   background-color: #55c57a;
   color: #fff;

   &::after {
      background-color: #55c57a;
   }
`;

// SIZES
