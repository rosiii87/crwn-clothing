import styled from 'styled-components';
import { maxMedia, minMedia } from '../styles/mixins';
import { colors } from '../styles/variables';

export const LatestContainer = styled.div`
  height: 70rem;
  max-width: 118rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    padding: 5rem 1rem 2rem;
  }

  ${maxMedia.sm`
  margin: 0 1rem;
  `}
`;

export const ProductsContainer = styled.div`
  display: flex;
`;

export const ProductContainer = styled.div`
  position: relative;

  ${minMedia.sm`
  &:hover > button {
    background-position: 100%;
    border: 1px solid #ffffff;
    color: #ffffff;
    border: none;
    opacity: 1;
  }
  `}
`;

export const Button = styled.button`
  position: absolute;
  bottom: 4rem;
  left: 0.65rem;

  background-color: transparent;
  width: 95%;
  height: 5rem;
  padding: 0 3.5rem 0 3.5rem;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: 2px solid ${colors.primary};
  color: ${colors.primary};
  opacity: 0;

  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    ${colors.primary} 50%
  );

  background-size: 250%;
  transition: all 0.6s;

  ${maxMedia.sm`
  background-image: unset;
  background-color: ${colors.primary};
  color: #ffffff;
  opacity: 1;
  `}
`;
