import React from 'react';
import moment from 'moment';

import { Wrapper, Header, Image, Title } from './tour-card.styles'; // Header
import { Body, SubHeading, Description, Detail, Icon } from './tour-card.styles'; // Body
import { Footer, Price, Ratings, Value, Text, Button } from './tour-card.styles'; // Footer

const TourCard = ({ tour }) => {
   const {
      imageCover,
      name,
      difficulty,
      duration,
      summary,
      price,
      ratingsQuantity,
      ratingsAverage,
   } = tour;

   const renderDetails = () => {
      const icons = ['map-pin', 'calendar', 'flag', 'user'];

      const { startLocation, startDates, locations, maxGroupSize } = tour;

      const location = startLocation.description;
      const date = moment(startDates[0]).format('MMM YYYY');
      const stops = `${locations.length} stops`;
      const maxSize = `${maxGroupSize} people`;

      return [location, date, stops, maxSize].map((item, i) => (
         <Detail>
            <Icon>
               <use xlinkHref={`img/icons.svg#icon-${icons[i]}`}></use>
            </Icon>
            <span>{item}</span>
         </Detail>
      ));
   };

   return (
      <Wrapper>
         {/* CARD HEADER */}
         <Header>
            <Image>
               <div>&nbsp;</div>
               <img src={`img/tours/${imageCover}`} alt="Tour 1" />
            </Image>

            <Title>
               <span>{name}</span>
            </Title>
         </Header>

         {/* CARD BODY */}
         <Body>
            <SubHeading>{`${difficulty} ${duration}-day tour`}</SubHeading>
            <Description>{summary}</Description>

            {renderDetails()}
         </Body>

         {/* CARD FOOTER */}
         <Footer>
            <Price>
               <Value>${price}</Value>
               <Text>per person</Text>
            </Price>
            <Ratings>
               <Value>{ratingsAverage}</Value>
               <Text>{`rating (${ratingsQuantity})`}</Text>
            </Ratings>
            <Button href="#">Details</Button>
         </Footer>
      </Wrapper>
   );
};

export default TourCard;
