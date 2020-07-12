import TourActionTypes from './tour.types';

const INITIAL_STATE = {
   tours: [],
   errorMessage: '',
};

const tourReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case TourActionTypes.FETCH_TOURS_FAILURE:
         return {
            ...state,
            errorMessage: action.payload,
         };

      case TourActionTypes.FETCH_TOURS_SUCCESS:
         return {
            ...state,
            tours: action.payload,
         };

      default:
         return state;
   }
};

export default tourReducer;
