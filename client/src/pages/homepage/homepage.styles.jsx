import styled from 'styled-components';
import { maxMedia } from '../../components/styles/mixins';
import { colors } from '../../components/styles/variables';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MiddleContainer = styled.div`
  width: 100%;
  max-width: 118rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem auto;

  ${maxMedia.sm`
margin: 0 1rem;
`}
`;

export const WallpaperWall = styled.div`
  width: 100%;
  height: 70rem;
  background-image: url('http://maryzeet.cz/dining_room.webp');
  background-position: center bottom;
  background-size: cover;
  border-bottom: 1rem solid ${colors.almostBlack};

  display: flex;
  justify-content: center;
`;

export const WallBannerContainer = styled.div`
  width: 100%;
  max-width: 118rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;

  ${maxMedia.sm`
  margin: 0 1rem;
  `}
`;
export const WallTitle = styled.h1`
  color: #fff;
  cursor: pointer;
  margin-bottom: 1rem;

  :hover {
    color: ${colors.primary};
  }

  ${maxMedia.sm`
  margin: 1.5rem 0;
  `}
`;

export const WallSpan = styled.span`
  color: ${colors.greyBetween};
  padding-bottom: 5rem;
  :hover {
    color: ${colors.primary};
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  ${maxMedia.sm`
  flex-direction: column;
  `}
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 28rem;
  cursor: pointer;

  > h4 {
    color: ${colors.greyBetween};
    text-transform: uppercase;
  }

  :hover > h4 {
    color: ${colors.primary};
  }

  :hover > img {
    border: 1px solid ${colors.primary};
  }

  ${maxMedia.sm`
  max-width: unset;

   > h4 {
     padding-bottom: 2.4rem;
     font-size: 2.4rem;
   }
  `}
`;

export const CategoryImage = styled.img`
  width: 100%;
  margin-bottom: 2rem;
  height: 100%;
  border: 1px solid ${colors.almostBlack};

  ${maxMedia.sm`
  display: none;
  `}
`;
