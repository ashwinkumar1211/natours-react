import UserActionTypes from './user.types';

export const loginSuccess = (user) => ({
   type: UserActionTypes.LOGIN_SUCCESS,
   payload: user,
});

export const loginFailure = (errorMessage) => ({
   type: UserActionTypes.LOGIN_FAILURE,
   payload: errorMessage,
});

export const signUpSuccess = (user) => ({
   type: UserActionTypes.SIGN_UP_SUCCESS,
   payload: user,
});

export const signUpFailure = (errorMessage) => ({
   type: UserActionTypes.SIGN_UP_FAILURE,
   payload: errorMessage,
});

export const saveAuthToken = (token) => ({
   type: UserActionTypes.SAVE_AUTH_TOKEN,
   payload: token,
});

export const logout = () => ({
   type: UserActionTypes.LOGOUT,
});

// SAGA ACTIONS

export const login = (email, password) => ({
   type: UserActionTypes.LOGIN,
   payload: { email, password },
});

export const signUp = (userInfo) => {
   return {
      type: UserActionTypes.SIGN_UP,
      payload: userInfo,
   };
};
