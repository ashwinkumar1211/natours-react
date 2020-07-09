// #faf9f9

import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 80%;
   margin: 0 auto;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   padding-top: 6rem;
   font-size: 1.6rem;

   & > * {
      margin-bottom: 8rem;
   }
`;

export const SpinnerContainer = styled.div`
   width: 100%;
   height: 60vh;
   display: flex;
   justify-content: center;
   align-items: center;
`;
