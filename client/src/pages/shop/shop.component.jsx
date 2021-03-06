import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import {
  fetchCollectionsStart,
  fetchStockStart,
} from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);
const ProductDetailContainer = lazy(() =>
  import('../detail/product-detail.container')
);
const SearchPageContainer = lazy(() =>
  import('../search-result/search-result.container')
);

const ShopPage = ({ fetchCollectionsStart, fetchStockStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
    fetchStockStart();
  }, [fetchCollectionsStart, fetchStockStart]); // render only if fetchcollection start changes -> not to render multiple times

  return (
    <div className="shop-page">
      <Helmet>
        <title>Shop page</title>
        <meta
          name="description"
          content="Shop page where to see all collections"
        />
      </Helmet>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
        <Route
          exact
          path={`${match.path}/:collectionId/:slugId/:productId`}
          component={ProductDetailContainer}
        />
        <Route
          exact
          path={`${match.path}/hledat/:searchTermId`}
          component={SearchPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  fetchStockStart: () => dispatch(fetchStockStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
