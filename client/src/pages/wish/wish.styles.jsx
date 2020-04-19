import styled from 'styled-components';

import { maxMedia } from '../../components/styles/mixins';
import { colors } from '../../components/styles/variables';

export const WishPageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const WishWall = styled.div`
  max-width: 100%;
  height: 55rem;
  background-image: url('http://maryzeet.cz/dining_room.webp');
  background-position: center bottom;
  background-size: cover;
  border-bottom: 1rem solid ${colors.almostBlack};

  display: flex;
  justify-content: center;
`;

export const WishImage = styled.img`
  margin-top: 3rem;
  height: 65%;

  ${maxMedia.sm`
  margin-top: 1rem;
  `}
`;

export const WishItemsContainer = styled.div`
  max-width: 118rem;
  display: flex;
  flex-direction: column;
  align-items: start;

  margin: 5rem auto 0;

  ${maxMedia.sm`
  margin: 0 1rem;
  `}
`;
