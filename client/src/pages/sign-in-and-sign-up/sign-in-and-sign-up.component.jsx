import React from 'react';
import { Helmet } from 'react-helmet';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <Helmet>
      <title>Sign in - Sign up</title>
      <meta name="description" content="Sign in to your account on this page" />
    </Helmet>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
