import styled from 'styled-components';

export const SignInContainer = styled.div`
  margin: 3rem auto;
  width: 100%;
  max-width: 59rem
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const SignInTitle = styled.h2`
  text-transform: uppercase;
  + span {
    margin-bottom: 2.5rem;
  }
`;

export const ButtonsBarContainer = styled.div`
  margin: 0 0 2.5rem 0;
`;
