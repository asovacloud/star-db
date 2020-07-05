import React from "react";

import "./header.css";

const Header = () => {
  return (
    <div className="header d-flex mb-3">
      <h3 className="m-0">
        <a href="/">Star DB</a>
      </h3>
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
    </div>
  );
};

export default Header;
