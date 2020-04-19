import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { minMedia, maxMedia } from '../styles/mixins';
import { colors } from '../styles/variables';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${minMedia.sm`
  height: 10rem;
  `};
`;

export const LogoContainer = styled(Link)`
  height: 8rem;
  padding 1rem 0rem 1rem 1rem;

  display: flex;
  ${minMedia.sm`
  height: 10rem;
  padding 2rem;

  `}

  ${maxMedia.sm`
  & > span {
    display: none;
  }

  `}
`;

export const MidCotainer = styled.div`
  ${minMedia.sm`
`}
`;

export const SideMenuContainer = styled.div`
  height: 8rem;
  padding 1rem;

  display: flex;


  ${minMedia.sm`
  height: 10rem;
  padding 2rem;

  `}
`;

export const WishMidContainer = styled(Link)`
  width: 5rem;
  height: 5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${minMedia.sm`
   display: none;
  `}
`;

export const BrandName = styled.h1`
  text-transform: unset;
  margin-left: 2rem;
  font-size: 6rem;
  :hover {
    color: #000000;
  }

  ${maxMedia.sm`
  display: none;
  `}
`;

export const StickFake = styled.span`
  background-color: transparent;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  text-align: center;
  ${minMedia.sm`
`}
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  font-weight: 500;

  :hover {
    color: ${colors.primary};
  }
  ${minMedia.sm` 
  `}
`;

export const ButtomLine = styled.div`
  width: 100%;
  height: 2rem;
  background-image: linear-gradient(
    90deg,
    ${colors.primary} 0%,
    ${colors.almostBlack} 90%
  );
  display: flex;
  align-items: center;
  justify-content: center;

  ${minMedia.sm`
height: 3rem;
`}
`;

export const SubMenuLink = styled(Link)`
  color: #fff;

  :hover {
    color: ${colors.lighter};
  }
`;
