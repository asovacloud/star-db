import React from "react";
import { Link } from 'react-router-dom';

import "./header.css";

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex mb-3">
      <h3 className="m-0 logo"><Link to="/">Star DB</Link></h3>
      <ul className="list-inline ml-auto mt-auto mb-auto mb-0">
        <li className="list-inline-item">
          <Link to="/people/">People</Link>
        </li>
        <li className="list-inline-item">
          <Link to="/planets/">Planets</Link>
        </li>
        <li className="list-inline-item">
          <Link to="/starships/">Starships</Link>
        </li>
        <li className="list-inline-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="list-inline-item">
          <Link to="/secret">Secret</Link>
        </li>
      </ul>
      <button
        onClick={onServiceChange}
        className="btn btn-primary btn-small mt-auto mb-auto"
      >Service Change</button>
    </div>
  );
};

export default Header;
