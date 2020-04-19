import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { maxMedia } from '../styles/mixins';
import { colors } from '../styles/variables';

import { ReactComponent as ShoppingIconSVG } from '../../assets/nail.svg';

export const WishContainer = styled(Link)`
  width: 5rem;
  height: 5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 2rem;

  ${maxMedia.sm`
  display: none;
  `}
`;

export const WishIconStyle = styled(ShoppingIconSVG)`
  width: 4rem;
  height: 4rem;
`;

export const WishCountContainer = styled.span`
  position: absolute;
  font-size: 1.4rem;
  font-weight: bold;
  bottom: 2.5rem;
  left: 2.5rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: ${colors.primary};
  border: 1px solid ${colors.almostBlack};
`;
