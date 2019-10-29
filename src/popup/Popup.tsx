import * as React from 'react';
import { Switch } from 'react-router';
import { NavLink, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Navbar, Alignment, Button } from '@blueprintjs/core';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css';
import '@blueprintjs/select/lib/css/blueprint-select.css';

import './Popup.scss';
import '../styles/main.scss';

import { useSetIsLoggedInMutation } from '../graphql';
import Login from '../auth/Login';
import AuthRoute from '../components/AuthRoute';
import Watched from '../watched/Watched';
import RecentWatched from './RecentWatched';
import Settings from './Settings';

export default function Popup() {
  const [setLoggedIn] = useSetIsLoggedInMutation({
    variables: { isLoggedIn: false },
  });

  return (
    <React.Fragment>
      <div className="navigation-container">
        <Navbar fixedToTop>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>SeenIt</Navbar.Heading>
            <Navbar.Divider />
            <NavLink to="/">
              <Button minimal>Add item</Button>
            </NavLink>
            <NavLink to="/watched">
              <Button minimal>Watched</Button>
            </NavLink>
            <NavLink to="/settings">
              <Button minimal>Settings</Button>
            </NavLink>
            <Navbar.Divider />
            <Button minimal icon="refresh" onClick={() => chrome.runtime.reload()} />
            <Button minimal icon="log-out" onClick={() => setLoggedIn()} />
          </Navbar.Group>
        </Navbar>
      </div>
      <div className="content-container">
        <Switch>
          <Route exact path="/login" component={Login} />
          <AuthRoute exact path="/" component={RecentWatched} />
          <AuthRoute exact path="/settings" component={Settings} />
          <AuthRoute exact path="/watched" component={Watched} />
        </Switch>
        <ToastContainer />
      </div>
    </React.Fragment>
  );
}
