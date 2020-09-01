import React from 'react';

const Section = ({children, title}) => {
  return (
    <div className="section">
      <p className="section__title">{title}</p>
      {children}
    </div>
  );
};

export default Section;
