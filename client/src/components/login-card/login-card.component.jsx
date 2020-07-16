import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Wrapper, Title, Form, Label, Input, Button, Alert } from './login-card.styles';

import { login } from '../../redux/user/user.actions';
import { isActionPending, getAlert } from '../../redux/ui/ui.selectors';

const LoginCard = ({ login, isLoading, alert }) => {
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

   const renderAlert = () => {
      const { message, type } = alert;
      return message && <Alert type={type}>{message}</Alert>;
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

            <Button type="submit" isLoading={isLoading} green>
               Log in
            </Button>

            {renderAlert()}
         </Form>
      </Wrapper>
   );
};

const mapDispatchToProps = (dispatch) => ({
   login: (email, password) => dispatch(login(email, password)),
});

const mapStateToProps = (state) => ({
   isLoading: isActionPending(state, login),
   alert: getAlert(state, login),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginCard);
