import styled, { css } from 'styled-components';
import { maxMedia } from '../styles/mixins';
import { colors } from '../styles/variables';

const buttonStyles = css`
  background-image: linear-gradient(
    120deg,
    ${colors.primary} 0%,
    ${colors.primary} 50%,
    #000000 50%
  );

  background-size: 250%;
  transition: all 0.6s;

  color: white;
  border: none;

  &:hover {
    background-position: 100%;
    background-color: #000000;
    color: white;
    border: none;
  }
`;

const invertedButtonStyles = css`
  background-image: linear-gradient(
    120deg,
    ${colors.greyDark} 0%,
    ${colors.greyDark} 50%,
    ${colors.primary} 50%
  );

  background-size: 250%;
  transition: all 0.6s;

  color: white;
  border: none;

  &:hover {
    background-position: 100%;
    background-color: ${colors.primary};
    color: white;
  }
`;

const googleSignInStyles = css`
  background-image: linear-gradient(
    120deg,
    #4285f4 0%,
    #4285f4 50%,
    #357ae8 50%
  );

  background-size: 250%;
  transition: all 0.6s;

  color: white;
  border: none;

  &:hover {
    background-position: 100%;
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 16.5rem;
  width: 100%;
  height: 5rem;
  padding: 0 3.5rem 0 3.5rem;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${maxMedia.xl`
  `}

  ${maxMedia.sm`
  `}

  ${getButtonStyles}
`;

// const invertedButtonStyles = css`
//   background-color: ${colors.greyDark};
//   color: white;
//   border: 1px solid ${colors.greyDark}

//   &:hover {
//     background-color:  ${colors.primary};
//     color: white;
//     border: none;
//   }
// `;
