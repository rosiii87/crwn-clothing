import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
  SignUpContainer,
  // SignUpTitle,
} from '../../components/sign-up/sign-up.styles';

import {
  FormTextFullLabel,
  FormTextFullText,
  FormTextFullInput,
  FormMain,
  FormRadioContainer,
  FormCheckLabel,
  FormCheckHalf,
  FormCustomCheck,
} from '../../components/newsletter/forms.styles';

import CustomButton from '../../components/custom-button/custom-button.component';

import { editUser } from '../../redux/user/user.actions';

const EditUser = ({ user, editUser }) => {
  const [additionalInfo, setAdditionalInfo] = useState({
    displayName: user.displayName,
    email: user.email,
    city: user.city,
    street: user.street,
    telephone: user.telephone,
  });

  // addInfo handlers
  const handleInfoChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setAdditionalInfo({ ...additionalInfo, [name]: value });
  };

  const [legalCheck, setLegalCheck] = useState({
    news: user.news ? user.news : false,
  });

  const handleChecks = (event) => {
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
  const handleEdit = async (event) => {
    event.preventDefault();
    editUser({
      city: city ? city : '',
      street: street ? street : '',
      telephone: telephone ? telephone : '',
      news,
    });
  };
  return (
    <>
      <SignUpContainer>
        <FormMain className="sign-up-form" onSubmit={handleEdit}>
          <FormTextFullLabel>
            <FormTextFullInput
              type="text"
              name="displayName"
              placeholder=" "
              value={user.displayName}
              onChange={handleInfoChange}
              label={user ? 'Hustý jméno' : 'Jméno a příjmení'}
            />
            <FormTextFullText>Jméno a příjmení</FormTextFullText>
          </FormTextFullLabel>
          <FormTextFullLabel>
            <FormTextFullInput
              type="email"
              name="email"
              placeholder=" "
              value={user.email}
              onChange={handleInfoChange}
              label="even better"
              readonly
            />
            <FormTextFullText>Email</FormTextFullText>
          </FormTextFullLabel>
          <span>Kontaktní údaje:</span>
          <br />
          <FormTextFullLabel>
            <FormTextFullInput
              type="city"
              name="city"
              placeholder=" "
              onChange={handleInfoChange}
              value={city}
              label="Město"
            />
            <FormTextFullText>Město</FormTextFullText>
          </FormTextFullLabel>
          <FormTextFullLabel>
            <FormTextFullInput
              type="street"
              name="street"
              placeholder=" "
              onChange={handleInfoChange}
              value={street}
              label="Ulice a Č.P."
            />
            <FormTextFullText>Ulice a Č.P.</FormTextFullText>
          </FormTextFullLabel>
          <FormTextFullLabel>
            <FormTextFullInput
              type="tel"
              name="telephone"
              placeholder=" "
              onChange={handleInfoChange}
              value={telephone}
              label="Tel. číslo"
            />
            <FormTextFullText>Tel. číslo</FormTextFullText>
          </FormTextFullLabel>
          <FormRadioContainer>
            <FormCheckLabel style={{ width: '100%' }}>
              <FormCheckHalf
                type="checkbox"
                name="news"
                value={news}
                checked={news ? news : false}
                onChange={handleChecks}
                label="Odběr novinek"
              />{' '}
              Odebírání novinek
              <FormCustomCheck />
            </FormCheckLabel>
          </FormRadioContainer>
          <CustomButton type="submit">ULOŽIT ZMĚNY</CustomButton>
        </FormMain>
      </SignUpContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  editUser: (additionalData) => dispatch(editUser({ additionalData })),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
