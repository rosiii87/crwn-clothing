import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { selectCurrentUser } from './redux/user/user.selectors';
// import { checkUserSession } from './redux/user/user.actions';
import { selectCartItemsCount } from './redux/cart/cart.selectors';

// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
// import { addCollectionAndDocuments } from './firebase/firebase.utils';

import ThankYouPage from './pages/thankyou/thankyou.component';
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);

const App = ({ currentUser, cartItemsCount }) => {
  // useEffect(() => {
  //   checkUserSession();
  // }, [checkUserSession]);

  // // IMPORT SHOP DAT WITH MOUNT
  // useEffect(() => {
  //   addCollectionAndDocuments(
  //     'collections',
  //     collectionsArray.map(({ title, items }) => ({ title, items }))
  //   );
  // }, []);

  return (
    <div>
      <GlobalStyle />
      <Header />
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
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
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
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartItemsCount: selectCartItemsCount
  // collectionsArray: selectCollectionsForPreview
});

// const mapDispatchToProps = dispatch => ({
//   checkUserSession: () => dispatch(checkUserSession())
// });

export default connect(mapStateToProps)(App);
