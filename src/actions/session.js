import { auth, db } from 'src/firebase'
import { browserHistory } from 'react-router';
import { push } from 'react-router-redux';
import * as routes from 'src/constants/routes';
import {fetchCollections} from './api';

export function boot (email, pw) {
  return (dispatch, getState) => {
    auth.onAuthStateChanged(u => {
      if(u) {
        dispatch({type: 'SESSION/SET_USER', user: {email: u.email}})
        dispatch(fetchCollections());
      } else {
        dispatch({type: 'SESSION/SET_USER', user: false })
      }
    })
  }
}

export function signUp(user){
  return (dispatch, getState) => {
    auth.doCreateUserWithEmailAndPassword(user.email, user.password).then(ref => {
      db.createUser(ref.uid, {
        username: user.username,
        email: user.email
      }).then(res => {
        dispatch(push(routes.LANDING))  
      });
    });
  }
}

export function login(user){
  return (dispatch, getState) => {
    auth.doSignInWithEmailAndPassword(user.email, user.password).then(res => {
      setTimeout(() => {
        dispatch(push(routes.HOME))
      },1)
    });
  }
}

export function logout () {
  return (dispatch, getState) => {
    auth.doSignOut()
    dispatch(push(routes.LANDING))
  } 
}

// export function login (email, pw) {
//   return firebaseAuth().signInWithEmailAndPassword(email, pw)
// }

// export function resetPassword (email) {
//   return firebaseAuth().sendPasswordResetEmail(email)
// }

// export function saveUser (user) {
//   return ref.child(`users/${user.uid}/info`)
//     .set({
//       email: user.email,
//       uid: user.uid
//     })
//     .then(() => user)
// }