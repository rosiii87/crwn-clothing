import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { maxMedia } from '../styles/mixins';

import { ReactComponent as ShoppingIconSVG } from '../../assets/heart.svg';

export const WishContainer = styled(Link)`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${maxMedia.sm`
  display: none;
  `}
`;

export const WishIconStyle = styled(ShoppingIconSVG)`
  width: 24px;
  height: 24px;
`;

export const WishCountContainer = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 16px;
`;
