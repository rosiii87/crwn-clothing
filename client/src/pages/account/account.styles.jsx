import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { maxMedia } from '../../components/styles/mixins';
import { colors } from '../../components/styles/variables';

export const TopContainer = styled.div`
  max-width: 118rem;
  display: flex;
  margin: 3.5rem auto;

  > button {
    font-size: 1.6rem;
    width: 100%;
    height: 5rem;
    cursor: pointer
    border: 1px solid ${colors.greyDark};
    background-color: transparent;
  }

  ${maxMedia.sm`
margin: 2rem 1rem;
`}
`;

export const OrdersYouContainer = styled.div`
  max-width: 118rem;
  display: flex;

  flex-direction: column;
  align-items: center;
  margin: 5rem auto 12rem;

  ${maxMedia.sm`
margin: 0 1rem;
`}
`;

export const SummaryContainer = styled.div`
  width: 100%;
  max-width: 118rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${colors.greyDark};
  margin-bottom: 1rem;
  padding: 1rem;

  > span {
    width: 20%;
  }

  ${maxMedia.sm`
  > span:nth-child(2) {
      display: none;
  }
  > span {
    width: 25%;
  }
`}
`;

export const ImagesContainer = styled.div`
  width: 100%;
  max-width: 118rem;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 5rem;

  ${maxMedia.sm`
  flex-direction: column;
  flex-wrap: unset;
  `}
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0rem;
`;

export const DetailedInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 5rem;
  margin-top: 2rem;

  ${maxMedia.sm`
  margin-left: unset;
  width: 100%;
  `}
`;

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid ${colors.greyLight};

  :hover {
    color: ${colors.primary};
  }
`;

export const ImageItem = styled.img`
  width: 28rem;
  margin: auto;
  border: 1px solid ${colors.almostBlack};
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.2);
  ${maxMedia.sm`

  `}
`;

export const TextItem = styled.span`
  padding-top: 1rem;
`;

export const BackLink = styled(Link)`
  text-decoration: underline;
  color: ${colors.primary};
  font-weight: 500;

  :hover {
    color: ${colors.almostBlack};
  }
`;
