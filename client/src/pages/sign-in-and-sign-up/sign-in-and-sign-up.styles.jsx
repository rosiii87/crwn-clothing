import styled from 'styled-components';
import { maxMedia } from '../../components/styles/mixins';

export const SignInAndSignUpContainer = styled.div`
  margin: auto;
  max-width: 118rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${maxMedia.sm`
margin: 0 1rem;
`}
`;
