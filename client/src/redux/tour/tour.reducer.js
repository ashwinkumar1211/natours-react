import TourActionTypes from './tour.types';

const INITIAL_STATE = {
   tours: [],
   isFetching: false,
   errorMessage: '',
};

const tourReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case TourActionTypes.FETCH_TOURS_START:
         return {
            ...state,
            isFetching: true,
         };

      case TourActionTypes.FETCH_TOURS_FAILURE:
         return {
            ...state,
            errorMessage: action.payload,
            isFetching: false,
         };

      case TourActionTypes.FETCH_TOURS_SUCCESS:
         return {
            ...state,
            tours: action.payload,
            isFetching: false,
         };

      default:
         return state;
   }
};

export default tourReducer;
