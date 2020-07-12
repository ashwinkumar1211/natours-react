const selectPendingActions = (state) => state.ui.pendingActions;

export const isActionPending = (state, actionFn) => {
   const pendingActions = selectPendingActions(state);
   return pendingActions.includes(actionFn().type);
};
