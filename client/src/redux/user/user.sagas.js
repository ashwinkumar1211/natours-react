import { takeLatest, all, call, put } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import {
   loginSuccess,
   loginFailure,
   signUpSuccess,
   signUpFailure,
   saveAuthToken,
} from './user.actions';
import { startAction, stopAction, alert } from '../ui/ui.actions';

function* loginUserAsync({ type, payload }) {
   const actionName = type;

   try {
      // Push action into pending ui actions
      yield put(startAction(actionName));

      // Perform async op
      const options = {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(payload),
      };

      const response = yield fetch(`http://localhost:5000/api/v1/users/login`, options);

      const data = yield response.json();

      // Handle Authentication failure
      if (data.status === 'fail') {
         throw Error(data.message);
      }

      yield put(loginSuccess(data.data.user));
      yield put(saveAuthToken(data.token));

      yield put(alert(actionName, 'Login success', 'success'));
   } catch (error) {
      yield put(loginFailure(error.message));
      yield put(alert(actionName, error.message, 'error'));
   } finally {
      // Remove action from pending ui actions
      yield put(stopAction(actionName));
   }
}

function* signUpUserAsync({ type, payload }) {
   const actionName = type;

   try {
      // Push action into pending ui actions
      yield put(startAction(actionName));

      // Perform async op
      const options = {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(payload),
      };

      const response = yield fetch(`http://localhost:5000/api/v1/users/signup`, options);

      const data = yield response.json();

      // Handle Authentication failure
      if (data.status === 'error') {
         if (data.error.code === 11000) throw Error('Email already exists');
      }

      console.log(data);

      yield put(signUpSuccess(data.data.user));
      yield put(saveAuthToken(data.token));
      yield put(alert(actionName, 'Sign up success', 'success'));
   } catch (error) {
      console.log(error);
      yield put(signUpFailure(error.message));
      yield put(alert(actionName, error.message, 'error'));
   } finally {
      // Remove action from pending ui actions
      yield put(stopAction(actionName));
   }
}

// SAGA LISTENERS

function* loginUser() {
   yield takeLatest(UserActionTypes.LOGIN, loginUserAsync);
}

function* signUpUser() {
   yield takeLatest(UserActionTypes.SIGN_UP, signUpUserAsync);
}

export function* userSagas() {
   yield all([call(loginUser), call(signUpUser)]);
}
