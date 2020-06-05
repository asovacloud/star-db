import React from 'react'

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex mb-3">
      <h3 className="m-0">
        <a href="/">Star DB</a>
      </h3>
      <ul className="list-inline ml-auto mt-auto mb-0">
        <li className="list-inline-item">
          <a href="#">People</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Planets</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Starship</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;