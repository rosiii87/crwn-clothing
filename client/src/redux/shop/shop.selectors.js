import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);

// STOCK SELECTORS
export const selectStock = createSelector([selectShop], (shop) => shop.stock);

export const selectByTags = (searchTerm) =>
  createSelector([selectStock], (stock) =>
    stock
      ? stock.filter(({ tags }) => tags.includes(searchTerm.toLowerCase()))
      : []
  );

// ONE TIMERS
// stock update - using only with hard update for firestore
export const selectStockLoading = createSelector(
  [selectShop],
  (shop) => shop.stockLoading
);

export const selectStockLoadingForPreview = createSelector(
  [selectStockLoading],
  (stockLoading) =>
    stockLoading
      ? Object.keys(stockLoading).map((key) => stockLoading[key])
      : []
);
