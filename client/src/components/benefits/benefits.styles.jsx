import styled from 'styled-components';
import { maxMedia } from '../../components/styles/mixins';
import { colors } from '../../components/styles/variables';

import { ReactComponent as PiggySVG } from '../../assets/piggy.svg';
import { ReactComponent as ShotSVG } from '../../assets/shot.svg';
import { ReactComponent as OkSVG } from '../../assets/ok.svg';

export const BenefitsContainer = styled.section`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;

export const BenefitContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem;

  :hover > svg {
    opacity: 1;
  }

  :hover > h3 {
    color: ${colors.primary};
  }
`;

export const BenefitIconPiggy = styled(PiggySVG)`
  width: auto;
  height: 6rem;
  margin-bottom: 2rem;
  opacity: 0.65;
`;

export const BenefitIconShot = styled(ShotSVG)`
  width: 6rem;
  height: 6rem;
  margin-bottom: 2rem;

  opacity: 0.65;
`;

export const BenefitIconOk = styled(OkSVG)`
  width: 6rem;
  height: 6rem;
  margin-bottom: 2rem;

  opacity: 0.65;
`;

export const BenefitText = styled.h3`
  text-transform: uppercase;
  color: ${colors.greyDark};
  font-size: 1.6rem;

  ${maxMedia.sm``}
`;
