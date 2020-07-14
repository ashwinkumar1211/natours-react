import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Wrapper, Title, Form, Label, Input, Button } from './signup-card.styles';

import { signUp } from '../../redux/user/user.actions';
import { isActionPending } from '../../redux/ui/ui.selectors';

const SignUpCard = ({ isLoading, signUp }) => {
   const [state, setState] = useState({ name: '', email: '', password: '', passwordConfirm: '' });

   const { name, email, password, passwordConfirm } = state;

   const handleChange = (e) => {
      const { value, name } = e.target;
      setState({ ...state, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      signUp({ name, email, password, passwordConfirm });
   };

   return (
      <Wrapper>
         <Title>Create a new account</Title>

         <Form onSubmit={handleSubmit}>
            <Label htmlFor="email">Your name</Label>
            <Input
               name="name"
               type="text"
               required
               placeholder="John Doe"
               value={name}
               onChange={handleChange}
            />

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

            <Label htmlFor="passwordConfirm">Confirm Password</Label>
            <Input
               name="passwordConfirm"
               type="password"
               required
               placeholder="••••••••"
               value={passwordConfirm}
               onChange={handleChange}
            />

            <Button type="submit" isLoading={isLoading} green>
               Sign Up {isLoading && 'Loading...'}
            </Button>
         </Form>
      </Wrapper>
   );
};

const mapStateToProps = (state) => ({
   isLoading: isActionPending(state, signUp),
});

const mapDispatchToProps = (dispatch) => ({
   signUp: (userInfo) => dispatch(signUp(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpCard);
