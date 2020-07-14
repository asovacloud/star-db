import React from "react";

import planet from './planet.png';
import "./error-indicator.css";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={planet} alt="Planet" className="img" />
      <h4 className="error-indicator__title">BOOM!</h4>
      <div className="error-indicator__description">
        <div>Sometghin has gone terribly wrong</div>
        <div>(but we already sent droids to fix it)</div>
      </div>
    </div>
  );
}

export default ErrorIndicator;