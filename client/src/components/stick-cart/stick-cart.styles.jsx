import styled from 'styled-components';
import { colors } from '../styles/variables';
import { minMedia } from '../styles/mixins';

export const CheckboxMenu = styled.input`
  display: none;

  &:checked ~ div {
    transform: scale(70);

    ${minMedia.sm`
      transform: scale(220);
    `}
  }

  &:checked ~ nav {
    opacity: 1;
    height: 100%;
    top: 0;
    left: 0;

    ${minMedia.sm`
      top: 0;
      left: 0;
    `}
  }
`;

export const NavigationLabel = styled.label`
  background-color: #fff;
  height: 50px;
  width: 50px;
  position: fixed;
  bottom: 15px;
  right: 10px;
  border-radius: 50%;
  z-index: 250;
  box-shadow: 0 10px 30px rgb(0, 0, 0, 0.6);
  cursor: pointer;
  text-align: center;

  ${minMedia.sm`
  bottom: 30px;
  right: 5%;
  `}

  &:hover > span {
    &::before,
    &::after {
      transform: rotate(180deg);
      background-color: ${colors.primary};
    }
  }
`;

export const NavigationNav = styled.nav`
  height: 240px;
  position: fixed;
  bottom: -50%;
  left: 10%;
  z-index: 230;
  overflow-y: scroll;
  width: 100%;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.05, 0.79, 0, 0.98);

  ::-webkit-scrollbar {
    display: none;
  }

  ${minMedia.sm`
    top: 100%;
  `}
`;

export const NavigationButton = styled.button`
    font-size: 36px;
    font-weight: 600;
    padding: 0 15px;
    color: #fff;
    letter-spacing: 3px;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    background-color: transparent;
    border: none;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      rgb(65,65,65, 0.3) 50%
    );
    background-size: 250%;
    transition: all 0.6s;
  }

  &:hover {
    background-position: 100%;
    color: ${colors.primary};
    border: none;
  }
`;

export const NavigationBackground = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  position: fixed;
  bottom: 17px;
  right: 15px;
  background-color: #000;
  z-index: 215;
  transition: transform 0.8s cubic-bezier(0.48, 0.01, 0.38, 0.98);

  ${minMedia.sm`
    bottom: 32px;
    right: 5.2%;
  `}
`;

export const NavigationMain = styled.div``;

export const CartItemsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-content: start;
  flex-wrap: wrap;

  ${minMedia.sm`
    align-content: center;
  `}
`;

export const CartItemContainer = styled.div`
  width: 180px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CartItemImage = styled.img`
width: 100%
height: 250px;
background-color: orangered;
`;

export const ItemText = styled.div`
  color: #fff;
  margin-top: 10px;
  text-transform: uppercase;
  text-align: left;
  font-size: 25px;
`;

export const ItemButton = styled.button`
  color: #fff;
  text-transform: uppercase;
  background-color: transparent;
  font-size: 12px;
  border: none;
  margin-bottom: 5px;
  align-self: flex-end;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export const TotalText = styled.span`
  color: #fff;
  text-transform: uppercase;
  font-size: 25px;
  margin: 20px 0;
  display: flex;
  justify-content: space-evenly;
  align-content: center;

  &:hover {
    color: purple;
  }
`;

export const LowerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const LowerButton = styled.button`
  color: #000;
  text-transform: uppercase;
  background-color: #fff;
  font-size: 16px;
  border: none;
  padding: 10px 10px;
  margin: 20px 10px;
  cursor: pointer;
  max-width: 200px

  &:hover {
    color: purple;
  }
`;
