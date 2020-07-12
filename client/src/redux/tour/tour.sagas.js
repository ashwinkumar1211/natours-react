import { takeLatest, all, call, put } from 'redux-saga/effects';
import axios from 'axios';

import TourActionTypes from './tour.types';

import { fetchToursSuccess, fetchToursFailure } from './tour.actions';
import { startAction, stopAction } from '../ui/ui.actions';

function* fetchToursAsync(...args) {
   const actionName = args[0].type;

   try {
      // Push action into pending ui actions
      yield put(startAction(actionName));

      // Perfrom async op
      const response = yield axios.get(`http://localhost:5000/api/v1/tours/`);
      yield put(fetchToursSuccess(response.data.data.tours));

      // Remove action from pending ui actions
   } catch (error) {
      yield put(fetchToursFailure(error));
   } finally {
      yield put(stopAction(actionName));
   }
}

function* fetchToursStart() {
   yield takeLatest(TourActionTypes.FETCH_TOURS, fetchToursAsync);
}

export function* tourSagas() {
   yield all([call(fetchToursStart)]);
}
