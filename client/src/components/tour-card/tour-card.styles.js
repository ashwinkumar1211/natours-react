import styled from 'styled-components';

import SVG from '../svg/svg.component';

import * as Buttons from '../../styles/_buttons';
import * as Heading from '../../styles/_headings';

// CARD WRAPPER

export const Wrapper = styled.div`
   max-width: 35rem;
   border-radius: 3px;
   overflow: hidden;

   box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.1);
   background-color: #fff;
   display: flex;
   flex-direction: column;
`;

// CARD HEADER

export const Header = styled.div`
   position: relative;
`;

export const Image = styled.div`
   position: relative;
   height: 22rem;
   clip-path: polygon(0 0, 100% 0%, 100% 83%, 0% 98%);

   div {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to right bottom, #7dd56f, #28b487);
      opacity: 0.7;
   }

   img {
      object-fit: cover;
      height: 100%;
      width: 100%;
   }
`;

export const Title = styled(Heading.Tertiary)`
   width: 70%;
   text-align: right;
   position: absolute;
   bottom: 1rem;
   right: 2rem;
`;

// CARD DETAILS

export const Body = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-row-gap: 1.75rem;
   grid-column-gap: 2rem;
   padding: 2.5rem 3rem;
`;

export const SubHeading = styled.h4`
   grid-column: 1 / -1;
   font-size: 1.2rem;
   text-transform: uppercase;
   font-weight: 700;
`;

export const Description = styled.p`
   grid-column: 1 / -1;
   font-size: 1.5rem;
   font-style: italic;
   margin-top: -1rem;
   margin-bottom: 0.75rem;
`;

export const Detail = styled.div`
   display: flex;
   align-items: center;
   font-size: 1.3rem;
`;

export const Icon = styled(SVG)`
   margin-right: 0.7rem;
   height: 2rem;
   width: 2rem;
   fill: #55c57a;
`;

// CARD FOOTER

export const Footer = styled.div`
   background-color: #f7f7f7;
   padding: 2.5rem 3rem;
   border-top: 1px solid #f1f1f1;
   font-size: 1.4rem;
   display: grid;
   grid-template-columns: auto 1fr;
   grid-column-gap: 1rem;
   grid-row-gap: 1rem;
   margin-top: auto;
`;

export const Value = styled.span`
   font-weight: 700;
   margin-right: 4px;
`;

export const Text = styled.span`
   color: #999;
`;

export const Price = styled.p``;

export const Ratings = styled.p`
   grid-row: 2 / 3;
`;

export const Button = styled(Buttons.Green).attrs({ small: 'true' })`
   grid-row: 1 / 3;
   justify-self: end;
   align-self: center;
`;
