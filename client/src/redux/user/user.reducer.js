import UserActionTypes from './user.types';

const INITIAL_STATE = {
   errorMessage: '',
   userDetails: {},
   authToken: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      // FAILURE
      case UserActionTypes.LOGIN_FAILURE:
      case UserActionTypes.SIGN_UP_FAILURE:
         return {
            ...state,
            errorMessage: action.payload,
         };

      // SUCCESS
      case UserActionTypes.LOGIN_SUCCESS:
      case UserActionTypes.SIGN_UP_SUCCESS:
         return {
            ...state,
            errorMessage: '',
            userDetails: action.payload,
         };

      // AUTH
      case UserActionTypes.SAVE_AUTH_TOKEN:
         return {
            ...state,
            authToken: action.payload,
         };

      default:
         return state;
   }
};

export default userReducer;
