import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import NewsletterSub from './components/newsletter/newsletter.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { selectCurrentUser } from './redux/user/user.selectors';
// import { checkUserSession } from './redux/user/user.actions';
import { selectCartItemsCount } from './redux/cart/cart.selectors';
import { selectWishItemsCount } from './redux/wish/wish.selectors';

// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
// import { selectStockLoadingForPreview } from './redux/shop/shop.selectors';
// import { addCollectionAndDocuments } from './firebase/firebase.utils';

const ThankYouPage = lazy(() => import('./pages/thankyou/thankyou.component'));
const Account = lazy(() => import('./pages/account/account.component'));
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const WishList = lazy(() => import('./pages/wish/wish.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);

const App = ({
  currentUser,
  cartItemsCount,
  wishItemsCount,
  // collectionsArray,
  // stockArray,
}) => {
  // useEffect(() => {
  //   checkUserSession();
  // }, [checkUserSession]);

  // IMPORT SHOP DAT WITH MOUNT
  // useEffect(() => {
  //   addCollectionAndDocuments(
  //     'collections',
  //     collectionsArray.map(({ title, items }) => ({
  //       title,
  //       items,
  //     }))
  //   );
  // }, []);

  // useEffect(() => {
  //   addCollectionAndDocuments(
  //     'stock',
  //     stockArray.map(
  //       ({ id, name, imageUrl, price, stock, collection, tags }) => ({
  //         id,
  //         name,
  //         imageUrl,
  //         price,
  //         stock,
  //         collection,
  //         tags,
  //       })
  //     )
  //   );
  // }, []);

  return (
    <div>
      <GlobalStyle />
      <Header currentUser={currentUser} />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route
              exact
              path="/checkout"
              render={() =>
                cartItemsCount > 0 ? <CheckoutPage /> : <Redirect to="/" />
              }
            />
            <Route
              exact
              path="/wish-list"
              render={() =>
                wishItemsCount > 0 ? <WishList /> : <Redirect to="/" />
              }
            />

            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
              }
            />
            <Route
              exact
              path="/profil"
              render={() =>
                !currentUser ? <Redirect to="/signin" /> : <Account />
              }
            />
            <Route
              exact
              path="/profil/:userId"
              render={() =>
                !currentUser ? <Redirect to="/signin" /> : <Account />
              }
            />
            <Route
              exact
              path="/profil/:userId/:orderId"
              render={() =>
                !currentUser ? <Redirect to="/signin" /> : <Account />
              }
            />
            <Route
              exact
              path="/thankyou"
              render={() =>
                currentUser ? <ThankYouPage /> : <Redirect to="/" />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      {currentUser ? (
        currentUser.news === true ? null : (
          <NewsletterSub />
        )
      ) : (
        <NewsletterSub />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItemsCount: selectCartItemsCount,
  wishItemsCount: selectWishItemsCount,
  // stockArray: selectStockLoadingForPreview,
  // collectionsArray: selectCollectionsForPreview,
});

// const mapDispatchToProps = dispatch => ({
//   checkUserSession: () => dispatch(checkUserSession())
// });

export default connect(mapStateToProps)(App);
