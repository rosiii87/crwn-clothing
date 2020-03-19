import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection; // as we cant join strings and var here -> need to add description to meta later (from feed)
  return (
    <CollectionPageContainer>
      <Helmet>
        <title>{title} - collection</title>
        <meta name="description" content={title} />
      </Helmet>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
