import { call, all } from 'redux-saga/effects';

import { tourSagas } from './tour/tour.sagas';

export default function* rootSaga() {
   yield all([call(tourSagas)]);
}
