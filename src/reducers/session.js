const INITIAL_STATE = {
  auth: null,
  loading: true
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SESSION/SET_USER' : {
      return {
      	...state,
      	auth: action.user,
        loading: false
      }
    }
    default : return state;
  }
}