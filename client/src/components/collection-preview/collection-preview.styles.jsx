import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin: 0 auto 25px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  max-width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1400px) {
    max-width: 75%;
  }

  @media screen and (max-width: 800px) {
    max-width: unset;
    margin: unset;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;
