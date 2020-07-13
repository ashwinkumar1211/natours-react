import { call, all } from 'redux-saga/effects';

import { tourSagas } from './tour/tour.sagas';
import { userSagas } from './user/user.sagas';

export default function* rootSaga() {
   yield all([call(tourSagas), call(userSagas)]);
}
