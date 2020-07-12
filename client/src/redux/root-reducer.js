import { combineReducers } from 'redux';

import tourReducer from './tour/tour.reducer';
import uiReducer from './ui/ui.reducer';

const rootReducer = combineReducers({
   tour: tourReducer,
   ui: uiReducer,
});

export default rootReducer;
