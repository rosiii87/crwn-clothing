import React from 'react';

import {
  BenefitsContainer,
  BenefitContainer,
  BenefitIconPiggy,
  BenefitIconShot,
  BenefitIconOk,
  BenefitText,
} from './benefits.styles';

const Benefits = () => (
  <BenefitsContainer>
    <BenefitContainer>
      <BenefitIconPiggy />
      <BenefitText>Doprava zdarma nad XY</BenefitText>
    </BenefitContainer>
    <BenefitContainer>
      <BenefitIconShot />
      <BenefitText>Výběr z více jak XY produktů</BenefitText>
    </BenefitContainer>
    <BenefitContainer>
      <BenefitIconOk />
      <BenefitText>Dárkové balení zdarma</BenefitText>
    </BenefitContainer>
  </BenefitsContainer>
);

export default Benefits;
