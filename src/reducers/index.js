// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import session from './session';
import users from './users';
import api from './api';

const rootReducer = combineReducers({
	session,
	users,
	api,
	routing: routerReducer
});

export default rootReducer;