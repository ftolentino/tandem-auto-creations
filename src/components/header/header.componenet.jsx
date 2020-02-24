import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      HOME
    </Link>
    <div className="options">
      <Link className="option" to="/decks">
        SHOP DECKS
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      <Link className="option">
        SIGN OUT
      </Link>
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;