import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.componenet';
import DecksPage from './pages/skate-decks/deckspage.component';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/decks' component={DecksPage} />
      </Switch>
    </div>
  );
}

export default App;
