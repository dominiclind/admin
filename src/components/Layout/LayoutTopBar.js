import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './layout-topbar.scss';

import CONFIG from 'config/config.json';
import {db} from 'src/firebase';

import * as routes from 'src/constants/routes';

const matchRoute = (string,route) => route.indexOf(string.toLowerCase()) > -1;

export default class LayoutTopbar extends Component {
	constructor(props) {
	  super(props);
	}
	render() {
		const { onLogout, collections = [], auth = false, location } = this.props;

		return (
			<div className="layout-topbar">

				<div className="topbar">
					<div className="logo" style={{backgroundImage: `url(${CONFIG.logo_url})`}} />
					<ul className="nav">
	          {auth ? (<li className={`${matchRoute('home',location.pathname) ? 'active' : ''}`}><Link to={routes.HOME}>Home</Link></li>) : null}
						{auth ? collections.map(key => {
							return (
								<li className={`collection-item ${matchRoute(key,location.pathname) ? 'active' : ''}`} key={key}>
									<Link to={`/collection/${key}`}>
										{key}
									</Link>
								</li>
							)
						}) : null}
					</ul>
					<ul className="actions">	
	          {auth ? (<li className={`${matchRoute('new',location.pathname) ? 'active' : ''}`}><Link to={routes.NEW}>New</Link></li>) : null}
	          {auth ? (<li><a onClick={onLogout}>Sign Out</a></li>) : null}
	          {!auth ? (<li className={`${matchRoute('login',location.pathname) ? 'active' : ''}`}><Link to={routes.SIGN_IN}>Sign In</Link></li>): null}
	          {!auth ? (<li className={`${matchRoute('register',location.pathname) ? 'active' : ''}`}><Link to={routes.SIGN_UP}>Sign Up</Link></li>): null}
					</ul>

				</div>

				<div className="layout-topbar__content">
					{this.props.children}
				</div>
			</div>
		);
	}
}
