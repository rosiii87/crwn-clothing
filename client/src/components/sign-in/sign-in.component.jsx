import React, { useState } from 'react';
import { connect } from 'react-redux';

// import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './sign-in.styles';

import {
  FormTextFullLabel,
  FormTextFullText,
  FormTextFullInput,
  FormMain,
} from '../newsletter/forms.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredemtials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredemtials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>Přihlásit se k účtu</SignInTitle>
      <span>Přihlášení k existujícímu účtu pomocí emailu a hesla</span>

      <FormMain onSubmit={handleSubmit}>
        <FormTextFullLabel>
          <FormTextFullInput
            name="email"
            type="email"
            onChange={handleChange}
            value={email}
            label="email"
            placeholder=" "
            required
          />
          <FormTextFullText>Email:</FormTextFullText>
        </FormTextFullLabel>
        <FormTextFullLabel>
          <FormTextFullInput
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
            label="password"
            placeholder=" "
            required
          />
          <FormTextFullText>Heslo:</FormTextFullText>
        </FormTextFullLabel>
        <ButtonsBarContainer>
          <CustomButton type="submit">Přihlásit</CustomButton>
        </ButtonsBarContainer>
        <ButtonsBarContainer>
          <CustomButton
            type="button" // not to trigger submit
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Přihlásit s Googlem
          </CustomButton>
        </ButtonsBarContainer>
      </FormMain>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
