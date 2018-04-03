import { auth } from './firebase';

export const currentUser = auth.currentUser;

// auth listener
export const onAuthStateChanged = (cb) =>
  auth.onAuthStateChanged(cb);
// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) => {
	return new Promise((resolve, reject) => {
		auth.createUserWithEmailAndPassword(email, password).then(res => {
			resolve(res);
		});
	})
}

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
  auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);