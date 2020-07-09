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
      <Logo>
         <img src="img/logo-white.png" alt="Natours logo" />
      </Logo>

      <SearchWrapper>
         <SearchInput type="text" placeholder="Search tours" />
         <SearchButton>
            <svg>
               <use xlinkHref="img/icons.svg#icon-search"></use>
            </svg>
         </SearchButton>
      </SearchWrapper>

      <UserNav>
         {/* <NavLink>My bookings</NavLink>
         <NavLink>
            <UserImage src="img/users/user-1.jpg" alt="User photo" />
            <span>Jonas</span>
         </NavLink> */}
         <NavLink>Log in</NavLink>
         <NavLink cta>Sign up</NavLink>
      </UserNav>
   </Wrapper>
);

export default Header;
