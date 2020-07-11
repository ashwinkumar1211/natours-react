import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import SVG from '../svg/svg.component';

export const Wrapper = styled.div`
   background-color: transparent;
   width: 80%;
   margin: 0 auto;
   height: 7.5rem;

   display: flex;
   justify-content: space-between;
   align-items: center;

   &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #444;
      height: 7.5rem;
      width: 100%;
      z-index: -1;
   }
`;

export const Logo = styled(Link)`
   height: 3.2rem;
   order: -1;
   cursor: pointer;

   img {
      height: 3.2rem;
   }
`;

// Link

export const NavLink = styled(Link)`
   color: #f7f7f7;
   text-transform: uppercase;
   font-size: 1.6rem;
   text-decoration: none;
   display: inline-flex;
   align-items: center;

   transition: all 0.2s;
   font-weight: 300;
   background: none;
   border: none;
   cursor: pointer;

   ${(props) =>
      props.cta === true &&
      css`
         padding: 0.7rem 2.5rem;
         border-radius: 10rem;
         border: 1px solid currentColor;
         transition: all 0.3s;
      `}

   &:not(:last-child) {
      margin-right: 3rem;
   }

   &:hover,
   &:active {
      transform: translateY(-2px);
      text-shadow: 0 0.7rem 1rem black;

      ${(props) =>
         props.cta &&
         css`
            background-color: #f7f7f7;
            color: #777;
            text-shadow: none;
            border-color: #f7f7f7;
         `}
   }

   &:focus {
      outline: none;
   }
`;

// SEARCH

export const SearchWrapper = styled.form`
   flex: 0 0 35%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const SearchButton = styled(SVG).attrs((props) => ({ url: props.url }))`
   background: none;
   border: none;
   cursor: pointer;

   height: 2rem;
   width: 2rem;
   fill: #f7f7f7;
`;

export const SearchInput = styled.input`
   background: none;
   font-size: 1.5rem;
   color: #f7f7f7;
   border-bottom: 1px solid #999;
   transition: all 0.3s;

   border: 1px solid currentColor;
   border-radius: 20px;
   padding: 0.8rem 2rem;

   width: 90%;
   margin-right: -3.5rem;

   &::placeholder {
      color: #999;
   }

   &:focus {
      outline: none;
      width: 100%;
      box-shadow: 0 2px 1rem rgba(0, 0, 0, 0.2);
   }
`;

// User

export const UserNav = styled.div`
   flex: 0 1 35%;
   justify-content: flex-end;
   display: flex;

   & > * {
      justify-content: flex-end;
   }
`;

export const UserImage = styled.img`
   height: 3.5rem;
   width: 3.5rem;
   border-radius: 50%;
   margin-right: 1rem;
`;
