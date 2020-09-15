import React from 'react';

const Card = ({children, title}) => {
  return (
    <div className="card">
      <p className="card__title">{title}</p>
      {children}
    </div>
  );
};

export default Card;
