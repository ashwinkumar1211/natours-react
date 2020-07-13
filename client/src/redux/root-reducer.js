import { combineReducers } from 'redux';

import tourReducer from './tour/tour.reducer';
import uiReducer from './ui/ui.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
   tour: tourReducer,
   ui: uiReducer,
   user: userReducer,
});

export default rootReducer;
