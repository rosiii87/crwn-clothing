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
    height: 100vh;
    top: 0;

    ${minMedia.sm`
      top: -50%;
    `}
  }

  &:checked + label > span {
    background-color: transparent;

    &::before {
      top: 0;
      transform: rotate(135deg);
      background-color: ${colors.primary};
    }
    &::after {
      top: 0;
      transform: rotate(-135deg);
      background-color: ${colors.primary};
    }
  }
`;

export const NavigationLabel = styled.label`
  background-color: #fff;
  height: 5rem;
  width: 5rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  border-radius: 50%;
  z-index: 200;
  box-shadow: 0 1rem 6rem rgb(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;

  ${minMedia.sm`
    top: 2rem;
    right: 2rem;
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
  height: 0;
  position: fixed;
  top: -50%;
  left: 0;
  z-index: 175;

  width: 100%;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.05, 0.79, 0, 0.98);

  ${minMedia.sm`
    top: -100%
    transform: translate(50%, 50%);
  `}
`;

export const NavigationList = styled.ul`
  position: absolute;
  top: 10%;
  left: 0;
  list-style: none;
  text-align: left;
`;

export const NavigationItem = styled.li`
  margin: 5px;
`;

export const NavigationSubText = styled.span`
  text-align: left;
  font-size: 1.8rem;
  padding-left: 0.5rem;
  color: grey;
  cursor: pointer;

  transition: all 0.8 0.4;

  &:hover {
    color: ${colors.primary};
  }
  ${minMedia.sm`
    font-size: 3rem;
  `}
`;

export const NavigationButton = styled.button`
    font-family: 'steelfishregular';
    font-size: 3.6rem;
    font-weight: 700;
    letter-spacing: .2rem;
    text-align: left;
    padding: 0 .5rem .5rem .5rem;
    color: #fff;

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

  ${minMedia.sm`
    font-size: 4.8rem;
  `}
`;

export const NavigationBackground = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  position: fixed;
  top: 1.7rem;
  right: 1.5rem;
  background-color: #000;
  z-index: 150;
  transition: transform 0.8s cubic-bezier(0.48, 0.01, 0.38, 0.98);

  ${minMedia.sm`
    top: 2.5rem;
    right: 2.5rem;
  `}
`;

export const NavigationMain = styled.div``;

export const NavigationIcon = styled.span`
  position: relative;
  margin-top: 2.5rem;
  width: 2.5rem;
  height: 0.2rem;
  background-color: #000;
  display: inline-block;

  &::before,
  &::after {
    width: 2.5rem;
    height: 0.2rem;
    background-color: #000;
    display: inline-block;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }
  &::before {
    top: -1rem;
  }
  &::after {
    top: 1rem;
  }
`;
