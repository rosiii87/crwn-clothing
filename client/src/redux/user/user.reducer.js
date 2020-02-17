import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  newUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS: // either can be true
      return {
        ...state,
        currentUser: action.payload,
        error: null // clearing the error if first is error
      };
    case UserActionTypes.SIGN_OUT_START:
      return {
        ...state,
        currentUser: null,
        error: null
      };
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE: // either can be true
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;