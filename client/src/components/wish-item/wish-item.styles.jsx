import styled from 'styled-components';

import { colors } from '../styles/variables';
import { maxMedia } from '../styles/mixins';

export const WhishListItemContainer = styled.div`
  max-width: 100%;
  width: 118rem;
  display: flex;
  justify-content: space-evenly;
  height: 10rem;
  border: 1px solid ${colors.greyLight};
  padding: 5rem 0rem;
  margin: 7rem 0rem;
  font-size: 20px;
  align-items: center;

  ${maxMedia.sm`
    margin: 5.5rem 0rem;


  `}

  ${maxMedia.xs`
  border: none;
  margin: 2rem 0rem;
  padding: 1rem 0rem;
  height: unset;
  flex-direction: column;
  justify-content: start;
`}
`;

export const ImageContainer = styled.div`
  width: 15rem;

  img {
    width: 100%;
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.2);
  }

  ${maxMedia.xs`
      width: 28rem;
      margin: auto;

      img {
        width: 100%;
        height: 100%;
      }
`}
`;

export const TextContainer = styled.span`
  width: 17%;
  ${maxMedia.xs`
  width: unset;
`}
`;

export const AddToCart = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-weight: 500;
  :hover {
    color: ${colors.primary};
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;

    :hover {
      color: ${colors.primary};
    }
  }
`;

export const RemoveButtonContainer = styled.div`
  cursor: pointer;

  ${maxMedia.xs`
  order: -1;


`}
`;
