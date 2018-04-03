import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  IndexRoute,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as routes from 'src/constants/routes';

import LandingPage from './LandingPage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage';
import CollectionPage from './CollectionPage';
import CollectionSinglePage from './CollectionSinglePage';
import NewPage from './NewPage';
import LayoutTopBar from '../components/Layout/LayoutTopBar';

import {auth} from 'src/firebase';
import {boot, logout} from 'src/actions/session';

class Routes extends React.Component {
  componentDidMount(){
    this.props.dispatch(boot())
  }

  render () {
    const { session, location, api } = this.props;
    const { loading } = session;

    //  <Navigation auth={session.auth} />

    return loading ? null : (
      <LayoutTopBar
        auth={session.auth}
        location={location}
        collections={api.collections}
        onLogout={() => this.props.dispatch(logout())}
      >
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path={routes.SIGN_IN} component={SignInPage} />
          <Route exact path={routes.SIGN_UP} component={SignUpPage} />
          {session.auth ? <Route exact path={routes.NEW} component={NewPage} /> : null}
          {session.auth ? <Route exact path={routes.HOME} component={HomePage} /> : null}
          {session.auth ? <Route exact path={routes.COLLECTION} component={CollectionPage} /> : null}
          {session.auth ? <Route exact path={routes.COLLECTION_SINGLE} component={CollectionSinglePage} /> : null}
          <Route render={() => <Redirect to={routes.LANDING}/>} />
        </Switch>
      </LayoutTopBar>
    )
  }
}

function mapStateToProps(state) {
  return {
    session: state.session,
    api: state.api
  }
}

export default withRouter(connect(mapStateToProps)(Routes));
// export default Routes;