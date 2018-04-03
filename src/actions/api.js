import { auth, db } from 'src/firebase'
import { browserHistory } from 'react-router';
import { push } from 'react-router-redux';
import * as routes from 'src/constants/routes';

export function fetchCollections () {
  return (dispatch, getState) => {
 		db.get().then(res => {
			const collections = Object.keys(res.val()).map(key => key);

			dispatch({type: 'API/FETCH_COLLECTIONS',  collections})
		})
  }
}
