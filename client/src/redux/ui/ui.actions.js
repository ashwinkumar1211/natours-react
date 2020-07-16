const { default: UIActionTypes } = require('./ui.types');

export const startAction = (actionName) => ({
   type: UIActionTypes.START_ACTION,
   payload: {
      name: actionName,
   },
});

export const stopAction = (actionName) => ({
   type: UIActionTypes.STOP_ACTION,
   payload: {
      name: actionName,
   },
});

export const showAlert = (actionName, message, type) => ({
   type: UIActionTypes.SHOW_ALERT,
   payload: { actionName, message, type },
});

export const hideAlert = (actionName) => ({
   type: UIActionTypes.HIDE_ALERT,
   payload: { actionName },
});

// SAGA ACTIONS

export const alert = (actionName, message, type, duration) => ({
   type: UIActionTypes.ALERT,
   payload: { actionName, message, type, duration },
});
