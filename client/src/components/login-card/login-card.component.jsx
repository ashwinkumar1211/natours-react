import React, { useState } from 'react';

import { Wrapper, Title, Form, Label, Input, Button } from './login-card.styles';

const handleChange = (e, setState, state) => {
   const { value, name } = e.target;
   setState({ ...state, [name]: value });
};

const LoginCard = () => {
   const [state, setState] = useState({ email: '', password: '' });

   const { email, password } = state;

   return (
      <Wrapper>
         <Title>Log into your account</Title>

         <Form>
            <Label htmlFor="email">Email address</Label>
            <Input
               name="email"
               type="email"
               placeholder="you@example.com"
               value={email}
               onChange={(e) => handleChange(e, setState)}
            />

            <Label htmlFor="password">Password</Label>
            <Input
               name="password"
               type="password"
               placeholder="••••••••"
               value={password}
               onChange={(e) => handleChange(e, setState, state)}
            />

            <Button>Log in</Button>
         </Form>
      </Wrapper>
   );
};

export default LoginCard;
