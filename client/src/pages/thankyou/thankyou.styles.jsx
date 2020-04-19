import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { maxMedia } from '../../components/styles/mixins';
import { colors } from '../../components/styles/variables';

export const ThankYouContainer = styled.div`
  max-width: 118rem;
  display: flex;

  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;

  ${maxMedia.sm`
margin: 0 1rem;
`}
`;

export const SummaryContainer = styled.div`
  width: 100%;
  max-width: 59rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${colors.greyLight};
  margin-bottom: 1rem;
  padding: 1rem;

  :hover > span {
    color: ${colors.primary};
  }
`;

export const ImagesContainer = styled.div`
  width: 100%;
  max-width: 118rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ${maxMedia.sm`
  flex-direction: column;
  flex-wrap: unset;
  `}
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;
`;

export const ImageItem = styled.img`
  width: 20rem;
  margin-bottom: 1rem;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.2);
  ${maxMedia.sm`
  width: 28rem;

  `}
`;

export const TextItem = styled.span`
  padding: 0.5rem 0 0.5rem 0;
`;

export const BackLink = styled(Link)`
  text-decoration: underline;
  color: ${colors.primary};
  font-weight: 500;

  :hover {
    color: ${colors.almostBlack};
  }
`;
