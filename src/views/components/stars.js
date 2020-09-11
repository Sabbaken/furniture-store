import React from 'react';
import _ from 'lodash';

const Stars = ({value = 0, stars = 5, onClick}) => {
  return (
    <div className="stars">
      {_.times(stars, (index) => {
        let name = ['star'];
        if (index <= value) {
          name.push('star--selected')
        }

        return (
          <label key={index}
                 id={index}
                 className={name.join(' ')}
                 onClick={onClick}
          />
        )
      })}
    </div>
  );
};

export default Stars;
