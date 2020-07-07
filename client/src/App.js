import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './global.styles';
import { theme } from './styles/theme';

import TourCard from './components/tour-card/tour-card.component';
import HomePage from './pages/homepage/homepage.component';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/tour" component={TourCard} />
         </Switch>
      </ThemeProvider>
   );
}

export default App;
