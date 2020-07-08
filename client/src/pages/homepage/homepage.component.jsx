import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TourCard from '../../components/tour-card/tour-card.component';

import { fetchToursStart } from '../../redux/tour/tour.actions';

const HomePage = ({ tours, isFetching, fetchToursStart }) => {
   useEffect(() => {
      fetchToursStart();
   }, [fetchToursStart]);

   return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
         {isFetching ? (
            <p>Loading...</p>
         ) : (
            tours.map((tour) => <TourCard key={tour.id} tour={tour} />)
         )}
      </div>
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
