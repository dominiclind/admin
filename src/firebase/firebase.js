import * as firebase from 'firebase';
import CONFIG from '../../config/config.json';

console.log(CONFIG);

const prodConfig = {
  ...CONFIG.firebase.production
};

const devConfig = {
  ...CONFIG.firebase.dev
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};