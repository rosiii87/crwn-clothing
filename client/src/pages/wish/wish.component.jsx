import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

// import { Helmet } from 'react-helmet';

import {
  WishPageContainer,
  WishItemsContainer,
  WishWall,
  WishImage,
} from './wish.styles';

import Carousel from '../../components/carousel/carousel.component';

import WishItem from '../../components/wish-item/wish-item.component';

// import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectWishItems } from '../../redux/wish/wish.selectors';

const WishList = ({ wishItems }) => {
  return (
    <WishPageContainer>
      <WishWall>
        <Carousel>
          {wishItems.map((wishItem) => (
            <WishImage key={wishItem.id} src={wishItem.imageUrl} />
          ))}
        </Carousel>
      </WishWall>
      <WishItemsContainer>
        {wishItems.map((wishItem) => (
          <WishItem key={wishItem.id} wishItem={wishItem} />
        ))}
      </WishItemsContainer>
    </WishPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  //   user: selectCurrentUser,
  wishItems: selectWishItems,
});

export default connect(mapStateToProps)(WishList);
