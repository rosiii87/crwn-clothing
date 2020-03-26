export const addItemToWish = (wishItems, wishItemToAdd) => {
  const existingWishItem = wishItems.find(
    wishItem => wishItem.id === wishItemToAdd.id
  );
  if (existingWishItem) {
    return wishItems.map(wishItem =>
      wishItem.id === wishItemToAdd.id
        ? { ...wishItem, quantity: wishItem.quantity + 1 }
        : wishItem
    );
  }
  return [...wishItems, { ...wishItemToAdd, quantity: 1 }];
};

export const removeItemFromWish = (wishItems, wishItemToRemove) => {
  const existingWishItem = wishItems.find(
    wishItem => wishItem.id === wishItemToRemove.id
  );

  if (existingWishItem.quantity === 1) {
    return wishItems.filter(wishItem => wishItem.id !== wishItemToRemove.id);
  }

  return wishItems.map(wishItem =>
    wishItem.id === wishItemToRemove.id
      ? { ...wishItem, quantity: wishItem.quantity - 1 }
      : wishItem
  );
};
