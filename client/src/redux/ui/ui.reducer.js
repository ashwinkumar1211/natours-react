import UIActionTypes from './ui.types';

const INITIAL_STATE = {
   pendingActions: [],
};

const uiReducer = (state = INITIAL_STATE, action) => {
   const { pendingActions } = state;

   switch (action.type) {
      case UIActionTypes.START_ACTION:
         return {
            ...state,
            pendingActions: [...pendingActions, action.payload.name],
         };

      case UIActionTypes.STOP_ACTION:
         return {
            ...state,
            pendingActions: pendingActions.filter((item) => item !== action.payload.name),
         };

      default:
         return state;
   }
};

export default uiReducer;
