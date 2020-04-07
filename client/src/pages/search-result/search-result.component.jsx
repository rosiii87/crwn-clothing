import React from 'react';
import { connect } from 'react-redux';
// import { Helmet } from 'react-helmet';

import { selectByTags } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from '../collection/collection.styles';

import CollectionItem from '../../components/collection-item/collection-item.component';

const SearchPage = ({ history, tag, searchResult }) => {
  return (
    <>
      <CollectionPageContainer>
        <CollectionTitle>Výsledky hledání pro "{tag}"</CollectionTitle>
        <button
          style={{ marginBottom: '20px', maxWidth: '100px', height: '30px' }}
          onClick={() => history.push(`/`)}
        >
          Zpět
        </button>

        <p>Nalezeno {searchResult.length} produktů </p>

        {/* <Link to={'/'}>
          <a>Zpět</a>
        </Link> */}
        <CollectionItemsContainer>
          {searchResult.map((item) => (
            <CollectionItem
              key={item.id}
              item={item}
              routeName={item.collection.toLowerCase()}
            />
          ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    </>
  );
};

const mapStateToProps = (state, ownProps) => ({
  tag: ownProps.match.params.searchTermId,
  searchResult: selectByTags(ownProps.match.params.searchTermId)(state),
});

export default connect(mapStateToProps, null)(SearchPage);
