import styled from 'styled-components';
import { minMedia } from '../styles/mixins';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 3rem;
  align-items: center;
  max-width: 118rem;
  width: 100%;
`;

export const TitleContainer = styled.h1`
  margin: 3rem auto;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
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
