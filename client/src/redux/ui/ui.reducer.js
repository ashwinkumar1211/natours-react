import UIActionTypes from './ui.types';

const INITIAL_STATE = {
   pendingActions: [],
   alerts: [],
};

const uiReducer = (state = INITIAL_STATE, action) => {
   const { pendingActions, alerts } = state;

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

      case UIActionTypes.SHOW_ALERT:
         const { actionName, message, type } = action.payload;
         return {
            ...state,
            alerts: [...alerts, { actionName, message, type }],
         };

      case UIActionTypes.HIDE_ALERT:
         return {
            ...state,
            alerts: alerts.filter((item) => item.actionName !== action.payload.actionName),
         };

      default:
         return state;
   }
};

export default uiReducer;
