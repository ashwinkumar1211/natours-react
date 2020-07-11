import styled from 'styled-components';

import FormInput from '../form-input/form-input.component';

import * as Headings from '../../styles/_headings';
import * as Buttons from '../../styles/_buttons';

// CARD

export const Wrapper = styled.div`
   max-width: 55rem;
   background-color: #fff;
   box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);
   padding: 5rem 7rem;
   border-radius: 5px;
`;

// FORM

export const Form = styled.form``;

export const Title = styled(Headings.Secondary)`
   margin-bottom: 4.5rem;
`;

export const Label = styled.label`
   display: block;
   font-size: 1.6rem;
   font-weight: 700;
   margin-bottom: 0.75rem;
`;

export const Input = styled(FormInput)`
   margin-bottom: 3rem;
`;

export const Button = styled(Buttons.Green)``;
