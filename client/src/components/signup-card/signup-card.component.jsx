import React, { useState } from 'react';

import { Wrapper, Title, Form, Label, Input, Button } from './signup-card.styles';

const handleChange = (e, setState) => {
   const { value, name } = e.target;
   setState({ [name]: value });
};

const SignUpCard = () => {
   const [state, setState] = useState({ email: '', password: '', confirmPassword: '' });

   const { email, password, confirmPassword } = state;

   return (
      <Wrapper>
         <Title>Create a new account</Title>

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
               onChange={(e) => handleChange(e, setState)}
            />

            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
               name="confirmPassword"
               type="password"
               placeholder="••••••••"
               value={confirmPassword}
               onChange={(e) => handleChange(e, setState, state)}
            />

            <Button>Sign Up</Button>
         </Form>
      </Wrapper>
   );
};

export default SignUpCard;
