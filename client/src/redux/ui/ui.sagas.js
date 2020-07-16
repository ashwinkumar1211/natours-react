import { takeEvery, call, all, put, delay } from 'redux-saga/effects';
import UIActionTypes from './ui.types';

import { showAlert, hideAlert } from './ui.actions';

function* alertAsync({ payload }) {
   const { actionName, message, type, duration = 5000 } = payload;

   console.log({ payload });

   yield put(showAlert(actionName, message, type));
   yield delay(duration);
   yield put(hideAlert(actionName));
}

// SAGA LISTENERS

function* alert() {
   yield takeEvery(UIActionTypes.ALERT, alertAsync);
}

export function* uiSagas() {
   yield all([call(alert)]);
}
