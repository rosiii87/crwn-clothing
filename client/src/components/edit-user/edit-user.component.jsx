import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
  SignUpContainer,
  SignUpTitle
} from '../../components/sign-up/sign-up.styles';

import FormInput from '../../components/form-input/form-input.component';

import { editUser } from '../../redux/user/user.actions';

const EditUser = ({ user, editUser }) => {
  const [additionalInfo, setAdditionalInfo] = useState({
    displayName: user.displayName,
    email: user.email,
    city: user.city,
    street: user.street,
    telephone: user.telephone
  });

  // addInfo handlers
  const handleInfoChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    setAdditionalInfo({ ...additionalInfo, [name]: value });
  };

  const [legalCheck, setLegalCheck] = useState({
    news: user.news ? user.news : false
  });

  const handleChecks = event => {
    event.preventDefault();
    const { name } = event.target;
    const value = event.target.checked;

    setLegalCheck({ ...legalCheck, [name]: value });
  };

  const addRef = useRef(additionalInfo);
  addRef.current = additionalInfo;

  const checkRef = useRef(legalCheck);
  checkRef.current = legalCheck;

  const { city, street, telephone } = addRef.current;
  const { news } = checkRef.current;
  const handleEdit = async event => {
    event.preventDefault();
    editUser({
      city: city ? city : '',
      street: street ? street : '',
      telephone: telephone ? telephone : '',
      news
    });
  };
  return (
    <>
      <SignUpContainer>
        <SignUpTitle>Osobní údaje</SignUpTitle>
        <form className="sign-up-form" onSubmit={handleEdit}>
          <FormInput
            type="text"
            name="displayName"
            value={user.displayName}
            onChange={handleInfoChange}
            label={user ? "Damn that's cool name" : 'Full Name'}
            readonly
          />
          <FormInput
            type="email"
            name="email"
            value={user.email}
            onChange={handleInfoChange}
            label="even better"
            readonly
          />
          Kontaktní údaje:
          <FormInput
            type="city"
            name="city"
            onChange={handleInfoChange}
            value={city}
            label="Město"
          />
          <FormInput
            type="street"
            name="street"
            onChange={handleInfoChange}
            value={street}
            label="Ulice a Č.P."
          />
          <FormInput
            type="tel"
            name="telephone"
            onChange={handleInfoChange}
            value={telephone}
            label="Tel. číslo"
          />
          <FormInput
            type="checkbox"
            name="news"
            value={news}
            checked={news ? news : false}
            onChange={handleChecks}
            label="Odběr novinek"
          />
          <button type="submit">ULOŽIT ZMĚNY</button>
        </form>
      </SignUpContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  editUser: additionalData => dispatch(editUser({ additionalData }))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
