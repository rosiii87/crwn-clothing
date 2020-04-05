import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from './collection.styles';

const CollectionPage = ({ collection }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const sortPriceAsc = () => {
    const sorted = [...searchResult].sort((a, b) => {
      return a.price - b.price;
    });
    setSearchResult(sorted);
  };

  const sortPriceDsc = () => {
    const sorted = [...searchResult].sort((a, b) => {
      return b.price - a.price;
    });
    setSearchResult(sorted);
  };

  const { title, routeName, items } = collection;

  useEffect(() => {
    console.log('triggered');
    const results = items.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResult(results);
  }, [searchTerm, items]);

  return (
    <CollectionPageContainer>
      <Helmet>
        <title>{title} - collection</title>
        <meta name="description" content={title} />
      </Helmet>
      <CollectionTitle>{title}</CollectionTitle>
      <button onClick={sortPriceAsc}>Od nejlevnějšího</button>
      <button onClick={sortPriceDsc}>Od nejdražšího</button>
      <input
        style={{ marginBottom: '20px' }}
        placeholder="Hledat"
        value={searchTerm}
        type="text"
        onChange={handleChange}
      />
      <CollectionItemsContainer>
        {searchResult[0] ? (
          searchResult.map((item) => (
            <CollectionItem key={item.id} item={item} routeName={routeName} />
          ))
        ) : (
          <p>Žádný název produktu nebosahuje "{searchTerm}"</p>
        )}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
