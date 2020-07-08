import { combineReducers } from 'redux';

import tourReducer from './tour/tour.reducer';

const rootReducer = combineReducers({
   tour: tourReducer,
});

export default rootReducer;
