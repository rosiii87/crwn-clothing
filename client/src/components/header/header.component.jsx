import React from 'react';

import WishIcon from '../wish-icon/wish-icon.component';
import StickMenu from '../stick-menu/stick-menu.component';
import StickCart from '../stick-cart/stick-cart.component';

import { ReactComponent as Logo } from '../../assets/racoon.svg';

import {
  HeaderContainer,
  LogoContainer,
  MidCotainer,
  SideMenuContainer,
  ButtomLine,
  BrandName,
  WishMidContainer,
  StickFake,
} from './header.styles';

import { WishContainer } from '../wish-icon/wish-icon.styles';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo style={{ height: '83.35%' }} />
          <StickFake>&nbsp;</StickFake>
        </LogoContainer>

        <MidCotainer>
          <BrandName>MYWALL.cz</BrandName>
          <WishMidContainer to="/wish-list">
            <WishIcon />
          </WishMidContainer>
        </MidCotainer>

        <SideMenuContainer>
          <WishContainer to="/wish-list">
            <WishIcon />
          </WishContainer>
          <StickFake>&nbsp;</StickFake>
          <StickMenu />
          <StickCart />
        </SideMenuContainer>
      </HeaderContainer>
      <ButtomLine />
    </>
  );
};

export default Header;
