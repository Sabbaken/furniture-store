import React from 'react';
import {Link} from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      404 page not found
      <Link to="/">Go to main</Link>
    </div>
  );
};

export default PageNotFound;
