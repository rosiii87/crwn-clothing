import styled from 'styled-components';
import { maxMedia } from '../../components/styles/mixins';
// import { colors } from '../../components/styles/variables';

export const LatestContainer = styled.div`
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

export const ProductsContainer = styled.div`
  display: flex;
`;
