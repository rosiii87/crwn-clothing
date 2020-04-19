import styled from 'styled-components';
import { maxMedia } from '../../components/styles/mixins';
import { colors } from '../../components/styles/variables';

export const CheckoutPageContainer = styled.div`
  max-width: 118rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;

  button {
    margin-left: auto;
    margin: 0 0 3.5rem 0;
  }

  ${maxMedia.sm`
  margin: 0 1rem;
  `}
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

// used in wish components
export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const SemiTotalContainer = styled.span`
  margin-left: auto;
  ${maxMedia.xs`
  margin: auto;
`};
`;

export const TotalContainer = styled.div`
  margin-top: 2rem;
  margin-left: auto;
  font-size: 3.6rem;
  color: ${colors.almostBlack};
  ${maxMedia.xs`
  font-size: 2.4rem;
  margin: 2rem auto;
  width: 100%;
  padding 1rem 0;
  color: white;
  background-image: linear-gradient(
    90deg,
    ${colors.primary} 0%,
    ${colors.almostBlack} 90%
  );
`};
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;

export const InformativeText = styled.span`
  margin-bottom: 2.5rem;
`;
