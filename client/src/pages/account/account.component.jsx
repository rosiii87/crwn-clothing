import React, { useEffect, useRef, useState, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectOrdersArray } from '../../redux/orders/orders.selectors';

import { fetchOrdersStart } from '../../redux/orders/orders.actions';

import Spinner from '../../components/spinner/spinner.component';

import {
  SignUpContainer,
  SignUpTitle
} from '../../components/sign-up/sign-up.styles';

import FormInput from '../../components/form-input/form-input.component';

import { editUser } from '../../redux/user/user.actions';

const Account = ({ user, fetchOrdersStart, orders, editUser }) => {
  useEffect(() => {
    fetchOrdersStart();
  }, [fetchOrdersStart]);

  const [isActive, setActive] = useState(true);
  const toggleActiveBar = () => setActive(!isActive);

  const [additionalInfo, setAdditionalInfo] = useState({
    displayName: user.displayName,
    email: user.email,
    city: user.city,
    street: user.street,
    telephone: user.telephone
  });

  // addInfo handlers
  const handleInfoChange = event => {
    event.preventDefault();
    const { name, value } = event.target;

    setAdditionalInfo({ ...additionalInfo, [name]: value });
  };

  const [legalCheck, setLegalCheck] = useState({
    news: user.news ? user.news : false
  });

  const handleChecks = event => {
    event.preventDefault();
    const { name } = event.target;
    const value = event.target.checked;

    setLegalCheck({ ...legalCheck, [name]: value });
  };

  const addRef = useRef(additionalInfo);
  addRef.current = additionalInfo;

  const checkRef = useRef(legalCheck);
  checkRef.current = legalCheck;

  const { city, street, telephone } = addRef.current;
  const { news } = checkRef.current;
  const handleEdit = async event => {
    event.preventDefault();
    editUser({
      city: city ? city : '',
      street: street ? street : '',
      telephone: telephone ? telephone : '',
      news
    });
  };

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
              <table key={order.id}>
                <tbody>
                  <tr>
                    <td>{order.id}&nbsp;&nbsp;&nbsp;</td>
                    <td>{order.createdAt.split('G')[0]}&nbsp;&nbsp;&nbsp;</td>
                    <td>{order.total} Kč&nbsp;&nbsp;&nbsp;</td>
                    <td>
                      <strong>{order.Status}&nbsp;&nbsp;&nbsp;</strong>
                    </td>
                    <td>
                      <Link to={`/profil/${user.displayName}/${order.id}`}>
                        Details
                      </Link>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <Route
                        exact
                        path={`/profil/${user.displayName}/${order.id}`}
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
          <SignUpContainer>
            <SignUpTitle>Osobní údaje</SignUpTitle>
            <form className="sign-up-form" onSubmit={handleEdit}>
              <FormInput
                type="text"
                name="displayName"
                value={user.displayName}
                onChange={handleInfoChange}
                label={user ? "Damn that's cool name" : 'Full Name'}
                readonly
              />
              <FormInput
                type="email"
                name="email"
                value={user.email}
                onChange={handleInfoChange}
                label="even better"
                readonly
              />
              Kontaktní údaje:
              <FormInput
                type="city"
                name="city"
                onChange={handleInfoChange}
                value={city}
                label="Město"
              />
              <FormInput
                type="street"
                name="street"
                onChange={handleInfoChange}
                value={street}
                label="Ulice a Č.P."
              />
              <FormInput
                type="tel"
                name="telephone"
                onChange={handleInfoChange}
                value={telephone}
                label="Tel. číslo"
              />
              <FormInput
                type="checkbox"
                name="news"
                value={news}
                checked={news ? news : false}
                onChange={handleChecks}
                label="Odběr novinek"
              />
              <button type="submit">ULOŽIT ZMĚNY</button>
            </form>
          </SignUpContainer>
        )}
      </Suspense>
    </>
    // some container from styles
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  orders: selectOrdersArray
});

const mapDispatchToProps = dispatch => ({
  fetchOrdersStart: () => dispatch(fetchOrdersStart()),
  editUser: additionalData => dispatch(editUser({ additionalData }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
