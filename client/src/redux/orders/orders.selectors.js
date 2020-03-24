import { createSelector } from 'reselect';

const selectOrders = state => state.orders;

export const selectOrdersArray = createSelector(
  [selectOrders],
  orders => orders.orders
);

export const selectAreOrdersFetching = createSelector(
  [selectOrders],
  orders => orders.isFetching
);

export const selectOrdersAreLoaded = createSelector(
  [selectOrders],
  orders => !!orders.orders
);
