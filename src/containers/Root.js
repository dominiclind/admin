import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes';
import { ConnectedRouter } from 'react-router-redux';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}