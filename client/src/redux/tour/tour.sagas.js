import { takeLatest, all, call, put } from 'redux-saga/effects';
import axios from 'axios';

import TourActionTypes from './tour.types';

import { fetchToursSuccess, fetchToursFailure } from './tour.actions';

function* fetchToursAsync() {
   try {
      const response = yield axios.get(`http://localhost:5000/api/v1/tours/`);
      yield put(fetchToursSuccess(response.data.data.tours));
   } catch (error) {
      yield put(fetchToursFailure(error));
   }
}

function* fetchToursStart() {
   console.log('listening to fetch start');
   yield takeLatest(TourActionTypes.FETCH_TOURS_START, fetchToursAsync);
}

export function* tourSagas() {
   yield all([call(fetchToursStart)]);
}
