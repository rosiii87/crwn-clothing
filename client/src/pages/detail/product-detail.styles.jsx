import styled from 'styled-components';
import { maxMedia, minMedia } from '../../components/styles/mixins';
import { colors } from '../../components/styles/variables';

export const DetailPageContainer = styled.div`
  width: 100%;
  max-width: 118rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto;

  > h1 {
    font-size: 9rem;
    line-height: 1.1;
    margin-bottom: 3rem;

    ${maxMedia.sm`
    font-size: 6rem;
    `}
  }
`;

export const BreadCrumbs = styled.div`
  max-width: 59rem;
  width: 100%
  margin-top: 1rem;
`;

export const ProductDetailContainer = styled.div`
max-width: 118rem;
width: 100%;
display: flex
justify-content: space-between;
margin-bottom: 6rem;

${maxMedia.sm`
flex-direction: column
justify-content: start
align-items: center;
`}
`;

export const ProductImageContainer = styled.div`
  max-width: 59rem;
  width: 100%;
`;

export const ProductDetailsContainer = styled.div`
  max-width: 59rem;
  margin: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  ${maxMedia.sm`
  align-items: center;
  > h2 {
    font-size: 3.6rem;
    font-weight: 600;
  } 
  `}
`;

export const HeroImage = styled.img`
  width: 40rem;
  height: 56rem;
  border: 1px solid ${colors.almostBlack};

  ${maxMedia.sm`
  width: 28rem;
  height: 39.2rem;
  `}
`;

export const Text = styled.span`
  text-align: left;

  ${maxMedia.sm`
  text-align: center;
  `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  max-width: 29.5rem;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;

  > button {
    margin-bottom: 1.5rem;
  }
`;

export const OtherProductsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 118rem;
`;

export const MoreDetailsContainer = styled.div`
  max-width: 118rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 50rem;
  ${minMedia.sm`
> * {
  text-align: left;
}
`}

  ${maxMedia.sm`
align-items: center;
margin: 0 1rem;

`}
`;

export const MoreParametersContainer = styled.div`
  max-width: 118rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40rem;
  margin: 0 1rem;

  ${minMedia.sm`
  align-items: unset;
  margin: unset;
  > * {
    text-align: right;
  }
  `}
`;
