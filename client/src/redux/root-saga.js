import { call, all } from 'redux-saga/effects';

import { tourSagas } from './tour/tour.sagas';
import { userSagas } from './user/user.sagas';
import { uiSagas } from './ui/ui.sagas';

export default function* rootSaga() {
   yield all([call(tourSagas), call(userSagas), call(uiSagas)]);
}
