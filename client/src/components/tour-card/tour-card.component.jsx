import React from 'react';

import * as Card from './tour-card.styles';
import * as Heading from '../../styles/_headings';

const TourCard = () => (
   <Card.Container>
      {/* CARD HEADER */}
      <Card.Header>
         <Card.Picture>
            <div>&nbsp;</div>
            <img src="img/tours/tour-1-cover.jpg" alt="Tour 1" />
         </Card.Picture>

         <Heading.Tertiary>
            <span>The Forest Hiker</span>
         </Heading.Tertiary>
      </Card.Header>

      <Card.Details>
         <Card.SubHeading>Easy 5-day tour</Card.SubHeading>
         <Card.Text>Breathtaking hike through the Canadian Banff National Park</Card.Text>
         <Card.Data>
            <Card.Icon>
               <use xlinkHref="img/icons.svg#icon-map-pin"></use>
            </Card.Icon>
            <span>Banff, Canada</span>
         </Card.Data>
         <Card.Data>
            <Card.Icon>
               <use xlinkHref="img/icons.svg#icon-calendar"></use>
            </Card.Icon>
            <span>April 2021</span>
         </Card.Data>
         <Card.Data>
            <Card.Icon>
               <use xlinkHref="img/icons.svg#icon-flag"></use>
            </Card.Icon>
            <span>3 stops</span>
         </Card.Data>
         <Card.Data>
            <Card.Icon>
               <use xlinkHref="img/icons.svg#icon-user"></use>
            </Card.Icon>
            <span>25 people</span>
         </Card.Data>
      </Card.Details>

      <Card.Footer>
         <p>
            <Card.FooterValue>$297</Card.FooterValue>
            <Card.FooterText>per person</Card.FooterText>
         </p>
         <Card.Ratings>
            <Card.FooterValue>4.9</Card.FooterValue>
            <Card.FooterText>rating (21)</Card.FooterText>
         </Card.Ratings>
         <Card.Button href="#">Details</Card.Button>
      </Card.Footer>
   </Card.Container>
);

export default TourCard;
