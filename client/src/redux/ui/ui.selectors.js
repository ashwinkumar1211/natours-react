const selectPendingActions = (state) => state.ui.pendingActions;
const selectAlerts = (state) => state.ui.alerts;

export const isActionPending = (state, actionFn) => {
   const pendingActions = selectPendingActions(state);
   return pendingActions.includes(actionFn().type);
};

export const getAlert = (state, actionFn) => {
   const alerts = selectAlerts(state);

   if (alerts.length === 0) return { message: undefined, type: undefined };

   const { message, type } = alerts.find((item) => item.actionName === actionFn().type);

   return {
      message,
      type,
   };
};
