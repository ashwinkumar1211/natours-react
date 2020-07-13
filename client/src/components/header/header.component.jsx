import React from 'react';
import { connect } from 'react-redux';

import {
   Wrapper,
   Logo,
   NavLink,
   SearchWrapper,
   SearchButton,
   SearchInput,
   UserNav,
   UserImage,
} from './header.styles';

const Header = ({ userName, userPhoto }) => {
   const renderIfLoggedIn = () => (
      <React.Fragment>
         <NavLink to="/">My bookings</NavLink>
         <NavLink to="/">
            <UserImage src={`img/users/${userPhoto}`} />
            <span>{userName}</span>
         </NavLink>
      </React.Fragment>
   );

   const renderIfNotLoggedIn = () => (
      <React.Fragment>
         <NavLink to="/login">Log in</NavLink>
         <NavLink to="/signup" cta>
            Sign up
         </NavLink>
      </React.Fragment>
   );

   return (
      <Wrapper>
         <Logo to="/">
            <img src="img/logo-white.png" alt="Natours logo" />
         </Logo>

         <SearchWrapper>
            <SearchInput type="text" placeholder="Search tours" />
            <SearchButton url={`img/icons.svg#icon-search`} />
         </SearchWrapper>

         <UserNav>{userName ? renderIfLoggedIn() : renderIfNotLoggedIn()}</UserNav>
      </Wrapper>
   );
};

const mapStateToProps = (state) => ({
   userName: state.user.userDetails.name,
   userPhoto: state.user.userDetails.photo,
});

export default connect(mapStateToProps)(Header);
