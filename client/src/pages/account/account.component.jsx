import React, { useEffect, useState, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectOrdersArray } from '../../redux/orders/orders.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { fetchOrdersStart } from '../../redux/orders/orders.actions';

import Spinner from '../../components/spinner/spinner.component';
import EditUser from '../../components/edit-user/edit-user.component';

const Account = ({ user, fetchOrdersStart, orders }) => {
  useEffect(() => {
    fetchOrdersStart();
  }, [fetchOrdersStart]);

  const [isActive, setActive] = useState(true);
  const toggleActiveBar = () => setActive(!isActive);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <h1> {user.displayName}</h1>
        <span>{user.email}</span>
        <br></br>
        <br></br>
        <button onClick={toggleActiveBar}>Moje objednávky</button>
        <button onClick={toggleActiveBar}>Kontaktní údaje</button>
        <br></br>
        <br></br>
        {isActive ? (
          <>
            <h3>Minulé objednávky</h3>
            {orders.map(order => (
              <table key={order.orderId}>
                <tbody>
                  <tr>
                    <td>{order.orderId}&nbsp;&nbsp;&nbsp;</td>
                    <td>{order.createdAt.split('G')[0]}&nbsp;&nbsp;&nbsp;</td>
                    <td>{order.total} Kč&nbsp;&nbsp;&nbsp;</td>
                    <td>
                      <strong>{order.Status}&nbsp;&nbsp;&nbsp;</strong>
                    </td>
                    <td>
                      <Link to={`/profil/${user.displayName}/${order.orderId}`}>
                        Details
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Route
                        exact
                        path={`/profil/${user.displayName}/${order.orderId}`}
                      >
                        <>
                          {order.cartItems.map(item => (
                            <ul key={item.id}>
                              <li>{item.name}</li>
                              <ul>
                                <li>kusů: {item.quantity}</li>
                                <li>cena: {item.price} Kč</li>
                              </ul>
                            </ul>
                          ))}
                        </>
                      </Route>
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </>
        ) : (
          <EditUser />
        )}
      </Suspense>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  orders: selectOrdersArray,
  user: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  fetchOrdersStart: () => dispatch(fetchOrdersStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
