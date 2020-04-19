import styled from 'styled-components';
import { maxMedia } from '../../components/styles/mixins';
import { colors } from '../../components/styles/variables';

export const SearchContainer = styled.div`
  height: 50rem;
  max-width: 118rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    padding: 5rem 1rem 2rem;
  }

  ${maxMedia.sm`
  margin: 0 1rem;
  `}
`;

export const TagsContainer = styled.div`
width: 100%
max-width: 59rem;
display: flex;
justify-content: start;
flex-wrap: wrap;
`;

export const TagButton = styled.button`
  padding: 1rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: none;
  background-color: ${colors.lighter};
  color: #ffffff;
  cursor: pointer;

  :hover {
    background-color: ${colors.primary};
  }
`;
