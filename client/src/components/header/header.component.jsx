import React from 'react';

import {
   Wrapper,
   Logo,
   NavLink,
   SearchWrapper,
   SearchButton,
   SearchInput,
   UserNav,
   // UserImage,
} from './header.styles';

const Header = () => (
   <Wrapper>
      <Logo to="/">
         <img src="img/logo-white.png" alt="Natours logo" />
      </Logo>

      <SearchWrapper>
         <SearchInput type="text" placeholder="Search tours" />
         <SearchButton url={`img/icons.svg#icon-search`} />
      </SearchWrapper>

      <UserNav>
         {/* <NavLink>My bookings</NavLink>
         <NavLink>
            <UserImage src="img/users/user-1.jpg" alt="User photo" />
            <span>Jonas</span>
         </NavLink> */}
         <NavLink to="/login">Log in</NavLink>
         <NavLink to="/signup" cta>
            Sign up
         </NavLink>
      </UserNav>
   </Wrapper>
);

export default Header;
