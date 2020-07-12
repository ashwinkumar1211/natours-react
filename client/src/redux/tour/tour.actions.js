import TourActionTypes from './tour.types';

export const fetchToursSuccess = (tours) => ({
   type: TourActionTypes.FETCH_TOURS_SUCCESS,
   payload: tours,
});

export const fetchToursFailure = (errorMessage) => ({
   type: TourActionTypes.FETCH_TOURS_FAILURE,
   payload: errorMessage,
});

// SAGA ACTIONS

export const fetchTours = () => ({
   type: TourActionTypes.FETCH_TOURS,
});
