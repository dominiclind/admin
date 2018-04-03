const INITIAL_STATE = {
  collections: [],
  loading: false
};

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'API/FETCH_COLLECTIONS' : {
      return {
      	...state,
      	collections: action.collections,
        loading: false
      }
    }
    default : return state;
  }
}