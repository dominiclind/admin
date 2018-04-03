import { db } from './firebase';

// User API

export const createUser = (id, user) =>
  db.ref(`user/${id}`).set(user);

export const push = (ref, object) =>
  db.ref(ref).push(object);

export const get = (ref, id) =>
  db.ref(ref).once('value');

export const set = (ref, object) =>
  db.ref(ref).set(object);

export const onceGetUsers = () =>
  db.ref('user').once('value');

// Other db APIs ...