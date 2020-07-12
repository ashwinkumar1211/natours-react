import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TourCard from '../../components/tour-card/tour-card.component';
import Spinner from '../../components/spinner/spinner.component';

import { fetchTours } from '../../redux/tour/tour.actions';
import { isActionPending } from '../../redux/ui/ui.selectors';

import { Wrapper, SpinnerContainer } from './homepage.styles';

const HomePage = ({ tours, isLoading, fetchTours }) => {
   useEffect(() => {
      fetchTours();
   }, [fetchTours]);

   return (
      <Wrapper>
         {isLoading ? (
            <SpinnerContainer>
               <Spinner size={80} />
            </SpinnerContainer>
         ) : (
            tours.map((tour) => <TourCard key={tour.id} tour={tour} />)
         )}
      </Wrapper>
   );
};

const mapStateToProps = (state) => ({
   tours: state.tour.tours,
   isLoading: isActionPending(state, fetchTours),
});

const mapDispatchToProps = (dispatch) => ({
   fetchTours: () => dispatch(fetchTours()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
