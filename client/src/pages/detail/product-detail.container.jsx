import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import ProductDetail from './product-detail.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

// NOT USING THIS CONTAINER SO FAR
const ProductDetailContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ProductDetail);

export default ProductDetailContainer;
