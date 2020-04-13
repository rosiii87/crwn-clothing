import styled from 'styled-components';
import { maxMedia } from '../../components/styles/mixins';
// import { colors } from '../../components/styles/variables';

export const SubscribeContainer = styled.section`
  margin: 8rem auto;
  max-width: 59rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${maxMedia.sm`
  margin: 0 1rem;
`}
`;
