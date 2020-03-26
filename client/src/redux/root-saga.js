import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';
import { ordersSagas } from './orders/orders.sagas';
import { wishSagas } from './wish/wish.sagas';

export default function* rootSaga() {
  yield all([
    call(shopSagas),
    call(userSagas),
    call(cartSagas),
    call(ordersSagas),
    call(wishSagas)
  ]);
}

// all takes and array of sagas
// we could yield them separately -> but that would go 1by1
