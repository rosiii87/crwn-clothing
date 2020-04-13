import React from 'react';

import { SubscribeContainer } from './newsletter.styles';
import {
  FormTextFullLabel,
  FormTextFullText,
  FormTextFullInput,
} from './forms.styles';

import { CustomButtonContainer } from '../custom-button/custom-button.styles';

const NewsletterSub = () => {
  return (
    <SubscribeContainer>
      <h1>Newsletter</h1>
      <FormTextFullLabel>
        <FormTextFullInput placeholder=" " type="email" />
        <FormTextFullText>Email:</FormTextFullText>
      </FormTextFullLabel>
      <CustomButtonContainer>Přihlásit k odběru</CustomButtonContainer>
    </SubscribeContainer>
  );
};

export default NewsletterSub;
