import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Wrapper, Title, Form, Label, Input, Button } from './login-card.styles';

import { login } from '../../redux/user/user.actions';
import { isActionPending } from '../../redux/ui/ui.selectors';

const LoginCard = ({ login, isLoading }) => {
   const [state, setState] = useState({ email: '', password: '' });
   const { email, password } = state;

   const handleChange = (e) => {
      const { value, name } = e.target;
      setState({ ...state, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      login(email, password);
   };

   return (
      <Wrapper>
         <Title>Log into your account</Title>

         <Form onSubmit={handleSubmit}>
            <Label htmlFor="email">Email address</Label>
            <Input
               name="email"
               type="email"
               required
               placeholder="you@example.com"
               value={email}
               onChange={handleChange}
            />

            <Label htmlFor="password">Password</Label>
            <Input
               name="password"
               type="password"
               required
               placeholder="••••••••"
               value={password}
               onChange={handleChange}
            />

            <Button as="button" type="submit">
               Log in {isLoading && 'Loading...'}
            </Button>
         </Form>
      </Wrapper>
   );
};

const mapDispatchToProps = (dispatch) => ({
   login: (email, password) => dispatch(login(email, password)),
});

const mapStateToProps = (state) => ({
   isLoading: isActionPending(state, login),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginCard);
