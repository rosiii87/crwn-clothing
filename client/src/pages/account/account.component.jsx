import React, { useEffect, useState, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectOrdersArray } from '../../redux/orders/orders.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { fetchOrdersStart } from '../../redux/orders/orders.actions';

import Spinner from '../../components/spinner/spinner.component';
import EditUser from '../../components/edit-user/edit-user.component';

import { colors } from '../../components/styles/variables';

import {
  TopContainer,
  OrdersYouContainer,
  SummaryContainer,
  BackLink,
  ImagesContainer,
  ProductContainer,
  DetailedInfoContainer,
  ImageItem,
  TextItem,
  RowContainer,
} from './account.styles';

import Carousel from '../../components/carousel/carousel.component';

const Account = ({ user, fetchOrdersStart, orders }) => {
  useEffect(() => {
    fetchOrdersStart();
  }, [fetchOrdersStart]);

  const [isActive, setActive] = useState(true);
  const toggleActiveBar = () => setActive(!isActive);
  // eslint-disable-next-line
  const [embla, setEmbla] = useState(null);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <br />
        <span>{user.email}</span>
        <TopContainer>
          <button
            onClick={toggleActiveBar}
            style={
              isActive
                ? { backgroundColor: `${colors.almostBlack}`, color: '#FFF' }
                : null
            }
          >
            Moje objednávky
          </button>
          <button
            onClick={toggleActiveBar}
            style={
              !isActive
                ? { backgroundColor: `${colors.almostBlack}`, color: '#FFF' }
                : null
            }
          >
            Kontaktní údaje
          </button>
        </TopContainer>
        {isActive ? (
          <OrdersYouContainer>
            <br />
            {orders.map((order) => (
              <>
                <SummaryContainer key={order.orderId}>
                  <span>{order.orderId}</span>
                  <span>{order.createdAt.split('2020')[0]}</span>
                  <span>{order.total} Kč</span>
                  <span>
                    <b>{order.Status}</b>
                  </span>
                  <BackLink to={`/profil/${user.displayName}/${order.orderId}`}>
                    Detaily
                  </BackLink>
                </SummaryContainer>
                <Route
                  exact
                  path={`/profil/${user.displayName}/${order.orderId}`}
                >
                  <ImagesContainer>
                    <Carousel>
                      {order.cartItems.map((item) => (
                        <ProductContainer key={item.id}>
                          <ImageItem src={item.imageUrl} alt={item.name} />
                          <TextItem>
                            <strong>{item.name}</strong>
                          </TextItem>
                          <TextItem>{item.price} Kč</TextItem>
                          <TextItem>{item.quantity} ks</TextItem>
                        </ProductContainer>
                      ))}
                    </Carousel>
                    <DetailedInfoContainer>
                      <RowContainer>
                        <span>Adresa:</span>
                        <span>
                          {order.City}, {order.Street}
                        </span>
                      </RowContainer>
                      <RowContainer>
                        <span>Vytvořeno dne:</span>
                        <span>{order.createdAt.split('G')[0]}</span>
                      </RowContainer>
                      <RowContainer>
                        <span>Celkem:</span>
                        <span>{order.total} Kč</span>
                      </RowContainer>
                      <RowContainer>
                        <span>Platba:</span>
                        <span>{order.Payment}</span>
                      </RowContainer>
                      <RowContainer>
                        <span>Doprava:</span>
                        <span>{order.Doprava}</span>
                      </RowContainer>
                      <RowContainer>
                        <span>Vaše zpráva:</span>
                        <span>{order.message}</span>
                      </RowContainer>
                    </DetailedInfoContainer>
                  </ImagesContainer>
                </Route>
              </>
            ))}
          </OrdersYouContainer>
        ) : (
          <OrdersYouContainer>
            <EditUser />
          </OrdersYouContainer>
        )}
      </Suspense>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  orders: selectOrdersArray,
  user: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrdersStart: () => dispatch(fetchOrdersStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
