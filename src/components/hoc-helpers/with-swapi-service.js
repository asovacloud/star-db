import React, {useContext} from "react";
import SwapiServiceContext from "../swapi-service-context";

const withSwapiService = (Wrapped, mapMethodsToProps) => {
  return (props) => {
    const swapiService = useContext(SwapiServiceContext);
    const serviceProps = mapMethodsToProps(swapiService);

    return (
      <Wrapped {...props} {...serviceProps} />
    );
  };
};

export default withSwapiService;
