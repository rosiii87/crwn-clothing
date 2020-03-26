import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectWishItemsCount } from '../../redux/wish/wish.selectors';

import { WishIconStyle, WishCountContainer } from './wish-icon.styles';

const WishIcon = ({ wishCount }) => (
  <>
    <WishIconStyle />
    <WishCountContainer>{wishCount}</WishCountContainer>
  </>
);

const mapStateToProps = createStructuredSelector({
  wishCount: selectWishItemsCount
});

export default connect(mapStateToProps, null)(WishIcon);
