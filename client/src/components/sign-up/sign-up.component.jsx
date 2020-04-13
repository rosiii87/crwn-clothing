import React, { useState } from 'react';
import { connect } from 'react-redux';

// import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  FormTextFullLabel,
  FormTextFullText,
  FormTextFullInput,
  FormMain,
} from '../newsletter/forms.styles';

import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>Zaregistrovat se</SignUpTitle>
      <span>Založení nového účtu pomocí emailu a hesla:</span>
      <FormMain className="sign-up-form" onSubmit={handleSubmit}>
        <FormTextFullLabel>
          <FormTextFullInput
            type="text"
            name="displayName"
            placeholder=" "
            value={displayName}
            onChange={handleChange}
            label="Display Name"
            required
          />
          <FormTextFullText>Jméno a příjmení</FormTextFullText>
        </FormTextFullLabel>
        <FormTextFullLabel>
          <FormTextFullInput
            type="email"
            name="email"
            placeholder=" "
            value={email}
            onChange={handleChange}
            label="Email"
            required
          />
          <FormTextFullText>Email</FormTextFullText>
        </FormTextFullLabel>
        <FormTextFullLabel>
          <FormTextFullInput
            type="password"
            name="password"
            placeholder=" "
            value={password}
            onChange={handleChange}
            label="Password"
            required
          />
          <FormTextFullText>Heslo</FormTextFullText>
        </FormTextFullLabel>
        <FormTextFullLabel>
          <FormTextFullInput
            type="password"
            name="confirmPassword"
            placeholder=" "
            value={confirmPassword}
            onChange={handleChange}
            label="Confirm Password"
            required
          />
          <FormTextFullText>Potvrzení hesla</FormTextFullText>
        </FormTextFullLabel>
        <CustomButton type="submit">REGISTROVAT SE</CustomButton>
      </FormMain>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
