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
