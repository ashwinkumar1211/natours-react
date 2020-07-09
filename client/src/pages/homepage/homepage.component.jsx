import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TourCard from '../../components/tour-card/tour-card.component';
import Spinner from '../../components/spinner/spinner.component';

import { fetchToursStart } from '../../redux/tour/tour.actions';

import { Wrapper, SpinnerContainer } from './homepage.styles';

const HomePage = ({ tours, isFetching, fetchToursStart }) => {
   useEffect(() => {
      fetchToursStart();
   }, [fetchToursStart]);

   return (
      <Wrapper>
         {isFetching ? (
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
   isFetching: state.tour.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
   fetchToursStart: () => dispatch(fetchToursStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
