import { takeLatest, all, call, put } from 'redux-saga/effects';

import TourActionTypes from './tour.types';

import { fetchToursSuccess, fetchToursFailure } from './tour.actions';
import { startAction, stopAction } from '../ui/ui.actions';

function* fetchToursAsync({ type }) {
   const actionName = type;

   try {
      // Push action into pending ui actions
      yield put(startAction(actionName));

      // Perfrom async ops
      const response = yield fetch(`http://localhost:5000/api/v1/tours/`);
      const data = yield response.json();

      yield put(fetchToursSuccess(data.data.tours));
   } catch (error) {
      yield put(fetchToursFailure(error));
   } finally {
      // Remove action from pending ui actions
      yield put(stopAction(actionName));
   }
}

function* fetchToursStart() {
   yield takeLatest(TourActionTypes.FETCH_TOURS, fetchToursAsync);
}

export function* tourSagas() {
   yield all([call(fetchToursStart)]);
}
