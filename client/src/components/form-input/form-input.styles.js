import styled from 'styled-components';

export const Input = styled.input`
   display: block;
   font-size: 1.5rem;
   padding: 1.25rem 1.75rem;
   width: 100%;

   background-color: #f2f2f2;
   border: none;
   border-radius: 4px;
   border-top: 3px solid transparent;
   border-bottom: 3px solid transparent;

   transition: all 0.3s;

   &:focus {
      outline: none;
      border-bottom: 3px solid #55c57a;

      &:placeholder-shown,
      &:invalid {
         border-bottom: 3px solid #ff7730;
      }
   }

   &::placeholder {
      color: #bbb;
   }
`;
