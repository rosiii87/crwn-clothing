import { createSelector } from 'reselect';

const selectWish = state => state.wish;

export const selectWishItems = createSelector(
  [selectWish],
  wish => wish.wishItems
);

export const selectWishItemName = createSelector(
  [selectWishItems],
  wishItems => wishItems[0].name
);

// export const selectCartHidden = createSelector(
//   [selectCart],
//   cart => cart.hidden
// );

export const selectWishItemsCount = createSelector(
  [selectWishItems],
  wishItems =>
    wishItems.reduce(
      (accumalatedQuantity, wishItem) =>
        accumalatedQuantity + wishItem.quantity,
      0
    )
);

export const selectWishTotal = createSelector([selectWishItems], wishItems =>
  wishItems.reduce(
    (accumalatedQuantity, wishItem) =>
      accumalatedQuantity + wishItem.quantity * wishItem.price,
    0
  )
);
