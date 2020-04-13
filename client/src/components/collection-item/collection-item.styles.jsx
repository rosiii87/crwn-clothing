import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';
import { maxMedia } from '../styles/mixins';

export const CollectionItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 33rem;
  align-items: center;
  position: relative;
  padding: 2rem 1rem;

  &:hover {
    .image {
      opacity: 0.9;
    }

    button {
      opacity: 0.9;
      display: flex;
    }
  }

  ${maxMedia.sm`
  min-height: 22.4rem;
  height: 23.8rem;


  &:hover {
    .image {
      opacity: unset;
    }

    button {
      opacity: 0.9;
    }
  }
  `}
`;

export const AddWishButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.9;
  position: absolute;
  top: 0;
  display: none;

  ${maxMedia.sm`
    display: block;
    opacity: 0.9;
    min-width: unset;
  `}
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.9;
  position: absolute;
  bottom: 0;
  display: none;

  ${maxMedia.sm`
  display: block;
  opacity: 0.9;
  min-width: unset;
  }
  `}
`;

export const BackgroundLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

// NOT USING below
// export const CollectionFooterContainer = styled.div`
//   width: 100%;
//   height: 5%;
//   display: flex;
//   justify-content: space-between;
//   font-size: 18px;
// `;

// export const NameContainer = styled.span`
//   width: 80%;
//   margin-bottom: 15px;
// `;

// export const PriceContainer = styled.span`
//   width: 20%;
//   text-align: right;
// `;
