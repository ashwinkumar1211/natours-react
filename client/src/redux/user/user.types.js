const namespace = '[USER]';

const UserActionTypes = {
   // Login
   LOGIN: `${namespace} LOGIN`,
   LOGIN_SUCCESS: `${namespace} LOGIN_SUCCESS`,
   LOGIN_FAILURE: `${namespace} LOGIN_FAILURE`,

   // Logout
   LOGOUT: `${namespace} LOGOUT`,

   // Sign up
   SIGN_UP: `${namespace} SIGN_UP`,
   SIGN_UP_SUCCESS: `${namespace} SIGN_UP_SUCCESS`,
   SIGN_UP_FAILURE: `${namespace} SIGN_UP_FAILURE`,

   // Auth Token
   SAVE_AUTH_TOKEN: `${namespace} SAVE_AUTH_TOKEN`,
};

export default UserActionTypes;
