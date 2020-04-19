import styled from 'styled-components';
import { maxMedia, minMedia } from '../../components/styles/mixins';
import { colors } from '../../components/styles/variables';

export const CategoryBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${maxMedia.sm`
  display:none;
  `}
`;

export const WallpaperWall = styled.div`
  width: 100%;
  height: 70rem;
  background-image: url('http://maryzeet.cz/dining_room.webp');
  background-position: center bottom;
  background-size: cover;
  border-bottom: 1rem solid ${colors.almostBlack};
  margin-bottom: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const WallBannerContainer = styled.div`
  display: flex;
  max-width: 118rem;
  width: 100%;
  justify-content: center;
`;
export const WallItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 18rem;
  margin: 0 1rem;
  height: 30rem;
  cursor: pointer;

  :hover > span {
    color: ${colors.primary};
  }
  :hover > img {
    border: 1px solid ${colors.primary};
  }
`;

export const WallItem = styled.img`
  width: 100%;
  height: 25.2rem;
`;

export const WallTitle = styled.h1`
  color: #fff;

  :hover {
    color: ${colors.primary};
  }

  ${maxMedia.sm`
  margin-top: 2rem;
  `}
`;

export const CollectionPageContainer = styled.div`
  margin: auto;
  max-width: 1180px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${maxMedia.sm`
    margin: 0 1rem;
  `}
`;

export const CollectionTitle = styled.h1`
  color: ${colors.greyDark};
  margin: 1rem 0;
`;

export const SearchLabel = styled.label`
  max-width: 59rem;
  width: 100%;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 5rem;
  padding-left: 2rem;
  font-size: 1.6rem;
  text-align: left;
  background-color: transparent;
  color: ${colors.almostBlack};
  border: 1px solid ${colors.greyLight};

  &:focus {
    border: 1px solid ${colors.almostBlack};
    outline: none;
  }

  :focus + span,
  &:not(:placeholder-shown) + span {
    transform: translateY(-170%);
    color: ${colors.primary};
  }
`;

export const InputText = styled.span`
  position: absolute;
  pointer-events: none;
  top: 1.3rem;
  left: 2rem;
  color: ${colors.greyLight};
  transition: 0.2s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
`;

export const CollectionItemsContainer = styled.div`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  & > div {
    min-width: 16rem;
    width: 17rem;
    margin: 2rem 0rem;
  }
  ${minMedia.sm`
  justify-content: start;
  & > div {
    min-width: 23.6rem;
  }
  `}
`;
