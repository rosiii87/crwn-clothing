import styled from 'styled-components';
import { maxMedia } from '../../components/styles/mixins';
import { colors } from '../../components/styles/variables';

export const FullWidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${({ black }) =>
    black
      ? `linear-gradient(
    90deg,
    ${colors.almostBlack} 0%,
    #000000 90%
  )`
      : `  linear-gradient(
    90deg,
    ${colors.primary} 0%,
    ${colors.almostBlack} 90%
  )`};

  width: 100%;
  height: 100vh;
`;

export const MiddleContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 118rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${maxMedia.sm`
margin: 0 1rem;
`}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  padding: 2rem;
  height: 100%;
  justify-content: center;

  ${maxMedia.sm`
  width: 100%;
  max-width: unset;
  `}
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50rem;
  width: 50rem;
  background-image: url('http://www.maryzeet.cz/hp-category-1.png');
  background-position: center bottom;
  background-size: cover;

  ${maxMedia.sm`
  display: none;
  `}
`;

export const Title = styled.h1`
  font-size: 9rem;
  line-height: 1;
  color: #fff;
`;

export const Text = styled.span`
  color: #fff;
  font-weight: 500;
  padding-bottom: 3rem;
`;

export const Button = styled.button`
  background-color: transparent;
  width: 100%;
  height: 5rem;
  margin-top: 3rem;
  padding: 0 3.5rem 0 3.5rem;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: 1px solid #ffffff;

  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #ffffff 50%
  );

  background-size: 250%;
  transition: all 0.6s;

  color: white;

  &:hover {
    background-position: 100%;
    border: 1px solid #ffffff;
    color: ${({ black }) => (black ? '#000000' : `${colors.primary}`)};
    border: none;
  }
`;
