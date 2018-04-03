import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './navigation.scss';

import * as routes from '../constants/routes';

class Navigation extends React.Component {

  
  render() {
    const { onLogout, auth = false } = this.props;
    return  (
      <div className="navigation">
        <ul>
          {auth ? (<li><Link to={routes.HOME}>Home</Link></li>) : null}
          {auth ? (<li><Link to={routes.NEW}>New</Link></li>) : null}
          {auth ? ( <li><a onClick={onLogout}>Sign Out</a></li>) : null}
          {!auth ? (<li><Link to={routes.SIGN_IN}>Sign In</Link></li>): null}
          {!auth ? (<li><Link to={routes.SIGN_UP}>Sign Up</Link></li>): null}
        </ul>
      </div>
    )
  } 
}

export default Navigation;