import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import {
  NavigationMain,
  CheckboxMenu,
  NavigationLabel,
  NavigationBackground,
  NavigationNav,
  NavigationList,
  NavigationItem,
  NavigationButton,
  NavigationIcon,
  NavigationSubText,
} from './stick-menu.styles';

const StickMenu = ({ currentUser, history, sections, signOutStart }) => {
  const handleLink = (url) => {
    history.push(`/${url}`);
    const cb = document.getElementById('navi-toggle');
    return (cb.checked = false);
  };

  return (
    <NavigationMain>
      <CheckboxMenu type="checkbox" id="navi-toggle" />
      <NavigationLabel htmlFor="navi-toggle">
        <NavigationIcon>&nbsp;</NavigationIcon>
      </NavigationLabel>
      <NavigationBackground>&nbsp;</NavigationBackground>
      <NavigationNav>
        <NavigationList>
          {sections.map(({ id, linkUrl, title }) => (
            <NavigationItem key={id}>
              <NavigationButton
                onClick={() => {
                  handleLink(linkUrl);
                }}
              >
                {title}
              </NavigationButton>
            </NavigationItem>
          ))}
          <NavigationItem>
            {currentUser ? (
              <NavigationButton
                onClick={() => {
                  handleLink(`profil/${currentUser.displayName}`);
                }}
              >
                {currentUser.displayName}
              </NavigationButton>
            ) : (
              <NavigationButton
                onClick={() => {
                  handleLink(`signin`);
                }}
              >
                Profil
              </NavigationButton>
            )}
          </NavigationItem>
          {currentUser ? (
            <NavigationItem>
              <NavigationSubText onClick={signOutStart}>
                Odhlásit
              </NavigationSubText>
            </NavigationItem>
          ) : (
            <NavigationItem>
              <NavigationSubText
                onClick={() => {
                  handleLink(`signin`);
                }}
              >
                Přihlásit
              </NavigationSubText>
            </NavigationItem>
          )}
          <NavigationItem>
            <NavigationSubText
              onClick={() => {
                handleLink(`wish-list`);
              }}
            >
              Wish list
            </NavigationSubText>
          </NavigationItem>

          <NavigationItem>
            <NavigationSubText>Oblíbené produkty</NavigationSubText>
          </NavigationItem>
          <NavigationItem>
            <NavigationSubText>Kontakt</NavigationSubText>
          </NavigationItem>
        </NavigationList>
      </NavigationNav>
    </NavigationMain>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StickMenu)
);
