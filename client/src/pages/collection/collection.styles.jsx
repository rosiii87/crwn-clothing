import styled from 'styled-components';
import { maxMedia, minMedia } from '../../components/styles/mixins';
import { colors } from '../../components/styles/variables';

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
