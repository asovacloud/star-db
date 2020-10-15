import React from "react";

import "./header.css";

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex mb-3">
      <h3 className="m-0 logo"><a href="/">Star DB</a></h3>
      <ul className="list-inline ml-auto mt-auto mb-0">
        <li className="list-inline-item">
          <a href="http://google.com">People</a>
        </li>
        <li className="list-inline-item">
          <a href="http://google.com">Planets</a>
        </li>
        <li className="list-inline-item">
          <a href="http://google.com">Starship</a>
        </li>
      </ul>
      <button
        onClick={onServiceChange}
        className="btn btn-primary btn-small"
      >Service Change</button>
    </div>
  );
};

export default Header;
