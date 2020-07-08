import { TourActionTypes } from './tour.types';

const INITIAL_STATE = {};

const tourReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case TourActionTypes.ACTION:
         return {
            ...state,
         };

      default:
         return state;
   }
};

export default tourReducer;
